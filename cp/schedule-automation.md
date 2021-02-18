---
title: Scheduling Automation
description: Automated scheduling
published: true
date: 2021-02-11T13:31:10.571Z
tags: 
editor: undefined
dateCreated: 2021-02-11T13:17:56.897Z
---

# Automations

Amagi CLOUDPORT supports a set of automations to reduce manual scheduling effort. Additionally, CLOUDPORT provides a programmable interface to extend scheduling to cater specific or custom scheduling rules. The various use cases are described below:-

## Auto-Fill

CLOUDPORT automatically fills an island in the schedule with a set of contents identified as **Filler** and **Wheeler** contents.

> **Filler**: These are contents that are designed to be played in the entirety. i.e., the content is expected to be scheduled for the complete duration.
{.is-info}

> **Wheeler**: These are contents that are designed to be played partially. The content can be scheduled for a shorter duration than content duration. These types of contents are used for filling the last of portion of the island, for which a **Filler** content matching the duration is not available.
{.is-info}

## Cascade Copying

CLOUDPORT allows to copy the schedule used in a channel to be copied to another channel under the same account (i.e. part of the same channel group). During the copy, specific types of contents can be replaced. Typical use cases are:-

* Copy schedule and replace commercials for a specific geography or market

* Copy schedule and remove specific contents that have licensing limitations

## Scheduled Rescue

Autmatically fill **holes** in the schedule with the rescue contents available in the media library. A **hole** is a portion of the schedule where no content is scheduled. A **rescue** asset is a content that is identified to play in case of an emergency. Amagi CLOUDPORT provides mechanism to define specific types of contents as *filler* and *wheeler* contents.
