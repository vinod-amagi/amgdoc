---
title: Scheduling Configurations
description: Configurations supported by scheduling
published: true
date: 2021-02-23T19:59:20.763Z
tags: 
editor: markdown
dateCreated: 2021-02-18T06:34:34.017Z
---

# Scheduling Configurations

Amagi CLOUDPORT allows a set of configurations to achieve various scheduling behaviours during processing the schedules. These configurations are as follows:-

## Pick Duration From Media Library

- Duration of a segment is taken from CLOUDPORT's Media Library.
- Duration specified in the schedule is retained until media is uploaded.
- Duration is modified in the Media Library, it will be automatically updated in the schedule. Duration in Media Library is updated during ingest content and metadata.
 - It is mandatory to enable **Auto Publish** along with this configuration.

## Auto Publish

 - When media used in a **published** schedule is changed, playlist will be modified using based on the changes. This configuration is used to **publish** updated schedule.
 
 - When this option is disabled, the duration will be updated in the schedule, but the modified schedule will not be published.
 
 - This configuration is mandatory when **Pick Duration From Media Library** is enabled.
 
 ## Allow More Than 24 Hours
 
 - By default, schedules contain 24 hours of programming for each day.
 - The contents scheduled after 24 hours will be discarded during the upload of schedule.
 - This configuration allows to retain the contents that are scheduled after 24 hours.
 
 ## Push or Pull Playlist or Schedule
 
 - When scheduling more than 24 hours is allowed, the scheduled content can overlap with next day’s playlist.
 - This configuration allows to automatically update next day's schedule start time based on current day’s end time. The changes are cascaded to the schedules for all days after the current day.
 - This adjustment is performed when a schedule is published.
 - During the publish of the current day’s schedule, the start time of the next day’s schedule is adjusted. With **auto-publish** configuration, this leads to cascading effect and adjusts the schedule for the remaining days.
  - If this configuration is not enabled, and if **Allow More Than 24 Hours** is enabled, the schedules should be provided with complete accuracy - i.e. current day's end time should match with next day's start time.


