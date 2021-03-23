---
title: Samsung EPG Configuration
description: 
published: true
date: 2021-03-23T14:15:32.195Z
tags: 
editor: markdown
dateCreated: 2021-03-23T13:26:44.538Z
---

# Samsung EPG Delivery Configuration

#### Pre-requisites

- Service ID
- Stream URL
- Channel Genre (https://docs.amagi.tv/en/genre)
- Country Code

#### Default / Conventions

Field|Value
--|--
Type|Samsung
Platform Name|Samsung
Delivery Type|NA
File Prefix|``Channel Code``
Upload Location|``empty``
Min No. of Days|0
Max No. of Days|7
Email ids|``empty``
Timezone|UTC
Delivery On|NORMAL
Send After|0
API Domain|[here](#samsung-api-end-points)
Country Code|ISO A2 Country Code
Station ID|Samsung allocated service id for a channel

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

