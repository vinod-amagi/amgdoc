---
title: Production Setup
description: 
published: true
date: 2021-03-03T15:24:41.038Z
tags: 
editor: markdown
dateCreated: 2021-02-24T07:27:54.147Z
---

# Production Setup

Import Cluster to Rancher (https://dvarapala.amagi.tv/)  use other cluster option

<br />

### Argo : 

1. Apply Latest Argo into cluster under `media-ingest` namespace 
```bash
kubectl apply -n media-ingest -f https://raw.githubusercontent.com/argoproj/argo/stable/manifests/namespace-install.yaml
```

2. Apply loadbalancer for Argo Server
```bash
kubectl patch svc argo-server -n media-ingest -p '{"spec": {"type": "LoadBalancer"}}` 
```
{Exposing Argo server to outside}

3. Provide workflow-role (access definition for argo server)
```bash
cat <<EoF > workflow-role.yml
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: workflow-role
  namespace: media-ingest
rules:
# pod get/watch is used to identify the container IDs of the current pod
# pod patch is used to annotate the step's outputs back to controller (e.g. artifact location)
- apiGroups:
  - ""
  resources:
  - pods
  verbs:
  - get
  - watch
  - patch
# logs get/watch are used to get the pods logs for script outputs, and for log archival
- apiGroups:
  - ""
  resources:
  - pods/log
  verbs:
  - get
  - watch
---
apiVersion: rbac.authorization.k8s.io/v1beta1
kind: RoleBinding
metadata:
  name: workflow-role-binding
  namespace: media-ingest
subjects:
- kind: ServiceAccount
  name: default
  namespace: media-ingest
roleRef:
  kind: Role
  name: workflow-role
  apiGroup: rbac.authorization.k8s.io
EoF
```

4. Apply `workflow-role.yaml` into Cluster
```bash
kubectl apply -f workflow-role.yaml
```
<br />

### Kubernetes Secret (For DockerHub + ONB AWS Access) :

1. Store `secrets.yml` 
```bash
cat <<EoF > secrets.yml
apiVersion: v1
data:
  aws_details: eyJhY2Nlc3Nfa2V5IjoiQUtJQTZLUTNRWFZJVkdPQUtWUFYiLCAic2VjcmV0X2tleSI6IkpIczBkZWFrOVVPL0JkSUc5YlY3ZzQrMHppa3ErVWZJRlpCTHhsMGciLCAicmVnaW9uX25hbWUiOiJ1cy1lYXN0LTEifQo=
kind: Secret
metadata:
  name: garage
  namespace: media-ingest
type: Opaque

apiVersion: v1
data:
  .dockerconfigjson: ewoJImF1dGhzIjogewoJCSJodHRwczovL2luZGV4LmRvY2tlci5pby92MS8iOiB7CgkJCSJhdXRoIjogIllXMWhaMmxrWlhadmNITTZZbVZsWm1Wa01ERXdPQT09IgoJCX0KCX0sCgkiSHR0cEhlYWRlcnMiOiB7CgkJIlVzZXItQWdlbnQiOiAiRG9ja2VyLUNsaWVudC8xOS4wMy42IChsaW51eCkiCgl9Cn0=
kind: Secret
metadata:
  name: regcred
  namespace: media-ingest
type: kubernetes.io/dockerconfigjson
EoF
```
2. Apply `secrets.yaml` into Cluster
```bash
kubectl apply -n media-ingest -f secrets.yaml
```

<br />

### EFK Cluster :

EFK on EKS Cluster Steps  (xref: https://www.digitalocean.com/community/tutorials/how-to-set-up-an-elasticsearch-fluentd-and-kibana-efk-logging-stack-on-kubernetes):

1. Create namespace to host the EFK pods:
```bash
cat <<EoF > efk_namespace.yml
kind: Namespace
apiVersion: v1
metadata:
  name: efk
EoF
```

2. Apply `efk_namespace.yaml` into Cluster
```bash
kubectl apply -f efk_namespace.yaml
```

3. Create an elasticsarch statefulset to run HA pods of elasticsearch db cluster :
```bash
cat <<EoF > elasticsearch_stateful.yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: es-cluster
  namespace: efk
spec:
  serviceName: elasticsearch
  replicas: 3
  selector:
    matchLabels:
      app: elasticsearch
  template:
    metadata:
      labels:
        app: elasticsearch
    spec:
      containers:
        - name: elasticsearch
          image: docker.elastic.co/elasticsearch/elasticsearch:7.2.0
          resources:
            limits:
              cpu: 1000m
            requests:
              cpu: 100m
          ports:
            - containerPort: 9200
              name: rest
              protocol: TCP
            - containerPort: 9300
              name: inter-node
              protocol: TCP
          volumeMounts:
            - name: es-cluster-data
              mountPath: /usr/share/elasticsearch/data
          env:
            - name: cluster.name
              value: k8s-logs
            - name: node.name
              valueFrom:
                fieldRef:
                  fieldPath: metadata.name
            - name: discovery.seed_hosts
              value: "es-cluster-0.elasticsearch,es-cluster-1.elasticsearch,es-cluster-2.elasticsearch"
            - name: cluster.initial_master_nodes
              value: "es-cluster-0,es-cluster-1,es-cluster-2"
            - name: ES_JAVA_OPTS
              value: "-Xms512m -Xmx512m"
      initContainers:
        - name: fix-permissions
          image: busybox
          command: [ "sh", "-c", "chown -R 1000:1000 /usr/share/elasticsearch/data" ]
          securityContext:
            privileged: true
          volumeMounts:
            - name: es-cluster-data
              mountPath: /usr/share/elasticsearch/data
        - name: increase-vm-max-map
          image: busybox
          command: [ "sysctl", "-w", "vm.max_map_count=262144" ]
          securityContext:
            privileged: true
        - name: increase-fd-ulimit
          image: busybox
          command: [ "sh", "-c", "ulimit -n 65536" ]
          securityContext:
            privileged: true
  volumeClaimTemplates:
    - metadata:
        name: es-cluster-data
        labels:
          app: elasticsearch
      spec:
        accessModes: [ "ReadWriteOnce" ]
        storageClassName: elastic-data
        resources:
          requests:
            storage: 30Gi
EoF
```

4. Apply `elasticsearch_stateful.yaml` into Cluster
```bash
kubectl apply -f elasticsearch_stateful.yaml
```

5. Expose elasticsearch as a headless service for kibana to reach  : 
```bash
cat <<EoF > elasticsearch_svc.yml
kind: Service
apiVersion: v1
metadata:
  name: elasticsearch
  namespace: efk
  labels:
    app: elasticsearch
spec:
  selector:
    app: elasticsearch
  clusterIP: None
  ports:
    - port: 9200
      name: rest
    - port: 9300
      name: inter-node
EoF
```

6. Apply `elasticsearch_svc` into Cluster :
```bash
kubectl apply -f elasticsearch_svc.yaml  
```

7. Deploy kibana pods :
```bash
cat <<EoF > kibana.yml
apiVersion: v1
kind: Service
metadata:
  name: kibana
  namespace: efk
  labels:
    app: kibana
spec:
  ports:
    - port: 5601
  selector:
    app: kibana
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: kibana
  namespace: efk
  labels:
    app: kibana
spec:
  replicas: 1
  selector:
    matchLabels:
      app: kibana
  template:
    metadata:
      labels:
        app: kibana
    spec:
      containers:
        - name: kibana
          image: docker.elastic.co/kibana/kibana:7.2.0
          resources:
            limits:
              cpu: 1000m
            requests:
              cpu: 100m
          env:
            - name: ELASTICSEARCH_URL
              value: http://elasticsearch:9200
          ports:
            - containerPort: 5601
EoF
```

8. Apply `kibana` into Cluster :
```bash
kubectl apply -f kibana.yaml
```

9. Create serviceaccount for FluentBit :
```bash
cat <<EoF > fb-sa.yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: fluent-bit
  namespace: efk
  labels:
    app: fluent-bit
---
apiVersion: v1
kind: ServiceAccount
metadata:
  name: fluent-bit
  namespace: media-ingest
  labels:
    app: fluent-bit
EoF
```

10. Apply `fb-sa` into Cluster :
```bash
kubectl apply -f fb-sa.yaml
```

11. Create rolebinding for FluentBit :

```bash
cat <<EoF > fb-rolebinding.yaml
kind: ClusterRoleBinding
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  name: fluent-bit
roleRef:
  kind: ClusterRole
  name: fluent-bit
  apiGroup: rbac.authorization.k8s.io
subjects:
  - kind: ServiceAccount
    name: fluent-bit
    namespace: efk
---
kind: ClusterRoleBinding
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  name: fluent-bit
roleRef:
  kind: ClusterRole
  name: fluent-bit
  apiGroup: rbac.authorization.k8s.io
subjects:
  - kind: ServiceAccount
    name: fluent-bit
    namespace: media-ingest
EoF
```

12. Apply `fb-rolebinding` into Cluster :
```bash
kubectl create -f fb-rolebinding.yml 
```

13. Create FluentBit configuration  : 
```bash
cat <<EoF > fb-configmap.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: fluent-bit-config
  namespace: efk
  labels:
    k8s-app: fluent-bit
data:
  # Configuration files: server, input, filters and output
  # ======================================================
  fluent-bit.conf: |
    [SERVICE]
        Flush         1
        Log_Level     info
        Daemon        off
        Parsers_File  parsers.conf
        HTTP_Server   On
        HTTP_Listen   0.0.0.0
        HTTP_Port     2020

    @INCLUDE input-kubernetes.conf
    @INCLUDE filter-kubernetes.conf
    @INCLUDE output-elasticsearch.conf

  input-kubernetes.conf: |
    [INPUT]
        Name              tail
        Tag               kube.*
        Path              /var/log/containers/*.log
        Parser            docker
        DB                /var/log/flb_kube.db
        Mem_Buf_Limit     5MB
        Skip_Long_Lines   On
        Refresh_Interval  10

  filter-kubernetes.conf: |
    [FILTER]
        Name                kubernetes
        Match               kube.*
        Kube_URL            https://kubernetes.default.svc:443
        Kube_CA_File        /var/run/secrets/kubernetes.io/serviceaccount/ca.crt
        Kube_Token_File     /var/run/secrets/kubernetes.io/serviceaccount/token
        Kube_Tag_Prefix     kube.var.log.containers.
        Merge_Log           On
        Merge_Log_Key       log_processed
        K8S-Logging.Parser  On
        K8S-Logging.Exclude Off

  output-elasticsearch.conf: |
    [OUTPUT]
        Name            es
        Match           *
        Host            ${FLUENT_ELASTICSEARCH_HOST}
        Port            ${FLUENT_ELASTICSEARCH_PORT}
        Logstash_Format On
        Replace_Dots    On
        Retry_Limit     False

  parsers.conf: |
    [PARSER]
        Name   apache
        Format regex
        Regex  ^(?<host>[^ ]*) [^ ]* (?<user>[^ ]*) \[(?<time>[^\]]*)\] "(?<method>\S+)(?: +(?<path>[^\"]*?)(?: +\S*)?)?" (?<code>[^ ]*) (?<size>[^ ]*)(?: "(?<referer>[^\"]*)" "(?<agent>[^\"]*)")?$
        Time_Key time
        Time_Format %d/%b/%Y:%H:%M:%S %z

    [PARSER]
        Name   apache2
        Format regex
        Regex  ^(?<host>[^ ]*) [^ ]* (?<user>[^ ]*) \[(?<time>[^\]]*)\] "(?<method>\S+)(?: +(?<path>[^ ]*) +\S*)?" (?<code>[^ ]*) (?<size>[^ ]*)(?: "(?<referer>[^\"]*)" "(?<agent>[^\"]*)")?$
        Time_Key time
        Time_Format %d/%b/%Y:%H:%M:%S %z

    [PARSER]
        Name   apache_error
        Format regex
        Regex  ^\[[^ ]* (?<time>[^\]]*)\] \[(?<level>[^\]]*)\](?: \[pid (?<pid>[^\]]*)\])?( \[client (?<client>[^\]]*)\])? (?<message>.*)$

    [PARSER]
        Name   nginx
        Format regex
        Regex ^(?<remote>[^ ]*) (?<host>[^ ]*) (?<user>[^ ]*) \[(?<time>[^\]]*)\] "(?<method>\S+)(?: +(?<path>[^\"]*?)(?: +\S*)?)?" (?<code>[^ ]*) (?<size>[^ ]*)(?: "(?<referer>[^\"]*)" "(?<agent>[^\"]*)")?$
        Time_Key time
        Time_Format %d/%b/%Y:%H:%M:%S %z

    [PARSER]
        Name   json
        Format json
        Time_Key time
        Time_Format %d/%b/%Y:%H:%M:%S %z

    [PARSER]
        Name        docker
        Format      json
        Time_Key    time
        Time_Format %Y-%m-%dT%H:%M:%S.%L
        Time_Keep   On

    [PARSER]
        Name        syslog
        Format      regex
        Regex       ^\<(?<pri>[0-9]+)\>(?<time>[^ ]* {1,2}[^ ]* [^ ]*) (?<host>[^ ]*) (?<ident>[a-zA-Z0-9_\/\.\-]*)(?:\[(?<pid>[0-9]+)\])?(?:[^\:]*\:)? *(?<message>.*)$
        Time_Key    time
        Time_Format %b %d %H:%M:%S
---
apiVersion: v1
kind: ConfigMap
metadata:
  name: fluent-bit-config
  namespace: media-ingest
  labels:
    k8s-app: fluent-bit
data:
  # Configuration files: server, input, filters and output
  # ======================================================
  fluent-bit.conf: |
    [SERVICE]
        Flush         1
        Log_Level     info
        Daemon        off
        Parsers_File  parsers.conf
        HTTP_Server   On
        HTTP_Listen   0.0.0.0
        HTTP_Port     2020

    @INCLUDE input-kubernetes.conf
    @INCLUDE filter-kubernetes.conf
    @INCLUDE output-elasticsearch.conf

  input-kubernetes.conf: |
    [INPUT]
        Name              tail
        Tag               kube.*
        Path              /var/log/containers/*.log
        Parser            docker
        DB                /var/log/flb_kube.db
        Mem_Buf_Limit     5MB
        Skip_Long_Lines   On
        Refresh_Interval  10

  filter-kubernetes.conf: |
    [FILTER]
        Name                kubernetes
        Match               kube.*
        Kube_URL            https://kubernetes.default.svc:443
        Kube_CA_File        /var/run/secrets/kubernetes.io/serviceaccount/ca.crt
        Kube_Token_File     /var/run/secrets/kubernetes.io/serviceaccount/token
        Kube_Tag_Prefix     kube.var.log.containers.
        Merge_Log           On
        Merge_Log_Key       log_processed
        K8S-Logging.Parser  On
        K8S-Logging.Exclude Off

  output-elasticsearch.conf: |
    [OUTPUT]
        Name            es
        Match           *
        Host            ${FLUENT_ELASTICSEARCH_HOST}
        Port            ${FLUENT_ELASTICSEARCH_PORT}
        Logstash_Format On
        Replace_Dots    On
        Retry_Limit     False

  parsers.conf: |
    [PARSER]
        Name   apache
        Format regex
        Regex  ^(?<host>[^ ]*) [^ ]* (?<user>[^ ]*) \[(?<time>[^\]]*)\] "(?<method>\S+)(?: +(?<path>[^\"]*?)(?: +\S*)?)?" (?<code>[^ ]*) (?<size>[^ ]*)(?: "(?<referer>[^\"]*)" "(?<agent>[^\"]*)")?$
        Time_Key time
        Time_Format %d/%b/%Y:%H:%M:%S %z

    [PARSER]
        Name   apache2
        Format regex
        Regex  ^(?<host>[^ ]*) [^ ]* (?<user>[^ ]*) \[(?<time>[^\]]*)\] "(?<method>\S+)(?: +(?<path>[^ ]*) +\S*)?" (?<code>[^ ]*) (?<size>[^ ]*)(?: "(?<referer>[^\"]*)" "(?<agent>[^\"]*)")?$
        Time_Key time
        Time_Format %d/%b/%Y:%H:%M:%S %z

    [PARSER]
        Name   apache_error
        Format regex
        Regex  ^\[[^ ]* (?<time>[^\]]*)\] \[(?<level>[^\]]*)\](?: \[pid (?<pid>[^\]]*)\])?( \[client (?<client>[^\]]*)\])? (?<message>.*)$

    [PARSER]
        Name   nginx
        Format regex
        Regex ^(?<remote>[^ ]*) (?<host>[^ ]*) (?<user>[^ ]*) \[(?<time>[^\]]*)\] "(?<method>\S+)(?: +(?<path>[^\"]*?)(?: +\S*)?)?" (?<code>[^ ]*) (?<size>[^ ]*)(?: "(?<referer>[^\"]*)" "(?<agent>[^\"]*)")?$
        Time_Key time
        Time_Format %d/%b/%Y:%H:%M:%S %z

    [PARSER]
        Name   json
        Format json
        Time_Key time
        Time_Format %d/%b/%Y:%H:%M:%S %z

    [PARSER]
        Name        docker
        Format      json
        Time_Key    time
        Time_Format %Y-%m-%dT%H:%M:%S.%L
        Time_Keep   On

    [PARSER]
        Name        syslog
        Format      regex
        Regex       ^\<(?<pri>[0-9]+)\>(?<time>[^ ]* {1,2}[^ ]* [^ ]*) (?<host>[^ ]*) (?<ident>[a-zA-Z0-9_\/\.\-]*)(?:\[(?<pid>[0-9]+)\])?(?:[^\:]*\:)? *(?<message>.*)$
        Time_Key    time
        Time_Format %b %d %H:%M:%S
EoF
```

14. Apply `fb-rolebinding` into Cluster :
```bash
kubectl create -f fb-configmap.yml 
```
