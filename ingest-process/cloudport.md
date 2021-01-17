---
title: Amagi CLOUDPORT
description: Describes ingest mechanism for Amagi CLOUDPORT
published: true
date: 2021-01-17T16:34:01.956Z
tags: 
editor: markdown
dateCreated: 2021-01-17T16:34:01.956Z
---

# Amagi CLOUDPORT

<p align="justify">
Amagi creates a unique <a href="https://aws.amazon.com/s3/">AWS S3</a> bucket for each partner. This bucket will be used for storing video, audio, subtitles, closed captions, graphics and metadata used for Amagi CLOUDPORT linear playout. An AWS user will be created with with permission for uploading contents to the specified folders. The access key and secret key for the AWS user will be provided to the partner. The S3 transfer using third party applications or services can be configured using these keys. The contents uploaded to the AWS S3 bucket will be processed automatically and the same will be available in the Amagi CLOUDPORT's media library. 
 </p>

<p align="justify">
  PArtners can upload video in <a href='../metadata/contents'><b>formats</b></a> supported by Amagi CLOUDPORT platform. The video files are transcoded to MPEG-TS for as part of video processing by Amagi CLOUDPORT. Amagi CLOUDPORT supports playing <a href="https://en.wikipedia.org/wiki/Material_Exchange_Format"/>MXF</a> files natively and hence can avoid transcoding as part of the processing. The processed files are further analysed for quality issues with video using an automated QC process. The metadata  about the content can be ingested directly to S3 Bucket. These metadata contains information used for linear channel playout. This information is as follows:-
 </p>
   
  * Title
  * Segments - SMPTE Timecode marking start (*SOM*) and end (*EOM*) of segements
  * Content Type - program, series, promo, commercials etc. This information is used for configuring automation for logo, graphics, identifying commercial breaks, scheduling DTMF/SCTE.
  * AFD, V-CHIP etc.
  

| **Folders**| |
|---|---|
|**AWS S3 Bucket Name**|Amagi CLOUDPORT uses naming convention as `amagicloud-<partner-name>`<br>e.g. amagicloudport-mychannel|
|<kbd>Media/S3</kbd>|Upload video assets as per the supported format to this folder|
|<kbd>Meta/S3</kbd>|Meta xml for assets uploaded. The name of the meta file should be such that the base-name matches the asset-id. E.g. if the video ingested is AMG34322.ts, the corresponding XML must be AMG34322.xml|
|<kbd>Subtitles/S3</kbd>|Upload subtitles (e.g. PAC, SRT, STL, SCC, MCC etc.)|
|<kbd>Graphics/S3</kbd>|Upload TGA sequences or Adobe After Effects file to this folder|
|<kbd>Audio/S3</kbd>|Upload Audio files [WAV](https://en.wikipedia.org/wiki/WAV) format to this folder|
|<kbd>Rescue/S3</kbd>|Upload rescue material (evergreen content) to handle during exceptions during playout. (e.g. Required asset is not available, playlist not available etc.). Rescue content should be without segmentation and technical segments (color bars and tones). Rescue files will be picked randomly based duration, and will be played start to end of the video.|

---

