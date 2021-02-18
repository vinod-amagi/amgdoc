---
title: CLOUDPORT Segments
description: 
published: true
date: 2021-02-10T06:25:29.931Z
tags: 
editor: undefined
dateCreated: 2021-02-02T19:24:25.108Z
---

# CLOUDPORT Segment XML

The CLOUDPORT uses a minimalistic XML format to receive segment timecodes for the content. Additionally title and media type (series, promo, commercial) can be specified using this XML format.

## XML Format

```xml
<?xml version="1.0" encoding="utf-8"?>
<meta>
	<type>TVEpisode</type>
  <title>TVEpisode</title>
	<asset-id>asset_id</asset-id>
	<segments>
		<segment>
			<segment-id>1</segment-id>
			<som>HH:MM:SS:FF</som>
			<eom>HH:MM:SS:FF</eom>
		</segment>
		<segment>
			<segment-id>2</segment-id>
			<som>HH:MM:SS:FF</som>
			<eom>HH:MM:SS:FF</eom>
		</segment>
	</segments>
</meta>
```