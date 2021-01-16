---
title: Contents
description: Describes contents and various formats
published: true
date: 2021-01-16T13:29:08.011Z
tags: 
editor: markdown
dateCreated: 2021-01-16T12:32:04.354Z
---

# Contents

The contents used by Amagi CLOUDPORT are as listed below:-

1. Video
2. Audio
3. Subtitles
4. Closed Captions
5. Metadata used for Amagi CLOUDPORT
6. Artwork

## Video


### Playout Output Formats

|Parameters|Supported|
|---|---|
|Aspect Ratio|	<li>16:9<li>4:3|
|Video resolution|	<li>1080i50<li>1080i60<li>1080p29.97<li>720p<li>SD-PAL<li>SD-NTSC|
|Video Format|	<li>H.264<li>MPEG-2|
|Audio format|	<li>MPEG-1 Layer 2<li>AAC<li>AC3|
|Audio Tracks|	No of tracks, Stereo
|Subtitles output|	<li>Burn-in<li>DVB Teletext<li>Closed Caption<li>Tele-Text|
|Additional Info|	<li>AFD<li>Aspect Ratio<li>VChip<li>EIT<li>AIT|
|Playout Output|<li>TSoIP<li>ASI<li>SDI|

  
### Input Formats - Video
 
The following table describes the input formats for Video content.
  
|Video|SD PAL|SD NTSC|720P|HD [1080i50]|HD [1080i60]|HD [1080p25]|
|--|--|--|--|--|--|--|
|Standard|PAL|NTSC|NTSC|PAL|NTSC|PAL|
|Format|MPEG TS/MXF/MP4/MOV|MPEG TS/MXF/MP4/MOV|MPEG TS/MXF/MP4/MOV|MPEG TS/MXF/MP4/MOV|MPEG TS/MXF/MP4/MOV|MPEG TS/MXF/MP4/MOV|
|File Extension|ts/mxf/mp4/mov|ts/mxf/mp4/mov|ts/mxf/mp4/mov|ts/mxf/mp4/mov|ts/mxf/mp4/mov|ts/mxf/mp4/mov|
|Video Pid|2064 (0x810)|2064 (0x810)|2064 (0x810)|2064 (0x810)|2064 (0x810)|2064 (0x810)|
|Video Format|AVC|AVC|AVC|AVC|AVC|AVC|
|Video Resolution|720x576|720x480|1280x720|1920x1080|1920x1080|1920x1080|
|Aspect Ratio|4:3 / 16:9|4:3 / 16:9|16:9|16:9|16:9|16:9|
|Format Profile|High@L4.1|High@L4.1|High@L4.1|High@L4.1|High@L4.1|High@L4.1|
|Compression Mode|CBR (Constant Bit Rate)|CBR (Constant Bit Rate)|CBR (Constant Bit Rate)|CBR (Constant Bit Rate)|CBR (Constant Bit Rate)|CBR (Constant Bit Rate)|
|Video Bitrate (mbps)|8 to 12|8 to 12|12 to 18|12|15 to 30|15 to 30|
|Video Codec|H.264|H.264|H.264|H.264|H.264|H.264|
|Color Space|YUV|YUV|YUV|YUV|YUV|YUV|
|Chroma Subsampling|4:2:0|4:2:0|4:2:0|4:2:0|4:2:0|4:2:0|
|CABAC|No|No|No|No|No|No|
|Video Frame Rate|25|29.97|29.97|25|29.97|25|
|Ref Frames|2|2|2|2|2|2|
|GOP|M=2; N=25|M=2; N=33|M=2; N=33|M=2; N=25|M=2; N=33|M=2; N=33|
|Scan Type|Progressive<br>Interlaced <br> - Interleaved Fields<br> Separated Fields|Progressive<br>Interlaced <br> - Interleaved Fields<br> Separated Fields|Progressive|Progressive<br>Interlaced <br> - Interleaved Fields<br> Separated Fields|Progressive<br>Interlaced <br> - Interleaved Fields<br> Separated Fields|Progressive<br>Interlaced <br> - Interleaved Fields<br> Separated Fields|
|Field Order|Top Field First (for interlaced video)|Top Field First (for interlaced video)|NA|Top Field First (for interlaced video)|Top Field First (for interlaced video)|Top Field First (for interlaced video)|

## Audio

### Input Audio Formats

The following table describes format for audio that are provided additionally.
  
|Codec|WAV|
|--|--|
|Audio Level|Normalized to -12dB
|Audio Bitrate (kbps)|192 to 320|
|Sampling Rate (KHz)|48|
|Channels|Stereo, 2-Mono|
  
## Subtitles
  
### Input Formats
  
  * PAC
  * SRT
  * STL
  
### Output Formats
  
  * DVB
  * Teletext
  * Burn-in
  
### Closed Captions
  
  ### Input Formats
  
  * SCC
  * MCC
  
### Output Formats
  
  * CC-608
  * CC-708
