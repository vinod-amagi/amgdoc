---
title: Schedules Ingest
description: Describes the method to ingest schedule to Amagi CLOUDPORT
published: true
date: 2021-02-03T05:30:50.097Z
tags: 
editor: undefined
dateCreated: 2021-01-27T08:06:23.691Z
---

# Schedules Ingest

Amagi CLOUDPORT allows various methods to ingest schedules. The different methods are as follows:-

1. Web UI
2. Amagi CP-Planner
3. Integration with Channel's workflow
		a. HTTP Post
    b. Direct S3 Upload
    c. SFTP Upload
4. Amagi automation workflow 
    a. Scan S3 folder
    b. Scan API Endpoint

![amagi-playlist-workflow.png](/amagi-playlist-workflow.png)

## Web UI
<p align="justify">
Amagi CLOUDPORT allows scheduler upload playlist/schedule using Web UI. The Web UI uses Amagi CLOUDPORT's REST API to submit schedule to 
> the CLOUDPORT automation. The uploaded schedule is processed by CLOUDPORT automation and automation rules are applied. The errors and warnings are displayed on the Web UI after processing the schedule.

</p>

## Amagi CP-Planner
<p align="justify">
Amagi CP-PLANNER is a simple content planning and scheduling platform that is a lightweight alternative to a full-fledged traffic system. CP-PLANNER makes content planning and scheduling for both broadcast TV and streaming TV easy and efficient.

 The CP-Planner displays the media with the program hierarchy to help the Scheduler select the media to schedule in the calendar view. Program schedule and EPG is created across multiple days along with scheduling patterns like daily, only weekends or any specific custom pattern. The complete schedule is created through automation using custom rules defined by the channel. A complete daily schedule is uploaded to Amagi CLOUDPORT playout platform using HTTP Post method.
</p>

## Channel workflow integration
<p align="justify">
Amagi CLOUDPORT allows integration with partner's workflow systems using loosely coupled system. There are different methods through which schedule can be ingested to Amagi CLOUDPORT platform. The methods are listed as below:- 
</p>

- **HTTP Post**
Amagi CLOUDPORT provides REST API interface for uploading schedule to the platform. The API is authenticated using token based authentication.

- **Direct S3 Upload**
The playlist schedule can be uploaded to AWS S3 Bucket, and this copying triggers AWS Lambda to process the uploaded file. The newly copied file is uploaded to Amagi CLOUDPORT by the AWS S3 Lambda.

>
> **Bulk Upload**: Amagi CLOUDPORT offloads the bulk files uploaded to the S3 bucket to a serveless application. The serverless application supports throttling the simultaneous processing of files to esnure availability of the system.
{.is-info}

- **SFTP Upload**
Similar to S3 upload, Amagi CLOUDPORT also provides SFTP mechanism to upload playlist schedule. The upload files are processed using the procedure described for S3 upload.

# Amagi workflows
<p align="justify">
Amagi provides service to integrate with custom endpoints through Amagi Workflow service. This platform connects to different source points to periodically poll for the new or updated schedules. The schedules are uploaded to Amagi CLOUDPORT platform using the methods described above.
</p>

- **HTTP Endpoint**
Amagi Workflow scans an HTTP Endpoint or REST API periodically and extracts new schedules. These schedules are uploaded to Amagi CLOUDPORT through standard ingest mechanisms provided by Amagi CLOUDPORT.

<p>
  
- **S3 Polling**
Amagi Workflow scans an AWS S3 Bucket periodically to locate new schedules. These schedules are uploaded to Amagi CLOUDPORT through standard ingest mechanisms provided by Amagi CLOUDPORT.

<p>

 - **Pre-processing**
The service allows pre-processing the schedules based on the custom rules defined for the ingest workflow.

*Example:* 
 - Uploading to two different channels
 - Replace programs
 - Replace commercials or restricted promos
