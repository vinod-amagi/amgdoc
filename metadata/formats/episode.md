---
title: TV Episodes
description: 
published: true
date: 2021-01-21T05:32:13.848Z
tags: 
editor: markdown
dateCreated: 2021-01-14T10:17:47.060Z
---

# TV Episodes

The following table describes the metadata required for an episode of TV Series used for Amagi **XML and JSON** formats.


Field|Description|Remarks
---|---|---
updateAt|Last update time|Time in UTC Format <br/> YYYY-MM-DDTHH:MM:SSZ
provider|The channel name|
<kbd>type</kbd>|<kbd>tv_episode</kbd>|tv_episode represents an Episode of TV series
|<kbd>Series</kbd>| Details of the series - Series name, description etc
id|Series id|Series Id used by channel
seriesName|Series Name|
longDescription|A lengthy description about series|Number of characters is mandated by MVPDs
shortDescription|Short description about the series|Number of characters is mandated by MVPDs
createdAt|Created Time of the series|Time in UTC Format <br/> YYYY-MM-DDTHH:MM:SSZ
<kbd>externalIDs</kbd>|List of external Ids|Provides a list of external ids
id|Id|TMS Id or equivalent 
provider|Provider of ID|gracenote if the provider is Gracenote
<kbd>images</kbd>|List of images for Series|
filePath|HTTP Url or S3 Uri|HTTP Url : https:// <br/> S3 Uri: s3://channel-bucket/object-key
height|Height of image|
width|Width of image|
type|Types associated|series-portait, series-landscape, series-poster etc
metadata|Metadata for the series: genre, category, ratings|
genre|List of genre|As per MVPD specification
category|List of category|As per MVPD specification
<kbd>ratings</kbd>|Ratings associated with content|
ratingValue|Rating for the series|
ratingBody|Rating Body|
ratingReason|Rating reason|
Episode|Details of the episode: - Episode name number - Assets - Video| Captions Images"|
episodeName|Episode name|
episodeNumber|Episode Number|
<kbd>externalIDs</kbd>|List of external Ids for the episode|Provides a list of external ids
id|Id|TMS Id or equivalent
provider|Provider of ID|gracenote if the provider is Gracenote
longDescription|Long description about episode|
shortDescription|Short description about episode|
updatedAt|Updated datetime of episode data|e.g. 2020-10-04T23:30:24Z
`id`|Episode Id|
seasonNumber|Season Number|
metadata|Metadata for the episode:- genre, category, ratings"
genre|List of genre|As per MVPD specification
category|List of category|As per MVPD specification
<kbd>ratings</kbd>|Ratings associated with content|
ratingValue|Rating for the series|
ratingBody|Rating Body|
ratingReason|Rating reason|
<kbd>assets</kbd>|List of assets for the content - video, captions, images|
durationInSeconds|Duration of video in seconds|
filePath|HTTP Url or S3 Uri of video|HTTP Url : https:// S3 Uri: s3://channel-bucket/object-key
frameRate|Frame rate of the video|29.97 25.0 etc
<kbd>adBreaks</kbd>|List of Ad break points|HH:MM:SS.msec e.g. 00:15:29.310
createdAt|Creation time of the video|Time in UTC Format: YYYY-MM-DDTHH:MM:SSZ
<kbd>images</kbd>|List of images for Episode|
filePath|HTTP Url or S3 Uri|HTTP Url : https:// S3 Uri: s3://channel-bucket/object-key
height|Height of image|
width|Width of image|
type|Types associated|series-portait, series-landscape, series-poster etc
<kbd>captions</kbd>||
filePath|HTTP Url or S3 Uri of captions file|HTTP Url : https:// S3 Uri: s3://channel-bucket/object-key
createdAt|Creation time of the captions|Time in UTC Format: YYYY-MM-DDTHH:MM:SSZ
subtitles||
filePath|HTTP Url or S3 Uri of subtitles file|HTTP Url : https:// S3 Uri: s3://channel-bucket/object-key
createdAt|Creation time of the subtitles|Time in UTC Format: YYYY-MM-DDTHH:MM:SSZ