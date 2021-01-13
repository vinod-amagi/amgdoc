---
title: Artwork
description: Artwork requirements for all the MVPDs
published: true
date: 2021-01-13T05:36:33.821Z
tags: 
editor: markdown
---

# Artwork

## Roku

### Series Thumbnails

Level|Mandatory|Aspect Ratio|Minimum Dimension|Preferred Dimension|Titled
|-|-|-|-|-|-|
Series/Program|**Yes**|16x9|800x450|1920x1080|Yes
Series/Program|No|2x3|532x800|532x800|Yes
Episode|**Yes**|16x9|800x450|1920x1080|Yes
Episode|No|2x3|532x800|532x800|No
Default^*^|**Yes**|16x9|800x450|1920x1080|Yes

^*^ A fall-back image to be used to deliver for all the programs that are missing program-specific images, usually representing the channel

## Samsung

Level|Mandatory|Aspect Ratio|Minimum Dimension|Preferred Dimension|Titled
|-|-|-|-|-|-|
Series/Program^**^|**Yes**|16x9|1280x720|1920x1080|Yes
Episode^**^|**Yes**|16x9|1280x720|1920x1080|No
Default^*^|**Yes**|16x9|1280x720|1920x1080|Yes

^*^ Fall-back to be used to deliver for programs without images, usually representing the channel
^**^ At least one of either series/program level or episode level is mandatory

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

