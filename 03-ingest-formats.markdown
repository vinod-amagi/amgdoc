---
layout: page
title: Ingest Metadata Formats
permalink: /03-ingest-formats/
nav_order: 3
---

# Ingest Metadata Formats

## Amagi CSV Format

The following table describes the metadata details required for ingesting content metadata to Amagi Meta Store. The list of fields is an indicative set of data required for various platforms. The specific requirement of each item is mandated by the platform requirements specification for each service.

Metadata Field|Field Description|Allowed Values|Example
---|--|---|---|---
Type|Type of the content that the row represents|Movie or Episode|Movie
GUID|Globally unique ID for the content from the content provider|Alpha-Numeric with 128 character limit|AMAGI9999
Tms ID|TMS ID of the asset if available|TMS ID issued by gracenote|TMS-ID-1232
Title|Title of the episode or movie|Limit of 128 characters*|Harry Potter
Description|Description of the episode or movie|Limit of 300 characters*|A boy wizard
Series ID|Unique ID for series from the content provider|Alpha-Numeric with 128 character limit|SER001
Series TmsId|TMS - ID of the Series if available|TMS ID issued by gracenote|TMS-ID-1224
Series Name|Name of the series|Limit of 128 characters|Game of thrones
Season Number|Season number of the episode within a series|Numeric Value|1
Episode Number|Number of the specific episode in a series|Numeric Value|1
Licensing Start|Start date of the availability window|Format: YYYY-MM-DD|31/12/2019
Licensing End|End date of the availability window|Format: YYYY-MM-DD|31/12/2022
Video Duration|Duration of the asset|Duration in seconds (<duration>) or milliseconds (<duration>ms) or valid timecode format|3600 or 360000ms
Ad-Breaks (Mid-Roll)|Timecodes of ad breakpoints in the content|Timecodes in valida timecode format separated by ‘;’ ( semi-colon) HH:MM:SS:FF;HH:MM:SS:FF|00:04:02:00;00:06:00:00
Pre-Roll|Is pre-roll required?|Yes or No|Yes|Required for A-VOD||
Post-Roll|Is post-roll required?|Yes or No|No|Required for A-VOD||
File Name|Filename of the video file|Limit of 128 characters|harry_potter.mp4
File Path|File path or location of video file|Complete path with filename (URL or S3 Path#) |http://localhost/movie/harry_potter.mp4
Closed Captions Path|File path or location of closed caption file|Complete Path with filename (URL or S3 Path#)|s3://bucket/movie/haary_potter.scc
Image Landscape Path|File path or location of landscape image file|Complete Path with filename (URL or S3 Path#)|s3://bucket/movie/haary_potter_L.jpg||"Format: JPG| PNG etc"|||Aspect Ratio: 16:9|
Image Portrait Path|File path or location of portrait image file|Complete Path with filename (URL or S3 Path#)|s3://bucket/movie/haary_potter_P.jpg||"Format: JPG| PNG etc"|||Aspect Ratio: 3:4|
Series Image Landscape Path|File path or location of landscape image file for the series|Complete Path with filename (URL or S3 Path#)|s3://bucket/movie/haary_potter_L.jpg||"Format: JPG| PNG etc"|||Aspect Ratio: 16:9|
Series Image Portrait Path|File path or location of portrait image file for the series|Complete Path with filename (URL or S3 Path#)|s3://bucket/movie/haary_potter_P.jpg||"Format: JPG| PNG etc"|||Aspect Ratio: 3:4|
Release Date|Original air date of the episode or movie.|Format: YYYY-MM-DD|01/02/2007
Rating Value|Rating of the content|"TV Shows: TV Parental Guidelines ratings| Movies: MPAA ratings."|TV-G
Rating Body|Rating body referred for Rating Value||MPAA
Keywords|Tags that needs to be associated with the content|Keywords separated by ‘;’ ( semi-colon)|wizard;magic
Genre|Genre of the content|Genres separated by ‘;’ ( semi-colon)|drama;fantasy
Categories|Category that the content can be associated|Categories separated by ‘;’ ( semi-colon)|fantasy
Platforms|Platforms to which the content needs to be delivered|Platforms separated by ‘;’ ( semi-colon)|roku;apple;hulu

## Amagi JSON and XML Formats

### Episode
The following table describes the metadata details required for ingesting content metadata of an episode of TV Series to Amagi Meta Store. 

    * Series:   JSON and XML format allows multiple series information provided within the same JSON/XML document. 
                Multiple series are provided as an array in the JSON document. 
                For the XML document, multiple “series” tags are used.
    * Season:   Multiple seasons can be added as part of a Series in JSON/XML documents. 
                Multiple Seasons are specified as an array in the JSON document. 
                For the XML document, multiple “season” tags are used.
    * Episodes: Multiple episodes can be added as part of a Season in JSON/XML documents. 
                Multiple espisodes are specified as an array in the JSON document. 
                For the XML document, multiple “episode” tags are used.

Field|Description|Remarks
---|---|---
updateAt|Last update time|Time in UTC Format <br/> YYYY-MM-DDTHH:MM:SSZ
provider|The channel name|
type|tv_episode|tv_episode represents an Episode of TV series
Series|Details of the series:- Series name, description etc
id|Series id|Series Id used by channel
seriesName|Series Name|
longDescription|A lengthy description about series|Number of characters is mandated by MVPDs
shortDescription|Short description about the series|Number of characters is mandated by MVPDs
createdAt|Created Time of the series|Time in UTC Format <br/> YYYY-MM-DDTHH:MM:SSZ
externalIDs|List of external Ids|Provides a list of external ids
id|Id|TMS Id or equivalent 
provider|Provider of ID|gracenote if the provider is Gracenote
images|List of images for Series|
filePath|HTTP Url or S3 Uri|HTTP Url : https:// <br/> S3 Uri: s3://channel-bucket/object-key
height|Height of image|
width|Width of image|
type|Types associated|series-portait, series-landscape, series-poster etc
metadata|Metadata for the series: genre, category, ratings|
genre|List of genre|As per MVPD specification
category|List of category|As per MVPD specification
ratings|Ratings associated with content|
ratingValue|Rating for the series|
ratingBody|Rating Body|
ratingReason|Rating reason|
Episode|Details of the episode: - Episode name number - Assets - Video| Captions Images"|
episodeName|Episode name|
episodeNumber|Episode Number|
externalIDs|List of external Ids for the episode|Provides a list of external ids
id|Id|TMS Id or equivalent
provider|Provider of ID|gracenote if the provider is Gracenote
longDescription|Long description about episode|
shortDescription|Short description about episode|
updatedAt|Updated datetime of episode data|e.g. 2020-10-04T23:30:24Z
id|Episode Id|
seasonNumber|Season Number|
metadata|Metadata for the episode:- genre, category, ratings"
genre|List of genre|As per MVPD specification
category|List of category|As per MVPD specification
ratings|Ratings associated with content|
ratingValue|Rating for the series|
ratingBody|Rating Body|
ratingReason|Rating reason|
assets|List of assets for the content - video, captions, images|
adBreaks|List of Ad break points|HH:MM:SS.msec e.g. 00:15:29.310
durationInSeconds|Duration of video in seconds|
filePath|HTTP Url or S3 Uri of video|HTTP Url : https:// S3 Uri: s3://channel-bucket/object-key
frameRate|Frame rate of the video|29.97 25.0 etc
createdAt|Creation time of the video|Time in UTC Format: YYYY-MM-DDTHH:MM:SSZ
images|List of images for Episode|
filePath|HTTP Url or S3 Uri|HTTP Url : https:// S3 Uri: s3://channel-bucket/object-key
height|Height of image|
width|Width of image|
type|Types associated|series-portait, series-landscape, series-poster etc
captions||
filePath|HTTP Url or S3 Uri of captions file|HTTP Url : https:// S3 Uri: s3://channel-bucket/object-key
createdAt|Creation time of the captions|Time in UTC Format: YYYY-MM-DDTHH:MM:SSZ
subtitles||
filePath|HTTP Url or S3 Uri of subtitles file|HTTP Url : https:// S3 Uri: s3://channel-bucket/object-key
createdAt|Creation time of the subtitles|Time in UTC Format: YYYY-MM-DDTHH:MM:SSZ

## Movie
The following table describes the metadata details required for ingesting content metadata of a movie to Amagi Meta Store.

Field|Description|Remarks
---|---|---
updateAt|Last update time|Time in UTC Format: YYYY-MM-DDTHH:MM:SSZ
provider|The channel name|
type|tv_episode|tv_episode represents an Episode of TV series
Series|Details of the series: Series name| description etc"
id|Series id|Series Id used by channel
seriesName|Series Name|
longDescription|A lengthy description about series|Number of characters is mandated by MVPDs
shortDescription|Short description about the series|Number of characters is mandated by MVPDs
createdAt|Created Time of the series|Time in UTC Format: YYYY-MM-DDTHH:MM:SSZ
externalIDs|List of external Ids|Provides a list of external ids
id|Id|TMS Id or equivalent
provider|Provider of ID|gracenote if the provider is Gracenote
images|List of images for Series|
filePath|HTTP Url or S3 Uri|HTTP Url : https:// S3 Uri: s3://channel-bucket/object-key
height|Height of image|
width|Width of image|
type|Types associated|"series-portait, series-landscape, series-poster etc"
metadata|Metadata for the series: genre category ratings|
genre|List of genre|As per MVPD specification
category|List of category|As per MVPD specification
ratings|Ratings associated with content|
ratingValue|Rating for the series|
ratingBody|Rating Body|
ratingReason|Rating reason|
Episode|Details of the episode: - Episode name number - Assets - Video Captions Images|
episodeName|Episode name|
episodeNumber|Episode Number|
externalIDs|List of external Ids for the episode|Provides a list of external ids
id|Id|TMS Id or equivalent
provider|Provider of ID|gracenote if the provider is Gracenote
longDescription|Long description about episode|
shortDescription|Short description about episode|
updatedAt|Updated datetime of episode data|e.g. 2020-10-04T23:30:24Z
id|Episode Id|
seasonNumber|Season Number|
metadata|Metadata for the episode:- genre, category, ratings|
genre|List of genre|As per MVPD specification
category|List of category|As per MVPD specification
ratings|Ratings associated with content|
ratingValue|Rating for the series|
ratingBody|Rating Body|
ratingReason|Rating reason|
assets|List of assets for the content - video, captions, images|
adBreaks|List of Ad break points|HH:MM:SS.msec e.g. 00:15:29.310
durationInSeconds|Duration of video in seconds|
filePath|HTTP Url or S3 Uri of video|HTTP Url : https:// <br/> S3 Uri: s3://channel-bucket/object-key
frameRate|Frame rate of the video|29.97 <br/> 25.0 etc.,
createdAt|Creation time of the video|Time in UTC Format <br/> YYYY-MM-DDTHH:MM:SSZ
images|List of images for Episode|
filePath|HTTP Url or S3 Uri|HTTP Url : https:// <br/> S3 Uri: s3://channel-bucket/object-key
height|Height of image|
width|Width of image|
type|Types associated|series-portait, series-landscape, series-poster etc
captions||
filePath|HTTP Url or S3 Uri of captions file|HTTP Url : https:// <br/> S3 Uri: s3://channel-bucket/object-key
createdAt|Creation time of the captions|Time in UTC Format <br/> YYYY-MM-DDTHH:MM:SSZ
subtitles||
filePath|HTTP Url or S3 Uri of subtitles file|HTTP Url : https:// <br/> S3 Uri: s3://channel-bucket/object-key
createdAt|Creation time of the subtitles|Time in UTC Format <br/> YYYY-MM-DDTHH:MM:SSZ

## Amagi mRSS Format

mRSS Feed that can be used for ingesting metadata to Amagi systems are based on the following specifications:

* [Media RSS (mRSS) Specification, Version 1.5.1](https://www.rssboard.org/media-rss)
* [RSS 2.0 Specification](https://www.rssboard.org/rss-specification)

Field|Description|Remarks
---|---|---
Channel|Details of the Channel:- Last Build Date, description etc
lastBuildDate|Last time the feed was updated|ISO 8601 format <br/> YYYY-MM-DDThh:mm:ss+TZ <br/> e.g.: 2015-11-11T22:21:37+00:00
title|Title of the feed|Optional
description|Description of the feed|Optional
series|Series items|
item|Series item|
guid|GUID|
amagi:externalId|External Id|E.g. Gracenote Id (TMS Id)
title|Title of the series|
description|Description of the series|
genre|Genre|
media:keywords|List of keywords|
media:category|List of categories|
media:rating|Rating as per the rating agency|MPAA or V-Chip or Simple
media:thumbnail|Thumbnail image|Width, Height
episodes|Episodes in a series|
item|Episode item|
guid|GUID of episode|
amagi:externalId|External Id|E.g. Gracenote Id (TMS Id)
title|Title of the series|
description|Description of the series|
episodeNumber|Episode Number|
seasonNumber|Season Number|
media:thumbnail|Thumbnail image|Width, Height
closedCaptions|Closed Captions|
media:subTitle|Subtitle of the Episode|
amagi:meta|Amagi metadata|Used for specifying VOD platforms
dcterms:valid|“start” and “end” date for Licensing terms|ISO 8601 format <br/> {YYYY}-{MM}-{DD}T{hh}:{mm}:{ss}+{TZ} <br/> E.g.: 2017-10-21T22:11:23+00:00
movies|Movies|
item|Movie item|

## VOD CSV Format

