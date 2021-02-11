---
title: Amagi Native Format
description: Native format of Amagi CLOUDPORT
published: true
date: 2021-02-11T13:25:51.558Z
tags: 
editor: markdown
dateCreated: 2021-02-04T04:59:00.503Z
---

# Amagi Native Schedule Format

<p align='justify'>
  Amagi CLOUDPORT uses a simple csv format as the native format. This format highly extensible to support complex automation requirements  for scheduling dynamic graphics, logo, SCTE/DTMF triggers etc.

  ![amagi-csv-format.png](/amagi-csv-format.png)

## Header Fields
  
| Headers| Description| Format|
|----|----|----|
| DATE| Broadcast date| <kbd>DD/MM/YYYY</kbd> |
| Start Time| Broadcast Start time| <kbd>HH:MM:SS</kbd>|
| CHANNEL NAME| Name of the channel|Same as used in Amagi CLOUDPORT |

## Schedule Fields
  
|Fields| Required|Default|Description|Format|Remarks|
|---|---|---|---|---|---|
|HOUR|Optional|Previous item's end time|Start time of asset| YYYY-MM-DD HH:MM:SS:FF|
|DURATION|Optional|Duration of segment|Duration to play|HH:MM:SS:FF|
|OFFSET|Optional|Offset of segment|Offset from first timecode|HH:MM:SS:FF|
|SEGMENT ID|Optional|1|Segment id of content|Numeric|
|ASSET ID|Mandatory|NA|Asset Id in CLOUDPORT||
|TYPE|Optional||Media Type|e.g. program, promo, film, commercial|
|MEDIA TYPE|Optional||Type of element|Primary or secondary|
|TITLE|Optional||Title of the program||
|COMMENTS|Optional||Additional commands|Described below|
|RECONCILE ID|Optional||Reconcile Id for commercials||
|START TIME TYE|Optional|Normal|Fixed or Normal||
  
 ## COMMENTS
  
  TBD
 