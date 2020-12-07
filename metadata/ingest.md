---
layout: page
title: Ingest
parent: Metadata
permalink: /metadata/ingest/
nav_order: 1
---
## Ingest Methods

The section describes the different methods for ingesting metadata to Amagi Services. The method is largely classified as Push and Pull methods.

![Amagi Metadata Services](https://vinod-amagi.github.io/amgdoc/metadata/metadata_ingest_svc.png)


### Push

In this method, content providers are provided all four methods for ingesting metadata to Amagi Metadata Service. The input metadata formats are published and maintained by Amagi Metadata service. These formats are available [here](https://vinod-amagi.github.io/amgdoc/metadata/ingest).

These methods are:

1. **S3 Upload**

2. **SFTP Upload**

3. **HTTP Post Endpoint**

4. **Simple Web page supporting multiple metadata**

### S3 Upload

All metadata upload for all customers are processed through a common AWS S3 Bucket.

 | Directories | Description |
 |-------------|-------------|
 |Customer | A directory is created for each customer|
 |Account| A directory is created under “Customer” directory for each account for a customer|
 |ToProcess|Customer ingests metadata input files to “ToProcess” directory|
 |Processed|Processed metadata is moved to “Processed” directory|
 |Errors|Metadata with error is moved to “Errors” directory|
 

### Pull

Amagi metadata service can be configured to periodically pull new and updated metadata from mRSS and API Endpoints. As these methods involve development of custom endpoints, provisioning a new account will be specific to the request.

1. **mRSS**

The mRSS format is usually customer specific and hence involves additional development time to create a custom endpoint to parse mRSS feed. If the mRSS format follows closely with Amagi format, the development time for ingesting a new type of mRSS feed can be reduced.

2. **API**

Third party API involves additional development effort to create custom workflow to scan API periodically and ingest metadata.

