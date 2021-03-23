---
title: USA Today Programmatic Scheduling
description: 
published: true
date: 2021-03-23T13:16:45.465Z
tags: 
editor: markdown
dateCreated: 2021-03-22T13:40:42.376Z
---

# USA Today Automation Workflow

Figure below depicts the auto-scheduling workflow for USA Today.

![usa_today_autoscheduling_.png](/usa_today_autoscheduling_.png)

In summary, the workflow steps are as follows:

1. USA Today scheduling team creates the playlist with 15/30/60 minute blocks using CP Planner tool.
2. CP Planner will then export this block playlist into an AWS S3 bucket monitored by auto-scheduler.
3. An AWS lambda will be triggered upon the new file upload.
4. Upon receipt of the block playlist, the auto-scheduler will upload the same into Cloudport. If the playlist is for current day, then the existing playlist in Cloudport with already filled assets will be merged with the new playlist blocks before uploading to Cloudport.
5. The auto-scheduler will be launched every hour 0th minute as a scheduled job. This job will generate the list of assets to be played for the next hour using the mrss, the Cloudport media library, the block programming rules, and the programming block for the next hour.
5. If there are any new assets identified to play in the next hour, the media ingest process will be triggered.
6. The auto-scheduler will also upload the playlist with the next hour filled with actual assets into Cloudport.
7. The media ingest service will ingest these assets into Cloudport S3.
{.is-numbered-list}

## Programming Rules
- At the start of every hour, the schedule of the next hour will be filled.
- The next hour schedule may be a 60-minute block or multiple 15/30 minute blocks put together.
- 8 minutes of break will be scheduled per hour. The maximum duration of a given break will be 2 minutes.
- Depending on the block name, an asset selection rule will be applied. An xlsx file in the USA Today S3 bucket will contain the possible block names and their asset selection rules.
- The asset selection rule will be a combination of 3 rules:
>  - **Categories**
For each block name, a list of categories will be provided in the programming rules excel sheet. For an asset to be selected to fill a block this type, at least one of these mentioned categories must be present in the asset's categories (metadata from mrss).

>  - **Keywords**
For each block name, a list of keywords will be provided in the programming rules excel sheet. For an asset to be selected to fill a block this type, at least one of these mentioned keywords must be present in the asset's keywords (metadata from mrss).

> - **Time rule (Most Recent / Random)<br/>**
	**Most Recent**
In this mode, the block will be filled by most recent assets from mrss. The value of "modified" from the mrss will be used to identify the most recent assets. In case "modified" is not set, the value of "pubDate" will be used instead. If there are not enough assets from mrss, the assets already available in Media Library will be included to fill the rest of the block. <br/>
  **Random**
In this mode, the block will be filled by random assets from mrss. If there are not enough assets from mrss, the assets already available in Media Library will be included to fill the rest of the block.

> As asset durations do not round off exactly at the minute level, there may be a chance that the block is filled exactly at 13 minutes (15 minute block.
{.is-info}

Figure below has an example of the programing rules excel sheet:

![usa_today_programmingrules.png](/usa_today_programmingrules.png)

Column|Description|Example
--|--|--
Block Name|Type of Block from CP Planner|News
Category|Category to be searched in MRSS feed based on the Block Name|nation 
Keyword|Keyword to be searched in MRSS feed based on Block Name|entertainment
Time rules|Whether to take the latest or random from MRSS feed

Figure below has an excerpt from the mrss:
![usa_today_mrss.png](/usa_today_mrss.png)


