---
title: Metadata
description: 
published: true
date: 2021-01-16T13:42:59.616Z
tags: 
editor: markdown
dateCreated: 2021-01-14T10:17:39.768Z
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
|   |   | Segments | Segements |
|   |   | Media Type | Types - program, movie, promo |
|   |   | V-Chip |  |
|   |   | AFD | Active Field Descriptor |
| EPG | Electronic Programming Guide | Used for delivering EPG to MVPD platforms | As per EPG specification from MVPD  |
| VoD | Video on Demand Delivery | Used for delivering VoD contents to MVPD platforms | As per requirements for VoD Delivery  |
| Analytics | Analytics | Title |  |
|   |   | Content Id | External Content Id |

## Metadata and Amagi Services

Media ingest service ingests the content-partner provided metadata to a common Amagi metadata store from which various Amagi sevices use metadata.

![metadata_svc.png](/metadata_svc.png)

## How is metadata ingested to Amagi services?

There are different methods to ingest metadata to Amagi Services. These are broadly classified into **Push (drop-off)** and **Pull (feed)** methods. The different ways to ingest metadata using these methods are described in [**Metadata Ingest Methods**](/ingest).

## What are the supported formats for ingesting to Amagi services?

The service supports different formats for ingesting to Amagi services. The following links provides a brief description about the formats and links to the sample formats.
  
  * **Supported Formats**
  			* [Media RSS - mRSS](metadata/formats/mRSS)
  * [**Sample Formats**](sampleformats)
