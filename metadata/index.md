---
title: Metadata
description: 
published: true
date: 2021-02-18T06:36:33.002Z
tags: 
editor: undefined
dateCreated: 2021-02-18T06:13:27.200Z
---

## What is metadata?

Metadata represents data that describes a media content, specifically video content in Amagi services. The metadata varies in depth, and it could be one or more of the following, but not necessarily confining to these details.

* Title of a content
* Information required for EPG (Electronic Programming Guide)
* Information required for delivering content for Video on Demand

## How is metadata used by Amagi services?

| Amagi Service | Service Description | Metadata | Remarks |
|----------------|----------------|----------------|----------------|
| CLOUDPORT | Linear Channel Playout | Title |  |
|   |   | Segments | Segments' start/end TC|
|   |   | Media Type | Types - program, movie, promo |
|   |   | V-Chip |  |
|   |   | AFD | Active Field Descriptor |
| EPG | Electronic Programming Guide | Used for delivering EPG to MVPD platforms | As per EPG specification from MVPD  |
| VOD | Video on Demand Delivery | Used for delivering VOD contents to MVPD platforms | As per requirements for VOD Delivery  |
| Analytics | Analytics | Title |  |
|   |   | Content Id | External Content Id |

## Metadata and Amagi Services

Media ingest service ingests the content-partner provided metadata to a common Amagi metadata store from which various Amagi sevices use metadata.

![metadata_svc.png](/metadata_svc.png)

## How is metadata ingested to Amagi services?

There are different methods to ingest metadata to Amagi Services. These are broadly classified into **Push (drop-off)** and **Pull (feed)** methods. The different ways to ingest metadata using these methods are described in [**Metadata Ingest Methods**](/ingest).

## What are the supported formats for ingesting to Amagi services?

The service supports different formats for ingesting to Amagi services. The following links provides a brief description about the formats.
  
  **Supported Formats**
  
  * [Media RSS - mRSS](../metadata/formats/mRSS)
  * [CSV](../../csv-xlsx)
  * [XML](../../xml)
  * [JSON](/../../json)
  
