---
title: Samsung EPG Configuration
description: 
published: true
date: 2021-03-23T14:22:50.220Z
tags: 
editor: markdown
dateCreated: 2021-03-23T13:26:44.538Z
---

# Samsung EPG Delivery Configuration

#### Pre-requisites

- Service ID
- Stream URL
- Channel Genre (https://docs.amagi.tv/en/genre)
- Country (ISO A2 Code)
- TBA Image URL
- Confirmation on whether to use series title or episode title as program title

> Though most channels use series title as the program title, some channels do prefer to use the episode title as the program title. In such cases, this option may be enabled in the platform configuration.
{.is-info}

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

#### Dos
Configure a tba image at all times

#### Don'ts
Do not enable "Send After"

#### Samsung API End-points
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

