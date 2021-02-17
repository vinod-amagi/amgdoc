---
title: Artwork
description: Artwork requirements for all the MVPDs
published: true
date: 2021-02-17T16:28:45.336Z
tags: 
editor: markdown
dateCreated: 2021-01-14T10:17:05.177Z
---

# Artwork

## Rakuten

**Program level Images**

Name|Mandatory|Aspect Ratio|Minimum<br/>Dimension|Preferred<br/>Dimension|Titled|Format|Size
|-|-|-|-|-|-|
Artwork|Yes|16x9|320x180|1920x1080|Yes|JPEG/PNG|< 5MB
Snapshot|No|4x3|1920x1080|1920x1080||JPEG/PNG|< 5MB


## TCL

**Program level Images**

Name|Mandatory|Aspect Ratio|Minimum Dimension|Preferred Dimension
|-|-|-|-|-|-|
Horizontal<br/>Poster|Yes|16x9|934x525|934x525
Horizontal<br/>Poster|No|4x3|700x525|700x525
Horizontal<br/>Poster|No|3x2|525x350|525x350
Vertical<br/>Poster|No|2x3|350x525|350x525
Square<br/>Poster|No|1x1|525x525|525x525

**Channel Logos**
Name|Mandatory|Aspect Ratio|Minimum Dimension|Preferred Dimension|Size
|-|-|-|-|-|-|
Horizontal|Yes|16x9|1280x720|1280x720|< 1MB
Poster|Yes|1x1|525x525|525x525|

## Roku

Level|Mandatory|Aspect Ratio|Minimum Dimension|Preferred Dimension|Titled
|-|-|-|-|-|-|
Series/Program|**Yes**|16x9|800x450|1920x1080|Yes
Series/Program|No|2x3|532x800|532x800|Yes
Episode|**Yes**|16x9|800x450|1920x1080|Yes
Episode|No|2x3|532x800|532x800|No
Default^*^|**Yes**|16x9|800x450|1920x1080|Yes

^*^ A fall-back image to be used to deliver for all the programs that are missing program-specific images, usually representing the channel

**Channel Logos**
##### EPG 
- A logo for white background
- A logo for black background (can be one image that reads well on both backgrounds) 
- Logos need to be transparent PNGs 
- 80 pixels wide x 60 pixels tall 
- Center aligned on the horizontal & vertical axis 
- 3 pixel top and bottom border 
##### Info HUD 
- Logos need to be transparent PNGs 
- Logos need to be monochromatic hex #efefef  
- 260 pixels wide x 147 pixels tall 
- Align logo to the top edge

## Samsung

Level|Mandatory|Aspect Ratio|Minimum Dimension|Preferred Dimension|Titled
|-|-|-|-|-|-|
Series/Program^**^|**Yes**|16x9|1280x720|1920x1080|Yes
Episode^**^|**Yes**|16x9|1280x720|1920x1080|No
Default^*^|**Yes**|16x9|1280x720|1920x1080|Yes

^*^ Fall-back to be used to deliver for programs without images, usually representing the channel
^**^ At least one of either series/program level or episode level is mandatory

**Channel Logos**

The following channel logos are to be provided as a one-time delivery during onboarding into Samsung. 

Image|Aspect Ratio|Minimum<br/>Dimension|Preferred Dimension|Format|Application
--|--|--|--|--|--|
Square|1x1|476x476|1000x1000|PNG/JPEG|Recent channels row on Overlay and Home screen
Circle|1x1|476x476|1000x1000|PNG/JPEG|Channel tiles on Home screen and Channel page
Rectangle|16x9|1920x1080||PNG/JPEG|Fallback image when program image is not available
Wide|332x120|332x120||PNG/JPEG|Guide
Portrait|140x180|140x180||PNG/JPEG|

## Sling

Level|Mandatory|Aspect Ratio|Minimum Dimension|Preferred Dimension|Titled
|-|-|-|-|-|-|
Series/Program|**Yes**|16x9|1920x1080|1920x1080|Yes
Episode|**No**|16x9|1920x1080|1920x1080|Yes
Default^*^|**Yes**|16x9|1920x1080|1920x1080|Yes

^*^ Fall-back to be used to deliver for programs without images, usually representing the channel

## Tivo

Level|Mandatory|Aspect Ratio|Minimum Dimension|Preferred Dimension|Titled
|-|-|-|-|-|-|
Series/Program|**Yes**|16x9|1920x1080|1920x1080|Yes
Episode|**No**|16x9|1920x1080|1920x1080|No
Default^*^|**Yes**|16x9|1920x1080|1920x1080|Yes

^*^ Fall-back to be used to deliver for programs without images, usually representing the channel

## Vizio

Level|Mandatory|Aspect Ratio|Minimum Dimension|Preferred Dimension|Titled
|-|-|-|-|-|-|
Series/Program|**Yes**|2x3|NA|2000x3000|Yes
Episode|**No**|16x9|1920x1080|1920x1080|No

## Plex

Level|Mandatory|Aspect Ratio|Minimum Dimension|Preferred Dimension|Titled
|-|-|-|-|-|-|
Series/Program|**Yes**|2x3|NA|NA|Yes
Episode|**No**|16x9|NA|NA|No

## Gracenote

Although Gracenote does not enforce image deliveries in the EPG from Amagi, if the content partner needs to integrate with Gracenote, the following image specifications can be used.

|Type|Aspect Ratio|Dimensions|
|-|-|-|
|**Banner (titled)**|||
|Horizontal|4x3|1440x1080
|Horizontal|16x9|3840x2160 
|Horizontal|2x1|2048x1024
|Square|1x1|3000x3000|
|Vertical|3x4|2160x2880|
|**Iconic (not titled)**|||
|Horizontal|4x3|1440x1080
|Horizontal|16x9|3840x2160 
|Horizontal|2x1|2048x1024
|Square|1x1|3000x3000|
|Vertical|3x4|2160x2880|
|**Backdrop (not titled)**||
|Horizontal|16x9|3840x2160
|**Transparent Title Treatment**||
|Horizontal|9x5|1800x1000

Please refer to the official image style guide from Gracenote [here.](https://d3bd0tgyk368z1.cloudfront.net/feeds/media_ingest/images/gracenote/Gracenote_ImageGuide.pdf)