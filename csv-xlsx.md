---
title: CSV / XLSX Formats
description: All supported CSV formats
published: true
date: 2021-04-05T15:55:29.408Z
tags: 
editor: markdown
dateCreated: 2021-02-18T06:12:44.799Z
---

 Supported CSV / XLSX / Delimited formats

## Template 1

This template can be downloaded from [XLSX]([amagi_bulk_meta_template1.xlsx](/amagi_bulk_meta_template1.xlsx)) and [CSV]([amagi_bulk_meta_template1.csv](/amagi_bulk_meta_template1.csv)) formats here. The table below captures the metadata fields:

|Metadata Field / Header|Field Description|Allowed Values|Example|
|----|----|----|----|
Asset ID|Globally unique ID for the content from the content provider|Alpha-Numeric with 128 character limit|AMAGI9999
Title|Title of the episode or movie||Harry Potter
Description|A short description of the episode or movie Limit of 110 characters*|A boy wizard
Long Description|Full description of the episode or movie Limit of 110 characters*|A boy wizard
Title-`SPA`|Title in a different language<br/>Replace SPA with any ISO-A3 language code<br/>Add as many columns as necessary if there are more languages||
Description-`SPA`|Short description in a different language<br/>Replace SPA with any ISO-A3 language code<br/>Add as many columns as necessary if there are more languages||
Long Description-`SPA`|Full description in a different language<br/>Replace SPA with any ISO-A3 language code<br/>Add as many columns as necessary if there are more languages||
Tags|Tags that needs to be associated with the content|Keywords separated by ‘;’ (semi-colon)|wizard;magic
Genre|Genre of the content|Genres separated by ‘;’ ( semi-colon)|drama;fantasy
Cast|Actors' details|Actors names separated by ';' ( semi-colon)|
Director|Directors' details|Directors names separated by ';' ( semi-colon)|
Season|Season number||
Episode|Episode Number||
Episode Sequence|Episode Sequence Number||
Rating|Rating value|| 
Rating Body|Rating body from which the rating is obtained||USA PR, BBFC, MPAA etc.,
TC IN|Timecode IN of the video||
Duration|Duration of the video||
TMS ID|Gracenote TMS ID if available||
Release Date|Release date of the episode or movie||
License Start|License start date|Format: YYYY-MM-DD|
License End|License end date|Format: YYYY-MM-DD|
Series Title|Title of the series||
Series Description|Description of the series||
Series Title-`SPA`|Title in a different language<br/>Replace SPA with any ISO-A3 language code<br/>Add as many columns as necessary if there are more languages||
Series Description-`SPA`|Short description in a different language<br/>Replace SPA with any ISO-A3 language code<br/>Add as many columns as necessary if there are more languages||
Series ID|Unique identifier for the series||
Series TMS ID|Gracenote TMS ID of the series if available||
Series Genre|Genre list||
Series Release Date|Release date of the series|Format: YYYY-MM-DD|
Series Tags|Tags that needs to be associated with the content|Keywords separated by ‘;’ (semi-colon)|wizard;magic
Type|Program type||
Subtitles URL|HTTP URL of the subtitles file||
Trailer URL|HTTP URL of the trailer video file||
Video URL|HTTP URL of the video file||
Series Thumbnail URL|File name in Amagi S3 or HTTP URL of the thumbnail image for the series||
Series Portrait Poster URL|File name in Amagi S3 or HTTP URL of the portrait poster image for the series||
Series Landscape Poster URL|File name in Amagi S3 or HTTP URL of the landscape poster image for the series||
Thumbnail URL|File name in Amagi S3 or HTTP URL of the thumbnail image for the program||
Portrait Poster URL|File name in Amagi S3 or HTTP URL of the portrait poster image for the program||
Landscape Poster URL|File name in Amagi S3 or HTTP URL of the landscape poster image for the program||
Cue Points|Cue points in timecode format separated by ',' (comma)||"00:00:00:00,00:07:00:00,00:15:00:00"
Language|Program default language||
GUID|Globally unique ID for the content from the content provider|Alpha-Numeric with 128 character limit|AMAGI9999
Original Air Date|Original air date of the program|


## Template 2

This template can be downloaded in [XLSX](/amagi_vod_bulk_meta_template2.xlsx) and [CSV](/amagi_vod_bulk_meta_template2.csv) formats. The table below details the metadata fields to be populated in the CSV/XLSX. 

|Metadata Field / Header|Field Description|Allowed Values|Example|
|----|----|----|----|
|Type|Type of the content that the row represents|Movie or Episode|Movie|
|GUID|Globally unique ID for the content from the content provider|Alpha-Numeric with 128 character limit|AMAGI9999
TMSID|TMS ID of the asset if available|TMS ID issued by gracenote|EP1234567890
|Title|Title of the episode or movie|Limit of 128 characters*|Harry Potter
|Description|Description of the episode or movie Limit of 300 characters*|A boy wizard
|SeriesID|Unique ID for series from the content provider|Alpha-Numeric with 128 character limit|SER001
|SeriesTMSId|TMS - ID of the Series if available|TMS ID issued by gracenote|SH987654321
|SeriesName|Name of the series|Limit of 128 characters|Game of thrones
|SeasonNumber|Season number of the episode within a series|Numeric Value|1
|EpisodeNumber|Number of the specific episode in a series|Numeric Value|1
|LicensingStart|Start date of the availability window|Format: YYYY-MM-DD|2019-12-31
|LicensingEnd|End date of the availability window|Format: YYYY-MM-DD|2022-12-31
|VideoDuration|Duration of the asset|Duration in seconds (&lt;duration&gt;) or milliseconds (&lt;duration&gt;ms) or valid timecode format|3600 or 360000ms
|Ad_Breaks (Mid-Roll)|Timecodes of ad breakpoints in the content|Timecodes in valid timecode format separated by ‘;’ (semi-colon) HH:MM:SS:FF;HH:MM:SS:FF|00:04:02:00;00:06:00:00
|PreRoll|Is pre-roll required?|Required for A-VOD<br/>Yes or No|Yes
|PostRoll|Is post-roll required?|Required for A-VOD<br/>Yes or No|No
|FileName|Name of the video file<br/>Serves as the unique id for the asset within the content partner account|Limit of 128 characters|harry_potter.mp4
|FilePath|File path or location of video file|Complete path with filename (URL or S3 Path#)|http://localhost/movie/harry_potter.mp4
|ClosedCaptionsPath|File path or location of closed caption file|Complete Path with filename (URL or S3 Path#)|s3://bucket/movie/haary_potter.scc
|ImageLandscapePath|File path or location of landscape image file|Complete Path with filename (URL or S3 Path#)<br/>Format: JPG, PNG etc<br/>Aspect Ratio: 16:9|s3://bucket/movie/haary_potter_L.jpg
ImagePortraitPath|File path or location of portrait image file|Complete Path with filename (URL or S3 Path#)<br/>Format: JPG, PNG etc<br/>Aspect Ratio: 3:4|s3://bucket/movie/haary_potter_P.jpg
|SeriesImageLandscapePath|File path or location of landscape image file for the series|Complete Path with filename (URL or S3 Path#)<br/>Format: JPG, PNG etc<br/>Aspect Ratio: 16:9|s3://bucket/movie/haary_potter_L.jpg
|SeriesImagePortraitPath|File path or location of portrait image file for the series|Complete Path with filename (URL or S3 Path#)<br/>Format: JPG, PNG etc.,<br/>Aspect Ratio 3:4|s3://bucket/movie/haary_potter_P.jpg
|ReleaseDate|Original air date of the episode or movie|Format: YYYY-MM-DD|2007-02-01
|RatingValue|Rating of the content|TV Shows: TV Parental Guidelines ratings, Movies: MPAA ratings|TV-G
|RatingBody|Rating body referred for Rating Value|USAPR, MPAA etc.,|MPAA
|Keywords|Tags that needs to be associated with the content|Keywords separated by ‘;’ (semi-colon)|wizard;magic
|Genre|Genre of the content|Genres separated by ‘;’ ( semi-colon)|drama;fantasy
|Categories|Category that the content can be associated|Categories separated by ‘;’ (semi-colon)|fantasy
|Platforms|Platforms to which the content needs to be delivered|Platforms separated by ‘;’ (semi-colon)|roku;apple;hulu

