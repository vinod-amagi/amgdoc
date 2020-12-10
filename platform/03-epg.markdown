---
layout: page
title: EPG
parent: Platform Requirements
permalink: /platform/epg/
nav_order: 1
---
## Introduction

Amagi EPG service is an auxilliary service along with CLOUDPORT playout platform. The EPG service creates EPG in various formats and deliver to various vMVPDs and partners. The following are the list of platforms where EPG is being delivered.

  * **Samsung**
  
  * **Roku**
  
  * **Plex**
  
  * **Sling**
  
  * **STIRR**
  
  * **Tivo**
  
  * **Rakuten**
  
  * **Vizio**
  
  * **Gracenote**

## Metadata Requirements

Metadata|Description|Samsung|Roku|Plex|Sling|STIRR|Tivo|Rakuten|Vizio|Gracenote
|---|---|---|---|---|---|---|---|---|---|---|
TMS ID|||Preferred|||||||Preferred
Title|"Series / Movie title"|Mandatory|Mandatory|||||||Mandatory
Category||Optional|Optional|||Optional||||
Series Name|For episodic content|Mandatory|Mandatory||||Mandatory|||Mandatory
Series Id|For episodic content|Mandatory|Mandatory||||Mandatory|||Mandatory
Season Number|For episodic content|Mandatory|Mandatory||||Mandatory|||Mandatory
Episode Name/Title|For episodic content|Mandatory|Mandatory|||Mandatory|Mandatory|||Mandatory
Episode Number|For episodic content|Optional|Mandatory for episodic content|||Mandatory|Mandatory|||Mandatory
Show_Type (Series/Movies)||Required|Required (also supports tvSpecials as another type)|||||||
Images|16x9 (1920x1080) preferred|Mandatory|"16x9 series or program 2x3 movie poster Mandatory"|"2x3 mandatory 16x9 optional"|"16x9 images mandatory for series/show level Thumbnail images preferred"||16x9 Mandatory (minimum 1920x1080)|"16x9 image mandatory with min 1920x1080 resolution"|"2x3 mandatory 16x9 optional"|Not required
Image Rights|"If this is licensed| validity start and end"||||||Mandatory|||
Image Type|Series/episode/movie||||||Mandatory|||
Description|Short description of the series/movie|Mandatory|Mandatory|||Mandatory|Mandatory|Mandatory|Mandatory|Mandatory
Episode Description|Short description of the episode|Mandatory|Mandatory|||Mandatory|Mandatory|Mandatory||Mandatory
Rating||Mandatory|Mandatory for kids directed content||||Preferred|"Mandatory Required for the country delivering to"|Mandatory|
Genre|||||Preferred||Preferred|Preferred||Mandatory
Language||||||Mandatory|Mandatory|Required||
Roku Channel Logos|||Mandatory|||||||
Feed Json with description on Channels|||Mandatory|||||Required||
Samsung channel logos||||||||||
Duration||||||||||
Original air date|||||Mandatory||Mandatory||Mandatory|
Tags|||kidsdirected tag is mandatory|||||||
isLive|||||Mandatory|||||

