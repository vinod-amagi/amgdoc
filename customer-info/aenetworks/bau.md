---
title: A+E BAU Doc
description: This is the BAU doc for A+E Channels
published: true
date: 2021-02-05T08:47:46.116Z
tags: 
editor: markdown
dateCreated: 2021-02-05T08:47:46.116Z
---

# Header
There are two "User Resolvable" audio QC checks in the UI - Silence Check and Loudness Check. Since we are doing audio norming in the playout loudness check is disabled for assets by default.

The silence check is performed on both the video and audio files. The value in "Audio PID" indicates which track has the issue.

In A+E's context if the value is "2068", it means that the video file has issues and need to be looked at by tech ops. If the value is different than 2068 it means that the audio file has issues and need to be looked at by language ops.

