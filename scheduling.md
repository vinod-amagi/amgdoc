---
title: Scheduling
description: Describes Amagi CLOUDPORT scheduling
published: true
date: 2021-02-23T19:51:43.794Z
tags: 
editor: markdown
dateCreated: 2021-02-18T06:34:38.651Z
---

# Schedules

Amagi CLOUDPORT uses 24-hr schedule for playing out channels. 

> **Scheduling systems**
 >
 > - WideOrbit
 >
 > - Broadview
 >
 > - Pharos Scheduling Systems
 >
 > - Phoenix 7 Scheduling systems
 >
 > - Amagi CSV
{.is-info}



> **Playlist Formats**
> 
> - BXF
> - PTS
> - BTS
> - OSC
> - SCD
> - XML
> - VIC TLB
> - TXT
> - CSV
> - XLSX


### Playlist Items

#### Primary

>
		> - Video - Programs, Movies, Commercials, Promos, Fillers, Idents, Wheelers etc.
    >
    > - <kbd>Fixed</kbd> Primary Item – Begins at a specific time 
    >
    > - <kbd>Normal</kbd> Primary Item – Begins after end of the previous `Primary` item

The primary items are video segments that are scheduled chronologically. The video segment provides the start (Start of Message - SOM) and end (End of Message - EOM) of an airable segment within the video file.

* <kbd>TC_IN</kbd>: [SMPTE Timecode](https://en.wikipedia.org/wiki/SMPTE_timecode) labelling the first airable frame of the video

* <kbd>SOM</kbd>: SMPTE Timecode labelling the first frame of a segment

* <kbd>EOM</kbd>: SMPTE Timecode labelling the last frame of a segment

SOM and EOM are labelled in relation to the TC_IN.

#### Secondary

The secondary items represent the graphics, logo, voice-over and triggers that are provided as secondary elements in the schedule.

>
  >  - Static Graphics (TGA, MOV)
  >
  >  - Dynamic Graphics (Adobe After Effects Projects)
  >
  >  - Amagi Native Graphics (HTML5 based graphics)
  >
  >  - Triggers (SCTE, DTMF)
  >
  >  - Voice-overs
  >
  
**Dependent Secondary**	
  - Scheduled with an offset to primary item
  
**Independent Secondary**
  - Scheduled at a specific time

### Others

> 
 > - Markers – Sectional Markers (indicates sections in the playlist)
 >
 > - Live Events – Scheduled as Primary Item
 >
 > - Signature – Item which indicates set of primary items
 > 
 > - Hole – Represents a gap in the playlist
