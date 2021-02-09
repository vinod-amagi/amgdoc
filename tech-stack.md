---
title: Technology Stack
description: Details on the technology stack used to implement the ingest service
published: true
date: 2021-01-14T10:17:32.208Z
tags: 
editor: undefined
dateCreated: 2021-01-14T10:17:30.569Z
---

# Technology Stack

## Cloud Infrastructure

The service is a set of micro-services that are deployed as **kubernetes** cluster. The kubernetes infra is deployed in **AWS EKS Cluster**.

## Cluster Management
The cluster is managed using [**Rancher**](https://rancher.com/).

## Workflow Orchestration

The media ingest and processing workflows are managed using [**Argo**](https://argoproj.github.io/).

## Ingest Provisioning API

The REST interfaces are implemented using [**FastAPI**](https://fastapi.tiangolo.com/).

## Ingest Dashboard

The front-end user interface is developed using [**ReactJS**](https://reactjs.org/).

## Programming Languages

**Python**
**GoLang**
**Javascript**