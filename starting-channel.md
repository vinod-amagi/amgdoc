---
title: Starting a Channel
description: Describes the process for starting a channel
published: true
date: 2021-03-17T10:05:34.443Z
tags: 
editor: markdown
dateCreated: 2021-03-17T10:05:34.443Z
---

# Starting a channel

Amagi CLOUDPORT is supported on Amazon Web Services (AWS) and Google Cloud Platform (GCP). The infrastructure for linear channel playout can brought up on any of these cloud services. The various components and features required for playing out a channel is described below.

## 1. Content

Amagi CLOUDPORT uses MPEG-TS and MXF files for playing out. Other file formats like MP4, MOV etc are transcoded as part of content processing

| Container Format | Transcoding | Remarks|
|---|---|---|
| MPEG-TS| Not required| H264
| MXF| Not required for MXF playout<br> Required for MPEG-TS playlout| |
| MOV | Required| Trancoded to MPEG-TS|
| MP4 | Required| Trancoded to MPEG-TS|

## 2. Schedule or playlist
## 3. Delivery
## 4. Advanced Features
### a) Graphics
### b) Triggers
### c) 
