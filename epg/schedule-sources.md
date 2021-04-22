---
title: Amagi EPG Sources
description: This page details the various schedule sources and formats supported by EPG. 
published: true
date: 2021-04-22T19:08:44.652Z
tags: 
editor: markdown
dateCreated: 2021-04-22T19:06:14.062Z
---

# EPG Sources

## Schedule Sources

### Cloudport

Cloudport is one of the most used schedule sources. For the linear channels operated using Cloudport, the schedule is available as playlists, which can be used to accurately generate the EPG. Metadata Cloudport metadata

EPG system will read the playlist using Cloudport's playlist API and look for certain program types (e.g. program, longform, featurefilm, media etc.,) to distinguish the actual programs to be included in the EPG from the other playlist events such as ads, fillers, promos etc., that should not be included in the EPG. The start time and duration of the identified program items will then be used to construct the schedules.

As the Cloudport playlist will represent a program's playout as individual segments, EPG will aggregate the consecutive segments of a media to form a single program event.

For each media identified in the playlist, metadata will be retrieved from a pre-defined metadata source using the asset id.  

### XLSX / XML / JSON in S3

In cases where Cloudport schedules are not available or not fit-for-purpose, schedules may be made available in pre-defined formats as XLSX/XML/JSON files into an Amagi-owned S3 bucket or as publicly accessible HTTPS URLs. 

The xlsx grid format is documented in detail [here](https://docs.amagi.tv/en/epg/epg-excel). The content partner will prepare xlsx files and upload into an Amagi-owned S3 bucket exposed over S3/SFTP protocols. The excel grid format would capture both the schedules and metadata.

A sample json file can be downloaded from [here](/epg.json).

A sample XML file can be downloaded from [here](/epg.xml).


## Metadata Sources

Amagi EPG system accepts schedules and metadata for the EPG from a variety of sources, that differ in format, transfer mechanism, and frequency.

The primary source of schedules is the **Amagi Cloudport**, a natural candidate that knows what's playing in every channel played out by Amagi. However, Amagi delivers EPG even for channels not played out by Amagi, but that use our DAI functions in Amagi Thunderstorm. In such cases, Cloudport will not be available and hence external schedule sources need to be relied upon.

The primary source of metadata is also the **Amagi Cloudport** at the moment, however the strategy is to store all the metadata in **Amagi CPMetastore**, which has already started hosting the metadata for several channels. 

In addition, there may be cases where the Cloudport playlist will not be a fit for EPG purposes. One common example is when the playlist uses a lot of short duration media assets such as music. As EPG blocks are supposed to be at least 30 minutes, and the metadata is always at the asset level, the Cloudport playlist cannot be used. In such cases, other sources of schedules and metadata may be used, which will still provide the schedule and metadata details for the EPG that will sync with the Cloudport stream playout.


