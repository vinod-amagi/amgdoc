---
title: EPG Delivery Configuration
description: 
published: true
date: 2021-03-25T18:53:41.722Z
tags: 
editor: undefined
dateCreated: 2021-03-23T13:26:44.538Z
---

# Samsung EPG Delivery Configuration

#### Pre-requisites

- Service ID ([Samsung deliveries](https://docs.google.com/spreadsheets/d/1ZCMmznq-ZlctwQUqVTep9Skv9yONTjMFPtlgAUU-mI8/edit#gid=0))
- Stream URL
- Channel Genre (https://docs.amagi.tv/en/genre)
- Country (ISO A2 Code)
- Channel's default / TBA image URL (1920x1080) 
- Confirmation on whether to use series title or episode title as program title

#### Default / Conventions

Field|Value
--|--
Type|Samsung
Platform Name|Samsung
Delivery Type|NA
File Prefix|`Channel code as configured in the UI`
Upload Location|`empty`
Min No. of Days|0
Max No. of Days|7
Email ids|`empty`
Timezone|UTC
Delivery On|NORMAL
Send After|0
API Domain|[here](#samsung-api-end-points)
Genre|Entertainment
Enable Send After|`false`
Enable Partial Delivery|`false`
Cancel Delivery On Error|`false`
Paid Channel|`false`
Enable Validation Alert|`true`
Send Only On Weekdays|`false`
Use Episodic Title|`false`

> **Use Episodic Title**
Though most channels use series title as the program title, some channels do prefer to use the episode title as the program title. In such cases, this option may be enabled in the platform configuration. 
{.is-info}

#### Dos
- Configure a tba image at all times

#### Don'ts
- Do not configure more than one Samsung delivery (even to different regions) for any channel in the UI 
- Do not enable "Send After"

> In case an EPG is delivered to a wrong end-point, then follow the steps below to recover:
Update the end-point in platform configuration
Delete available schedules in the EPG UI from "SCHEDULE" tab
Force Update schedule
Force Deliver schedule
{.is-warning}

#### Samsung API Domain
Country|End-point
--|--
**Staging**|
US|https://vcapi-usstg.samsungcloudsolution.com
AU|https://vcapi-usstg.samsungcloudsolution.com
IN|https://vcapi-usstg.samsungcloudsolution.com
BR|https://vcapi-usstg.samsungcloudsolution.com
MX|https://vcapi-usstg.samsungcloudsolution.com
GB|https://vcapi-eustg.samsungcloudsolution.com
DE|https://vcapi-eustg.samsungcloudsolution.com
AT|https://vcapi-eustg.samsungcloudsolution.com
CH|https://vcapi-eustg.samsungcloudsolution.com
BE|https://vcapi-eustg.samsungcloudsolution.com
LU|https://vcapi-eustg.samsungcloudsolution.com
PT|https://vcapi-eustg.samsungcloudsolution.com
**Production**|
US|https://vcapi-us.samsungcloudsolution.com
AU|https://vcapi-us.samsungcloudsolution.com
IN|https://vcapi-us.samsungcloudsolution.com
MX|https://vcapi-us.samsungcloudsolution.com
BR|https://vcapi-us.samsungcloudsolution.com
GB|https://vcapi-eu.samsungcloudsolution.com
DE|https://vcapi-eu.samsungcloudsolution.com
AT|https://vcapi-eu.samsungcloudsolution.com
CH|https://vcapi-eu.samsungcloudsolution.com
BE|https://vcapi-eu.samsungcloudsolution.com
LU|https://vcapi-eu.samsungcloudsolution.com
PT|https://vcapi-eu.samsungcloudsolution.com

# Roku EPG Delivery Configuration

#### Pre-requisites

- Feed json
- Information on whether CC is available
- Stream URL

#### Default / Conventions

Field|Value
--|--
Type|Roku
Platform Name|Roku
Delivery Type|NA
File Prefix|`Channel code as configured in the UI`
Upload Location|`empty`
Min No. of Days|-2
Max No. of Days|7
Email ids|`empty`
Timezone|UTC
Delivery On|NORMAL
Send After|0
Enable Send After|`false`
Enable Partial Delivery|`false`
Cancel Delivery On Error|`false`
Paid Channel|`false`
Enable Validation Alert|`true`
Send Only On Weekdays|`false`
Show Rating|`false`<br/>The UI option is not working at the moment. A code fix is needed. Please ask the dev team to set up this config in backend if required.
Show CC|`false`<br/>The UI option is not working at the moment. A code fix is needed. Please ask the dev team to set up this config in backend if required.
Add Alternative Title|`false`

> **Add Alternative Title** 
Some channels e.g. Olympusat Horrorfy prefer to use an alternative title just for Roku. In such cases, this option may be enabled in the platform configuration. This is usually due to Roku not accepting series titles being present in program titles of episodic contents.
{.is-info}

#### Additional Deployment Steps

> The feed json file needs to be uploaded into the AMGEPG server under /home/ubuntu/apps/src/github.com/amagimedia/epg/templates/roku/ folder with name epg.`<channel code>`.json
{.is-warning}

# Vizio Delivery

> After enabling Vizio delivery for a channel, always ensure that the [Vizio API end-point](https://amgepg.amagi.tv/v1/vizio/epg?token=1ggCWIBYuCdyI326h6tFJMmR6AH)  is loading succesfully.
{.is-warning}

# Plex EPG Delivery

#### Default / Conventions

Field|Value
--|--
Type|Plex
Platform Name|Plex
Delivery Type|S3
File Prefix|`Channel code as configured in the UI`
Upload Location|static/feeds/`<Channel code>`_plex/ 
Min No. of Days|-1
Max No. of Days|7
Email ids|`empty`
Timezone|`Channel's broadcast timezone`
Delivery On|NORMAL
Send After|0
Series Image Aspectratio|2x3
Program Image Aspectratio|16x9
Timeformat|
S3 bucket|amagicloud-vod
S3 region|us-east-1
S3 access code|
S3 secret code|
Enable Send After|`false`
Enable Partial Delivery|`false`
Cancel Delivery On Error|`false`
Paid Channel|`false`
Enable Validation Alert|`true`
Send Only On Weekdays|`false`
Use Series Title|`false`
Single File|`false`

