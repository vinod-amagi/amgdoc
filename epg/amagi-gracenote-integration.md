---
title: Amagi Gracenote Integration
description: This document describes briefly the integrations between Amagi and Gracenote.
published: true
date: 2021-04-22T15:54:40.749Z
tags: 
editor: markdown
dateCreated: 2021-04-22T05:26:31.252Z
---

> Internal - DO NOT SHARE EXTERNALLY
{.is-warning}

# Gracenote Integration

The world’s top broadcast, cable and satellite services, and TV makers all depend on Gracenote to power their TV listings and schedules offered in set-top boxes, mobile devices and Smart TVs.

With deep data describing movies and TV shows, including episode and series descriptions, genres, moods, and cast details, as well as live sports events, music and more, Gracenote powers next generation user interfaces and discovery engines.

Amagi integrates with Gracenote primarily for two purposes.

- Delivering EPG into Gracenote 
- Delivering EPG from Gracenote to MVPDs

![amagi_gracenote_integrations.png](/amagi_gracenote_integrations.png)

#### Delivering EPG into Gracenote

For linear channels operated by Amagi, the schedules may be delivered into Gracenote when the content partner needs to publish their channel in Gracenote (typically when the channel is delivered to certain platforms such as Xumo, Amazon etc., who retrieve the EPG only from Gracenote).

Amagi EPG system generates the EPG based on the Cloudport playlists (or other supported schedules sources) and metadata sourced from the content partners and delivers to Gracenote in a pre-defined XML format into an FTP server hosted by Gracenote.

Amagi EPG system scans the schedule sources for new/modified schedules periodically (approximately every 3 hours), generates EPG if necessary and delivers to the FTP. Gracenote will also setup processes to scan this FTP periodically (frequency to be agreed while onboarding) and ingest the data. 

> The content partner will be responsible for getting the FTP credentials from Gracenote and share with Amagi during the channel onboarding.
{.is-info}

> Currently there is no feedback mechanism to acknowledge the success/failure of the ingest by Gracenote or the quality of the data.
{.is-warning}


#### Delivery EPG from Gracenote to MVPDs

In some cases, the content partner may already have their channels' schedules (say OTA channels) integrated into Gracenote. When the content partner wishes to run OTT channels by Amagi following the same schedules, it may be simpler for Amagi to source the schedules and metadata from Gracenote instead of the content partners spending effort in collecting the same. The generated EPG may be delivered to other platforms by Amagi after transforming to the necessary standards of the respective destination platforms.

> This integration is done using Gracenote's OnConnect API. While onboarding, the content partner will the API access token from Gracenote and share with Amagi. 
{.is-info}

# Commercial Contracts

In both scenarios, the integration between Amagi and Gracenote are technical, no commercial contracts involved. The channel partner will be responsible for establishing the commercial contract with Gracenote and share with Amagi the necessary technical details for the integration.
