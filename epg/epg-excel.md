---
title: Amagi Excel Grid EPG Source Format
description: Details the excel format in which EPG can be supplied to Amagi
published: true
date: 2021-02-19T08:50:31.127Z
tags: epg
editor: markdown
dateCreated: 2021-02-19T08:02:35.461Z
---

## Objective
The objective of this document is to detail the Amagi Excel EPG specification using which a content partner may provide EPG to Amagi for deliveries to the destination platforms.

## When to use
The Amagi excel EPG may be used when a channel for which the EPG is to be delivered is not Amagi Cloudport-operated or when the Cloudport schedule is not fit for EPG purposes (e.g. when the scheduled content consists of short duration videos). 

## Specification

The excel file should have at least two sheets:
> Schedule<br/>
There may be one or more Schedule sheets, each containing the schedule for one or more dates. The sheet names should **not** contain the word “EPG”.

> EPG<br/>
There should be only one “EPG” sheet. 
##### Examples
![multiple_schedule_sheets.png](/multiple_schedule_sheets.png)

![single_schedule_sheet.png](/single_schedule_sheet.png)

## Schedule sheet
This sheet captures the schedule information i.e. a program’s start time, duration and a unique id/title that can be used to associate the metadata from the EPG sheet.

Schedules may be provided day-wise or date-wise. 
> Date-wise format may be used for channels with schedules that vary on a daily basis. 

>Day-wise format may be used in case of channels with day-wise static schedules e.g. news / finance related channels. 

The header will have the following information:

Column|Description|Format|Example
|--|--|--|--|
Time|Broadcast time|HH:MM AM/PM|06:00 AM
Day 1|Broadcast day / date|Day-wise: DDD<br/>Date-wise: DDD MM/DD|Day-wise: Wed<br/> Date-wise: Wed 01/06
Day 2|Broadcast day / date|Day-wise: DDD<br/>Date-wise: DDD MM/DD|Day-wise: Wed<br/>Date-wise: Wed 01/06
|.|||
|.|||
Day n|Broadcast day / date|Day-wise: DDD<br/>Date-wise: DDD MM/DD|Day-wise: Wed<br/>Date-wise: Wed 01/06

> A program name will be specified in all the data rows of the Day 1 to Day n columns, which will be used to associate the respective metadata from the "EPG" sheet by matching against either “Unique ID” or “EpisodeTitle” column in the "EPG" sheet.
{.is-info}

**Fixed Duration Grid**
Each cell in this sheet represents a fixed duration, usually 30 minutes, but can be brought-down to 1 minute per grid. This may be agreed with the content provider/partner during onboarding. 



Multiple cells of a given column may be merged together to create a larger block duration. For example, if a cell represents a 30 minute block, a 2 hour block may be created by merging 4 cells of a column.

**Variable Duration Grid**
The duration represented by a cell is determined from the start times of the current and next cells in the column.
![excel_epg_variable_duration_grid.png](/excel_epg_variable_duration_grid.png)!
In cases where the start time of programs do not match day-wise, multiple schedule sheets may be added in the excel, with each sheet representing one day's schedule. 

## EPG sheet
The EPG sheet may contain the following fields:
Field|Description|Mandatory|Format|
|--|--|--|--|
Unique ID||Yes|Needs to be unique in this sheet
Title|Title of the program / series|Yes if content is episodic|
Type|Type of program e.g. episode, movie, special etc.,|No|
EpisodeTitle|Title of the episode|Yes if content is episodic|
Short Description|Short description (110 chars)|Yes|
Rating|Program rating|Yes||
Original Air Date|Release date / TV air date of the program|MM/DD/YYYY
Genre|Program genre|No|
Long Description|Detailed description of the program|No|
SeasonNumber|Season number|Yes if content is episodic||
EpisodeNo|Episode number|Yes if content is episodic||
SeriesId|Unique id of a series|Yes|Generated from series title if not provided

## Ingest methods
Two ingest methods are supported currently:
> **S3**<br>
The content provider/partner may upload the schedules into an AWS S3 bucket hosted by either Amagi or the content provider/partner.

> **SFTP**<br/>
The content provider/partner may upload the schedules into an SFTP server hosted by Amagi. An SFTP user account will be created by Amagi and shared with the channel partner during onboarding.

## File naming convention
The EPG file may be named as follows: 
> EPG.xlsx for static schedules<br/>
  (or)<br/>
> EPG_```<Start date YYYYMMDD>```_```<End date YYYYMMDD>```.xlsx for changing schedules
e.g.: EPG_20201227_20210102.xlsx <br/>
{.is-info}

## Frequency
There is no pre-defined frequency for EPG excel delivery. However, the schedules for a given broadcast day should be delivered at least 7 days in advance. 
  
## Images
  
##### Image URLs accessible over internet
In cases where the content provider/partner can provide image URLs accessible over internet, such URLs can be populated in the following fields:

- Series Image
- Program Image
- Artwork
  
##### Images available, but not as URLs accessible over internet
<p align="justify">In cases where images are not available as publicly accessible URLs, the content provider / partner may upload the images into an Amagi-hosted S3 bucket.</p>
  
**Files matching with Unique ID / SeriesId**
<p align="justify">
In cases where image file names match the unique id / series id, the association may be done automatically by the EPG system. In this case, the ids should not have special characters including white-spaces.</p>

**Files not matching with Unique ID / SeriesId**
<p align="justify"> In cases where image file names do not match the unique id / series id, the content provider / partner must provide the file names in the EPG sheet in one or more of the following fields: </p>
  
- Series Image
- Program Image
- Artwork
  
###### Images unavailable
<p align="justify">In cases where images are unavailable, a default image may be used. However, this approach is not preferred (or allowed only temporarily) as most of the platforms require artwork to be delivered for all the programs.</p>

> In the Schedule sheet, only supported date formats should be used. The entire file will be rejected even if any one date’s format is incorrect.<br/>
> EPG for a given broadcast date should be provided only in one excel sheet. For example, if EPG needs to be updated for an already submitted date, the previously uploaded file should be updated and re-uploaded instead of uploading another file with the updated schedules.<br/>
> The program values mentioned in the “Schedule” sheet should match with the Unique ID / EpisodeTitle values provided in the “EPG” sheet.<br/>
> No additional rows/columns are allowed in the “Schedule” sheet. When provided, the entire file will be rejected.<br/>
> The image URLs when provided should be publicly accessible over the internet. Google drive / Dropbox or such URLs that need a browser plugin to open are not supported. It is recommended that the image file names do not have special characters other than underscores as platforms such as Samsung do not support such special characters.
{.is-warning}
  
## Samples
[Fixed Duration Grid](/excel_epg.xlsx)
  
[Variable Duration Grid](/epg_15022021_21022021.xlsx)
