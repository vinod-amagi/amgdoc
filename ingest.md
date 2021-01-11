---
title: Ingest Methods
description: 
published: true
date: 2021-01-11T16:40:55.967Z
tags: 
editor: markdown
---

## Ingest Methods

The section describes the different methods for ingesting media assets and metadata to Amagi services. The method is largely classified as Push (drop-off) and Pull (feed) methods.

![Amagi Media Ingest Service](https://vinod-amagi.github.io/amgdoc/metadata/metadata_ingest_svc.png)

### Push (drop-off)

<p align="justify">
In this method, content providers are facilitated with four methods for ingesting media assets and metadata to Amagi services. The media assets may be delivered as part of the meta-data (e.g. a "url" field/tag/attribute in metadata) or separately on their own. If the media assets are delivered separately, the video file name will be used as the identifier to match the respective metadata. The input metadata formats are published and maintained by Amagi Media Ingest Service. These formats are available here for reference.
</p>

These methods are:

1. **S3 Upload**

2. **SFTP Upload**

3. **HTTP Post Endpoint**

4. **Simple Web page supporting multiple metadata**

<p align="justify">
<strong>Note:</strong>
In cases where the media assets' locations are delivered as part of the metadata, the Media Ingest Service will download the files into Amagi S3 for further processing, consumption and delivery. 
</p>

#### S3 Upload

In this method, access to one or more AWS S3 buckets will be provided for content partners to directly upload the media assets and metadata. 

##### Media

An S3 bucket will be created as part of the Cloudport / VoD products to which the media assets will be directly uploaded by the content partner.

##### Metadata

For metadata uploads, a common AWS S3 bucket will be used for all partners. An access controlled directory/prefix will be created dedicated to each content partner for security and data separation.

```
<Partner-Name>
    |
    |--<Account-Name>
       |
       |--<Ingest-Flow-Name>
              |
              |--ToProcess
              |--Processed
              |--Errors
```

 | Directories | Description |
 |-------------|-------------|
 |Partner | A directory is created for each partner|
 |Account| A directory is created under “partner” directory for each account for a partner|
 |ToProcess|partner ingests metadata input files to “ToProcess” directory|
 |Processed|Processed metadata is moved to “Processed” directory|
 |Errors|Metadata with error is moved to “Errors” directory|

#### SFTP Upload

##### Media

An SFTP account (backed by AWS S3) will be created as part of the Cloudport / VoD products to which the media assets will be directly uploaded by the content partner. It is recommended that SFTP is used only for smaller sized media assets (e.g. short forms, ads, promos, fillers etc.,) if the transfer is done manually.

##### Metadata

Similar to the S3 upload, a directory structure will be established in the SFTP folder for content partners to upload metadata.

```
<Partner-Name>
    |
    |--<Account-Name>
       |
       |--<Ingest-Flow-Name>
              |
              |--ToProcess
              |--Processed
              |--Errors
```

 | Directories | Description |
 |-------------|-------------|
 |Partner |A directory is created for each partner|
 |Account|A directory is created under “partner” directory for each account for a partner|
 |ToProcess|partner ingests metadata input files to “ToProcess” directory|
 |Processed|Processed metadata is moved to “Processed” directory|
 |Errors|Metadata with error is moved to “Errors” directory|

#### HTTP Post Endpoint

##### Media & Metadata
An access controlled HTTPS API end-point will be shared with the content partners to upload media assets and metadata. It is recommended that SFTP is used only for smaller sized media assets (e.g. short forms such as ads, promos, fillers etc.,) if the transfer is done manually.

### Pull (feed)
Amagi metadata service can be configured to periodically pull new and updated metadata from mRSS and APIs. As these methods usually involve development of custom endpoints, provisioning a new account will be specific to the request.

1. **mRSS**

The mRSS format is usually partner-specific and hence involves additional development time to create a custom endpoint to parse mRSS feed. If the mRSS format follows closely the Amagi supported format, the development time for the same can be reduced.

2. **API**

Third party API involves additional development effort to create custom workflow to scan API periodically and ingest metadata.