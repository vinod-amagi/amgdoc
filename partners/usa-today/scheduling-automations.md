---
title: USA Today Programmatic Scheduling
description: 
published: true
date: 2021-03-23T08:06:34.425Z
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

Figure below has an example of the programing rules excel sheet:

![usa_today_programmingrules.png](/usa_today_programmingrules.png)

Column|Description|Example
--|--|--
Block Name|Type of Block you will receive from CP Planner|News
Category|Category to be searched in MRSS feed based on the Block Name|nation 
Keyword|Keyword to be searched in MRSS feed based on Block Name|entertainment
Time rules (most recent or random)|Whether to take the latest or random from MRSS feed

Figure below has an excerpt from the mrss:
![usa_today_mrss.png](/usa_today_mrss.png)


