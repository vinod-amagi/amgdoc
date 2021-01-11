---
title: CSV / XLSX Formats
description: All supported CSV formats
published: true
date: 2021-01-11T14:19:23.669Z
tags: 
editor: markdown
---

# Supported CSV / XLSX / Delimited formats

The table below details the metadata fields to be populated in the CSV. 

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




