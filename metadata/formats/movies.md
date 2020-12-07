---
layout: default
title: Movies
parent: Formats
grand_parent: Metadata
permalink: /metadata/formats/movies/
nav_order: 2
---
## Movie

The following table describes the metadata details required for ingesting content metadata of a movie to Amagi Meta Store. 

|Field|Description|Remarks|
|---|---|---|
|updateAt|Last update time|Time in UTC Format: YYYY-MM-DDTHH:MM:SSZ|
|provider|The channel name||
|type|tv_episode|tv_episode represents an Episode of TV series|
|Series|Details of the series: - Series name, description etc||
|id|Series id|Series Id used by channel|
|seriesName|Series Name||
|longDescription|A lengthy description about series|Number of characters is mandated by MVPDs|
|shortDescription|Short description about the series|Number of characters is mandated by MVPDs|
|createdAt|Created Time of the series|Time in UTC Format: YYYY-MM-DDTHH:MM:SSZ|
|externalIDs|List of external Ids|Provides a list of external ids|
|id|Id|TMS Id or equivalent|
|provider|Provider of ID|gracenote if the provider is Gracenote|
|images|List of images for Series||
|filePath|HTTP Url or S3 Uri|HTTP Url : https:// S3 Uri: s3://channel-bucket/object-key|
|height|Height of image||
|width|Width of image||
|type|Types associated|series-portait, series-landscape, series-poster etc|
|metadata|Metadata for the series:- - genre, category, ratings||
|genre|List of genre|As per MVPD specification|
|category|List of category|As per MVPD specification|
|ratings|Ratings associated with content||
|ratingValue|Rating for the series||
|ratingBody|Rating Body||
|ratingReason|Rating reason||
|Episode|Details of the episode: - Episode name, number - Assets - Video, Captions, Images||
|episodeName|Episode name||
|episodeNumber|Episode Number||
|externalIDs|List of external Ids for the episode|Provides a list of external ids|
|id|Id|TMS Id or equivalent|
|provider|Provider of ID|gracenote if the provider is Gracenote|
|longDescription|Long description about episode||
|shortDescription|Short description about episode||
|updatedAt|Updated datetime of episode data|e.g. 2020-10-04T23:30:24Z|
|id|Episode Id||
|seasonNumber|Season Number||
|metadata|Metadata for the episode:- - genre, category, ratings||
|genre|List of genre|As per MVPD specification|
|category|List of category|As per MVPD specification|
|ratings|Ratings associated with content||
|ratingValue|Rating for the series||
|ratingBody|Rating Body||
|ratingReason|Rating reason||
|assets|List of assets for the content - video, captions, images||
"|adBreaks|List of Ad break points|HH:MM:SS.msec
e.g. 00:15:29.310|"
|durationInSeconds|Duration of video in seconds||
|filePath|HTTP Url or S3 Uri of video|HTTP Url : https:// S3 Uri: s3://channel-bucket/object-key|
|frameRate|Frame rate of the video|29.97, 25.0 etc|
|createdAt|Creation time of the video|Time in UTC Format: YYYY-MM-DDTHH:MM:SSZ|
|images|List of images for Episode||
|filePath|HTTP Url or S3 Uri|HTTP Url : https:// S3 Uri: s3://channel-bucket/object-key|
|height|Height of image||
|width|Width of image||
|type|Types associated|series-portait, series-landscape, series-poster etc|
|captions|||
|filePath|HTTP Url or S3 Uri of captions file|HTTP Url : https:// S3 Uri: s3://channel-bucket/object-key|
|createdAt|Creation time of the captions|Time in UTC Format: YYYY-MM-DDTHH:MM:SSZ|
|subtitles|||
|filePath|HTTP Url or S3 Uri of subtitles file|HTTP Url : https:// S3 Uri: s3://channel-bucket/object-key|
|createdAt|Creation time of the subtitles|Time in UTC Format: YYYY-MM-DDTHH:MM:SSZ|
