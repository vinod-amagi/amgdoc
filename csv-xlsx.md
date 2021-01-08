---
title: CSV / XLSX Formats
description: All supported CSV formats
published: true
date: 2021-01-08T20:05:38.310Z
tags: 
editor: markdown
---

# Supported CSV / XLSX / Delimited formats

## CSV Version 1

The table below details the metadata fields to be populated in the Amagi Cloudport CSV format. 

|Metadata Field / Header|Field Description|Allowed Values|Example|
|----|----|----|----|
|Type|Type of the content that the row represents|Movie or Episode|Movie|
|GUID|Globally unique ID for the content from the content provider|Alpha-Numeric with 128 character limit|AMAGI9999
TMS ID|TMS ID of the asset if available|TMS ID issued by gracenote|EP1234567890
|Title|Title of the episode or movie|Limit of 128 characters*|Harry Potter
|Description|Description of the episode or movie Limit of 300 characters*|A boy wizard
|Series ID|Unique ID for series from the content provider|Alpha-Numeric with 128 character limit|SER001
|Series TmsId|TMS - ID of the Series if available|TMS ID issued by gracenote|SH987654321
|Series Name|Name of the series|Limit of 128 characters|Game of thrones
|Season Number|Season number of the episode within a series|Numeric Value|1
|Episode Number|Number of the specific episode in a series|Numeric Value|1
|Licensing Start|Start date of the availability window|Format: YYYY-MM-DD|2019-12-31
|Licensing End|End date of the availability window|Format: YYYY-MM-DD|2022-12-31
|Video Duration|Duration of the asset|Duration in seconds (&lt;duration&gt;) or milliseconds (&lt;duration&gt;ms) or valid timecode format|3600 or 360000ms
|Ad-Breaks (Mid-Roll)|Timecodes of ad breakpoints in the content|Timecodes in valid timecode format separated by ‘;’ (semi-colon) HH:MM:SS:FF;HH:MM:SS:FF|00:04:02:00;00:06:00:00
|Pre-Roll|Is pre-roll required?|Required for A-VOD<br/>Yes or No|Yes
|Post-Roll|Is post-roll required?|Required for A-VOD<br/>Yes or No|No
|File Name|Filename of the video file|Limit of 128 characters|harry_potter.mp4
|File Path|File path or location of video file|Complete path with filename (URL or S3 Path#)|http://localhost/movie/harry_potter.mp4
|Closed Captions Path|File path or location of closed caption file|Complete Path with filename (URL or S3 Path#)|s3://bucket/movie/haary_potter.scc
|Image Landscape Path|File path or location of landscape image file|Complete Path with filename (URL or S3 Path#)<br/>Format: JPG, PNG etc<br/>Aspect Ratio: 16:9|s3://bucket/movie/haary_potter_L.jpg
Image Portrait Path|File path or location of portrait image file|Complete Path with filename (URL or S3 Path#)<br/>Format: JPG, PNG etc<br/>Aspect Ratio: 3:4|s3://bucket/movie/haary_potter_P.jpg
|Series Image Landscape Path|File path or location of landscape image file for the series|Complete Path with filename (URL or S3 Path#)<br/>Format: JPG, PNG etc<br/>Aspect Ratio: 16:9|s3://bucket/movie/haary_potter_L.jpg
|Series Image Portrait Path|File path or location of portrait image file for the series|Complete Path with filename (URL or S3 Path#)<br/>Format: JPG, PNG etc.,<br/>Aspect Ratio 3:4|s3://bucket/movie/haary_potter_P.jpg
|Release Date|Original air date of the episode or movie|Format: YYYY-MM-DD|2007-02-01
|Rating Value|Rating of the content|TV Shows: TV Parental Guidelines ratings, Movies: MPAA ratings|TV-G
|Rating Body|Rating body referred for Rating Value|USAPR, MPAA etc.,|MPAA
|Keywords|Tags that needs to be associated with the content|Keywords separated by ‘;’ (semi-colon)|wizard;magic
|Genre|Genre of the content|Genres separated by ‘;’ ( semi-colon)|drama;fantasy
|Categories|Category that the content can be associated|Categories separated by ‘;’ (semi-colon)|fantasy
|Platforms|Platforms to which the content needs to be delivered|Platforms separated by ‘;’ (semi-colon)|roku;apple;hulu



