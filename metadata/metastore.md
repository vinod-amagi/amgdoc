---
title: Metastore
description: Amagi Metastore
published: true
date: 2021-05-12T16:16:36.745Z
tags: 
editor: markdown
dateCreated: 2021-05-12T11:21:49.050Z
---

# Metastore

Amagi manages metadata of content using a multi-tenanted service known as CP-Metastore. This document describes the metadata structure and various metadata elements of the content. The below diagram provides an overview of various elements that describe metadata of the content.

![metadata-er-diagram.png](/metadata/metadata-er-diagram.png)

| Attributes| Value Type| Description|
|---|---|---|
| Series|  | | 
|ID|Number| An internal identifier of the series. This attribute is automatically generated.|
|Series Name|string|Series name|
|Created At| datetime| Created time. Format hh:mm:ss.mmm. This attribute is automatically generated when content was ingested.|
|Updated At|datetime| Updated time. Format hh:mm:ss.mmm. This attribute is automatically updated when content or metadata is updated.|
| **Season**| | |
|ID|Number| An internal identifier of the season. This attribute is automatically generated.|
|Name|String| Name of the season|
|Type|String| (Example: “Series”, “Collections”)|
|Season Number|Number| Represents the season number. For Example: 1, 15 etc.|
|Series ID| Number| Reference to *Series*.| 
|Created At| datetime| Created time. Format hh:mm:ss.mmm. This attribute is automatically generated when content was ingested.|
|Updated At|datetime| Updated time. Format hh:mm:ss.mmm. This attribute is automatically updated when content or metadata is updated.|


