---
layout: default
title: mRSS
parent: Formats
permalink: /metadata/formats/mrss/
grand_parent: Metadata
nav_order: 3
---
## Amagi mRSS Format

mRSS Feed that can be used for ingesting metadata to Amagi systems are based on the following specifications:

1. [Media RSS (mRSS) Specification, Version 1.5.1](https://www.rssboard.org/media-rss)

2. [RSS 2.0 Specification](https://www.rssboard.org/rss-specification)


|Field|Description|Remarks|
|---|---|---|
|Channel|Details of the Channel: - Last Build Date, description etc||
|lastBuildDate|Last time the feed was updated|ISO 8601 format: YYYY-MM-DDThh:mm:ss+TZ e.g.: 2015-11-11T22:21:37+00:00|
|title|Title of the feed|Optional|
|description|Description of the feed|Optional|
|series|Series items||
|item|Series item||
|guid|GUID||
|amagi:externalId|External Id|E.g. Gracenote Id (TMS Id)|
|title|Title of the series||
|description|Description of the series||
|genre|Genre||
|media:keywords|List of keywords||
|media:category|List of categories||
|media:rating|Rating as per the rating agency|MPAA or V-Chip or Simple|
|media:thumbnail|Thumbnail image|Width, Height|
|episodes|Episodes in a series||
|item|Episode item||
|guid|GUID of episode||
|amagi:externalId|External Id|E.g. Gracenote Id (TMS Id)|
|title|Title of the series||
|description|Description of the series||
|episodeNumber|Episode Number||
|seasonNumber|Season Number||
|media:thumbnail|Thumbnail image|Width, Height|
|closedCaptions|Closed Captions||
|media:subTitle|Subtitle of the Episode||
|amagi:meta|Amagi metadata|Used for specifying VOD platforms|
|dcterms:valid|“start” and “end” date for Licensing terms|ISO 8601 format: {YYYY}-{MM}-{DD}T{hh}:{mm}:{ss}+{TZ}. E.g.: 2017-10-21T22:11:23+00:00|
|movies|Movies||
|item|Movie item||
