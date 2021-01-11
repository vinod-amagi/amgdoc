---
title: Movies
description: 
published: true
date: 2021-01-11T17:01:27.163Z
tags: 
editor: markdown
---

The following table describes the metadata details required for ingesting content metadata of a movie to Amagi Meta Store. 

Field|Description
---|---
updateAt|Last update time
provider|Channel name|
type|movie
**movie>>**|Details of the movie: name, description etc.,
id|Unique id of the movie
name|Name of the movie
longDescription|A lengthy description about the movie
shortDescription|Short description about the movie
createdAt|Created time of the movie
externalIDs|List of external Ids such as TMS ID / EIDR ID etc.,
**images>>**|List of images
filePath|HTTP Url or S3 Uri|HTTP Url : https:// S3 Uri: s3://channel-bucket/object-key
height|Height of image|
width|Width of image|
type|Types of the image
metadata|Metadata for the series: genre category ratings
genre|List of genre as per MVPD specification
category|List of categories as per MVPD specification
ratings|Ratings associated with content
ratingValue|Rating for the series
ratingBody|Rating Body
ratingReason|Rating reason
assets|List of assets for the content - video, captions, images
adBreaks|List of Ad break points: HH:MM:SS.msec e.g. 00:15:29.310
durationInSeconds|Duration of video in seconds
filePath|HTTP Url or S3 Uri of video
frameRate|Frame rate of the video
createdAt|Creation time of the video
**captions>>**||
filePath|HTTP Url or S3 Uri of captions file
createdAt|Creation time of the captions
filePath|HTTP Url or S3 Uri of subtitles file
createdAt|Creation time of the subtitles file