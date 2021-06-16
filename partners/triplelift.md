---
title: Amagi Triplelift Integration
description: A short how-to on the Amagi API for Triplelift integration..
published: true
date: 2021-05-05T08:49:21.854Z
tags: 
editor: undefined
dateCreated: 2021-05-05T08:49:20.256Z
---

# Amagi Integrations API - Triplelift How-To

Swagger API documentation is available [here](https://integrations-dev.amagi.tv:8020/docs). The APIs may be tried out in the Swagger UI too if preferred.

## Authentication - Token API

Authentication uses a time-boxed bearer token. 

A user name, password and a authorization scope will be provided by Amagi to Triplelift. For the current development environment, the details are

**User name**: ```triplelift-dev```
**Password**: ```6647799da47e2c199c1d1467e083b5a8ce06469482c0ea7c68c685b68d5696cb```
**Scope:** ```platforms:triplelift```

A sample API invocation using curl would be:

```curl -L -X 'POST' \
  'https://integrations-dev.amagi.tv:8020/token' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'username=triplelift-dev&password=6647799da47e2c199c1d1467e083b5a8ce06469482c0ea7c68c685b68d5696cb&scope=platforms%3Atriplelift'
```
which would return:

```
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRyaXBsZWxpZnQtZGV2Iiwic2NvcGVzIjpbInBsYXRmb3Jtczp0cmlwbGVsaWZ0Il19.a-t10raCuCpkOSDeFjITp1vCYQxJIjrpIfJo_6DqCYM",
  "token_type": "bearer"
}
```

> The tokens from current development version (integrations-dev) does not have an expiry, though the production will include the same. 
{.is-info}

## Channels API

This API returns the list of all channels integrated with Triplelift.

The bearer token from the token API would be added as an ```Authorization``` header.

A sample API invocation using curl would be:

```curl -L -X 'GET' \
  'https://integrations-dev.amagi.tv:8020/api/v1/triplelift/channels' \
  -H 'accept: application/json' -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRyaXBsZWxpZnQtZGV2Iiwic2NvcGVzIjpbInBsYXRmb3Jtczp0cmlwbGVsaWZ0Il19.a-t10raCuCpkOSDeFjITp1vCYQxJIjrpIfJo_6DqCYM'
```
which would return:
```json
[
	{
  	"customer_name":"WhistleTV",
    "channel_name":"Whistle TV",
    "channel_code":"WHLTV",
    "_id":"609246277d1326cb7665279d"
  }
]
```

## Assets API

This API returns the list of assets of a given channel available for Triplelift.

The bearer token from the token API would be added as an ```Authorization``` header.

A sample API invocation using curl would be:

```curl -L -X 'GET' \
  'https://integrations-dev.amagi.tv:8020/api/v1/triplelift/channels/609246277d1326cb7665279d/assets' \
  -H 'accept: application/json' -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRyaXBsZWxpZnQtZGV2Iiwic2NvcGVzIjpbInBsYXRmb3Jtczp0cmlwbGVsaWZ0Il19.a-t10raCuCpkOSDeFjITp1vCYQxJIjrpIfJo_6DqCYM'
```
which would return:
```json
[{
    "guid": null,
    "title": "Lauda The Untold Story",
    "asset_id": "67",
    "blip_asset_id": "a586999f-c031-4d58-a641-b188b758ebd8",
    "segments": [{
        "sequence": 1,
        "tc_in": "00:00:00.000",
        "tc_out": "00:06:50.000"
    }, {
        "sequence": 2,
        "tc_in": "00:06:50.000",
        "tc_out": "00:14:41.000"
    }, {
        "sequence": 3,
        "tc_in": "00:14:41.000",
        "tc_out": "00:20:14.000"
    }, {
        "sequence": 4,
        "tc_in": "00:20:14.000",
        "tc_out": "00:24:45.000"
    }, {
        "sequence": 5,
        "tc_in": "00:24:45.000",
        "tc_out": "00:29:55.000"
    }, {
        "sequence": 6,
        "tc_in": "00:29:55.000",
        "tc_out": "00:36:42.000"
    }, {
        "sequence": 7,
        "tc_in": "00:36:42.000",
        "tc_out": "00:42:50.000"
    }, {
        "sequence": 8,
        "tc_in": "00:42:50.000",
        "tc_out": "00:47:57.000"
    }, {
        "sequence": 9,
        "tc_in": "00:47:57.000",
        "tc_out": "00:52:00.000"
    }, {
        "sequence": 10,
        "tc_in": "00:52:00.000",
        "tc_out": "00:56:46.000"
    }, {
        "sequence": 11,
        "tc_in": "00:56:46.000",
        "tc_out": "01:02:31.000"
    }, {
        "sequence": 12,
        "tc_in": "01:02:31.000",
        "tc_out": "01:07:31.000"
    }, {
        "sequence": 13,
        "tc_in": "01:07:31.000",
        "tc_out": "01:12:52.000"
    }, {
        "sequence": 14,
        "tc_in": "01:12:52.000",
        "tc_out": "01:18:21.000"
    }, {
        "sequence": 15,
        "tc_in": "01:18:21.000",
        "tc_out": "01:22:29.000"
    }],
    "dbi_segments": null,
    "duration": "01:30:13;05",
    "aspect_ratio": "16:9",
    "resolution": "1920x1080",
    "fps": "29.97",
    "duration_msec": 5413174,
    "cdn_url": "https://amagicloud-whistletv.s3.amazonaws.com/Media/Processed/a586999f-c031-4d58-a641-b188b758ebd8.ts?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAI2QT7LVTE7P4RQYA%2F20210505%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210505T083934Z&X-Amz-Expires=21600&X-Amz-SignedHeaders=host&X-Amz-Signature=331aaf8c38ea396289c2f92778b89110d14ca34c2e0a685e1e4b272cd4f83493"
}]
```
> The CDN URL is time-bound, with expiry time set to 6 hours in this development environment.  
{.is-info}

## DBI Segments Creation

This API allows Triplelift to upload DBI segments for an asset. 

The bearer token from the token API would be added as an ```Authorization``` header.

A sample API invocation using curl would be:

```
curl -L -X 'POST' \
  'https://integrations-dev.amagi.tv:8020/api/v1/triplelift/channels/609246277d1326cb7665279d/assets/67/dbi_segments' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRyaXBsZWxpZnQtZGV2Iiwic2NvcGVzIjpbInBsYXRmb3Jtczp0cmlwbGVsaWZ0Il19.a-t10raCuCpkOSDeFjITp1vCYQxJIjrpIfJo_6DqCYM' \
  -H 'Content-Type: application/json' \
  -d '[
    {
        "segment_id": 1,
        "tc_in": "00:00:00:00",
        "tc_out": "00:00:10:00"
    },
    {
        "segment_id": 2,
        "tc_in": "00:02:00:00",
        "tc_out": "00:02:10:00"
    }
]'
```
which would return:
```json
{
  "status":"OK",
  "message":"Successfully uploaded DBI segments into Cloudport"
}
```
> As this is a development environment, the DBI segments are not ingested into Cloudport.
{.is-warning}