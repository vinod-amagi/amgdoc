---
title: CLOUDPORT
description: Amagi CLOUDPORT Platform
published: true
date: 2021-01-25T14:51:23.519Z
tags: 
editor: undefined
dateCreated: 2021-01-25T10:44:55.878Z
---

# CLOUDPORT

Amagi CLOUDPORT platform consists of :

- `Automation` in the cloud to manage contents and schedules
- `Playout` in the cloud
- Integrations
	- To ingest contents and schedules to `cloud automation`
  - To deliver playout output from `playout`

The diagram depicts cloud automation, playout and different integrations in the CLOUDPORT platform.

![cloudport.png](/cloudport.png)

## Content Acquisition

The media content from content store is ingested to Amagi CLOUDPORT using various integration methods. Amagi CLOUDPORT uses AWS S3 object store for storing contents. There is support for a number of methods for uploading contents to AWS S3 bucket.
<br>

### Media Ingest Service

Amagi's media ingest service integrates contents and metadata delivery methods for different Amagi services like CLOUDPORT, EPG, VOD and Analytics. The ingest service offers different methods to choose for ingesting contents and metadata to Amagi Media DataBase (AMDB). The service is continously integrating different methods based on new requirements from content partners, channels and networks. More details about ingest using Amagi Media Ingest Service is available here - [Amagi Media DataBase](https://docs.amagi.tv/en/ingest).

<br>

### Other methods

![amagi-media-transfer.png](/amagi-media-transfer.png)

| Method| Description|Use Case|
|----|-----|----|
| **S3 Client Apps** | S3 Client apps allow to upload content from an on-prem computer| # Upload contents 10GB per day<br> # Limit is dependant of bandwidth availability<br> #  Require manual steps to upload|
|Fast File Transfer| Uses Fast File transfer services - Aspera, Signinant| # Can be integrated with Fast File Transfer workflows<br> # Can be used along with Fast File Transfer client applications |
|Amagi MAM Adpaters| Amagi's On-prem application or services for uploading contents| # On-prem installation is required<br> # Watch Folder based workflow |
|AWS Snowball| AWS Service to ingest large volume of contents to AWS S3| # Suitable for uploading large amount contents to AWS S3<br> # Suitable for initial ingest| 


## Schedules Acquisition

Amagi CLOUDPORT platform is adding support for a growing list of playlist/schedule formats and outputs from various scheduling systems. These formats and elements of schedules are describes [here](scheduling).

