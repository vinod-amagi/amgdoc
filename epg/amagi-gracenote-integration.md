---
title: Amagi Gracenote Integration
description: This document describes briefly the integrations between Amagi and Gracenote.
published: true
date: 2021-04-23T14:34:28.785Z
tags: 
editor: markdown
dateCreated: 2021-04-22T05:26:31.252Z
---

> Amagi Internal Only - DO NOT SHARE EXTERNALLY
{.is-warning}

# Gracenote Integration

The world’s top broadcast, cable and satellite services, and TV makers all depend on Gracenote to power their TV listings and schedules offered in set-top boxes, mobile devices and Smart TVs.

With deep data describing movies and TV shows, including episode and series descriptions, genres, moods, and cast details, as well as live sports events, music and more, Gracenote powers next generation user interfaces and discovery engines.

Amagi integrates with Gracenote primarily for two purposes.

- Delivering EPG to Gracenote 
- Delivering EPG from Gracenote to MVPDs

![amagi_gracenote_integrations.png](/amagi_gracenote_integrations.png)

#### Delivering EPG into Gracenote

For linear channels operated by Amagi, the schedules can be delivered into Gracenote when the content partner needs to publish their channel in Gracenote. This is needed typically when the channel is delivered to certain platforms such as Xumo, Amazon etc., who retrieve the EPG only from Gracenote.

Amagi EPG system generates the EPG using schedules sourced from the Cloudport playlists (or other supported schedule sources) and metadata sourced from the content partners and delivers to Gracenote in a pre-defined XML format into an FTP server hosted by Gracenote.

The schedule sources are scanned for new/modified schedules periodically (approximately every 3 hours). If found, the updated EPG is generated and delivered to the FTP. 

During onboarding, Gracenote sets up processes to scan this FTP periodically (frequency to be agreed while onboarding) to ingest the data. 

> The content partner will be responsible for getting the FTP credentials from Gracenote and share with Amagi during the channel onboarding.
{.is-info}

> Currently there is no feedback mechanism to acknowledge the success/failure of the ingest by Gracenote or the quality of the data.
{.is-warning}

##### Delivering images to Gracenote

As part of the EPG delivery to Gracenote, images may also be included if they are inline with the Gracenote image requirements. However, this approach is not recommended as Gracenote prefers that the images are shared by the content partner directly to Gracenote.

#### Delivering EPG from Gracenote to MVPDs

In some cases, the content partner may already have their channels' schedules integrated into Gracenote. 

Some examples are:
> - When channel is not played out by Amagi, but Amagi Thunderstorm is used for DAI
> - When the content partner already has a OTA channel

If the Amagi operated (or DAI-ed) channels follow those schedules, it may be simpler for Amagi to source the schedules and metadata already available in Gracenote instead of the content partners spending effort in collecting & delivering the same to Amagi. 

For such cases, Amagi EPG supports the Gracenote OnConnect API as an EPG source. The schedules and metadata available in Gracenote are pulled, transformed and delivered to other platforms.

> While onboarding, the content partner will need to get the API access token from Gracenote and share with Amagi. 
{.is-info}

# Commercial Contracts

In both scenarios, the integration between Amagi and Gracenote are technical, no commercial contracts involved. The channel partner will be responsible for establishing the commercial contract with Gracenote and share with Amagi the necessary technical details for the integration.
