---
layout: page
title: CLOUDPORT
parent: Platform Requirements
permalink: /platform/cloudport/
nav_order: 1
---

# CLOUDPORT

<p align="justify">
CLOUDPORT is Amagi's playout platform and can ingest all industry-preferred formats for audio, video, and subtitles/closed captions. It can generate output in multiple formats such as HLS, RTMP, and HD-SDI. The following table describes the metadata used by CLOUDPORT playout.
</p>

| Sl. No| Metadata | Remarks |
|----|-----|-----|
| 1 | Title | Title of video |
| 2 | Segments | Segments of video <br> * SOM (Start of message) <br> * EOM (End of message) <br> OR <br> * Segment TC_IN <br> * Duration (Offset) <br> <br> *Note: The details further described in Amagi CLOUDPORT manual.* |
| 3 | V-chip | V-chip information. [Wiki](https://en.wikipedia.org/wiki/V-chip) |
| 4 | AFD | AFD Descriptor. [Wiki](https://en.wikipedia.org/wiki/Active_Format_Description) |


![Amagi CLOUDPORT](/platform/amagi-cloudport.png)