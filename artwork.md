---
title: Artwork
description: Artwork requirements for all the MVPDs
published: true
date: 2021-04-05T14:11:17.863Z
tags: 
editor: markdown
dateCreated: 2021-02-18T06:12:42.279Z
---

# Artwork

## Ingest
  
##### Image URLs accessible over internet
In cases where the content provider/partner can provide image URLs accessible over internet, such URLs can be populated in the following fields:

- Series Image
- Program Image
- Artwork
  
##### Images available, but not as URLs accessible over internet
<p align="justify">In cases where images are not available as publicly accessible URLs, the content provider / partner may upload the images into an Amagi-hosted S3 bucket.</p>
  
**Files matching with Unique ID / SeriesId**
<p align="justify">
In cases where image file names match the unique id / series id, the association may be done automatically by the EPG system. In this case, the ids should not have special characters including white-spaces.</p>

**Files not matching with Unique ID / SeriesId**
<p align="justify"> In cases where image file names do not match the unique id / series id, the content provider / partner must provide the file names in the EPG sheet in one or more of the following fields: </p>
  
- Series Image
- Program Image
- Artwork
  
###### Images unavailable
<p align="justify">In cases where images are unavailable, a default image may be used. However, this approach is not preferred (or allowed only temporarily) as most of the platforms require artwork to be delivered for all the programs.</p>

> In the Schedule sheet, only supported date formats should be used. The entire file will be rejected even if any one date’s format is incorrect.<br/>
> EPG for a given broadcast date should be provided only in one excel sheet. For example, if EPG needs to be updated for an already submitted date, the previously uploaded file should be updated and re-uploaded instead of uploading another file with the updated schedules.<br/>
> The program values mentioned in the “Schedule” sheet should match with the Unique ID / EpisodeTitle values provided in the “EPG” sheet.<br/>
> No additional rows/columns are allowed in the “Schedule” sheet. When provided, the entire file will be rejected.<br/>
> The image URLs when provided should be publicly accessible over the internet. Google drive / Dropbox or such URLs that need a browser plugin to open are not supported. It is recommended that the image file names do not have special characters other than underscores as platforms such as Samsung do not support such special characters.
{.is-warning}

## Specifications

### Rakuten

**Program level Images**

Name|Mandatory|Aspect Ratio|Minimum<br/>Dimension|Preferred<br/>Dimension|Titled|Format|Size
|-|-|-|-|-|-|-|-|
Artwork|Yes|16x9|320x180|1920x1080|Yes|JPEG/PNG|< 5MB
Snapshot|No|16x9|1920x1080|1920x1080||JPEG/PNG|< 5MB

### TCL

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

### Roku

Level|Mandatory|Aspect Ratio|Minimum Dimension|Preferred Dimension|Titled
|-|-|-|-|-|-|
Series/Program|**Yes**|16x9|800x450|1920x1080|Yes
Series/Program|No|2x3|532x800|532x800|Yes
Episode|**Yes**|16x9|800x450|1920x1080|Yes
Episode|No|2x3|532x800|532x800|No
Default^*^|**Yes**|16x9|800x450|1920x1080|Yes

> ^*^ A fall-back image usually representing the channel will be used to deliver for all the programs that are missing specific images.
{.is-info}

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

### Samsung

Level|Mandatory|Aspect Ratio|Minimum Dimension|Preferred Dimension|Titled
|-|-|-|-|-|-|
Series/Program^**^|**Yes**|16x9|1280x720|1920x1080|Yes
Episode^**^|**Yes**|16x9|1280x720|1920x1080|No
Default^*^|**Yes**|16x9|1280x720|1920x1080|Yes

> ^*^ A fall-back image usually representing the channel will be used to deliver for all the programs that are missing specific images.
> ^*^^*^ At least one of either series/program level or episode level is mandatory
{.is-info}

**Channel Logos**

The following channel logos are to be provided as a one-time delivery during onboarding into Samsung. 

Image|Aspect Ratio|Minimum<br/>Dimension|Preferred Dimension|Format|Application
--|--|--|--|--|--|
Square|1x1|476x476|1000x1000|PNG/JPEG|Recent channels row on Overlay and Home screen
Circle|1x1|476x476|1000x1000|PNG/JPEG|Channel tiles on Home screen and Channel page
Rectangle|16x9|1920x1080||PNG/JPEG|Fallback image when program image is not available
Wide|332x120|332x120||PNG/JPEG|Guide
Portrait|140x180|140x180||PNG/JPEG|

### Sling

Level|Mandatory|Aspect Ratio|Minimum Dimension|Preferred Dimension|Titled
|-|-|-|-|-|-|
Series/Program|**Yes**|16x9|1920x1080|1920x1080|**Yes**
Series/Program|**Yes**|16x9|||**No**
Series/Program|**Yes**|4x3|||**Yes**
Series/Program|**Yes**|4x3|||**No**
Series/Program|**Yes**|2x1|||**Yes**
Series/Program|**Yes**|2x1|||**No**
Series/Program|**Yes**|3x4|||**Yes**
Series/Program|**Yes**|3x4|||**No**
Episode|**No**|16x9|||**Yes**
Episode|**No**|16x9|||**No**
Episode|**No**|4x3|||**Yes**
Episode|**No**|4x3|||**No**
Episode|**No**|2x1|||**Yes**
Episode|**No**|2x1|||**No**
Episode|**No**|3x4|||**Yes**
Episode|**No**|3x4|||**No**
Default^*^|**Yes**|16x9|1920x1080|1920x1080|**Yes**

> ^*^ A fall-back image representing the channel will be used for programs without specific images.
{.is-info}

### Tivo

Level|Mandatory|Aspect Ratio|Minimum Dimension|Preferred Dimension|Titled
|-|-|-|-|-|-|
Series/Program|**Yes**|16x9|1920x1080|1920x1080|Yes
Episode|**No**|16x9|1920x1080|1920x1080|No
Default^*^|**Yes**|16x9|1920x1080|1920x1080|Yes

> ^*^ A fall-back image representing the channel will be used for programs without specific images.
{.is-info}

### Vizio

Level|Mandatory|Aspect Ratio|Minimum Dimension|Preferred Dimension|Titled
|-|-|-|-|-|-|
Series/Program|**Yes**|2x3|NA|2000x3000|Yes
Episode|**No**|16x9|1920x1080|1920x1080|No

**Channel Images**

Image|Aspect Ratio|Minimum<br/>Dimension|Preferred Dimension|Format|Remarks
--|--|--|--|--|--|
Discover<br/>Image|7x4|378x216|378x216|PNG/JPEG|Clearly state channel name and cannot have a logo or text on the bottom right corner
Hero<br/>Image||1560x370|1560x370|PNG/JPEG|Clearly state channel name and cannot have a logo or text on the bottom right corner
Simple<br/>White Logo||68x28|68x28|ai/svg/eps|To render over program images; 1 Color, White 

> Simple white logo must be a vector logo (no raster based images or raster images placed in a vector file i.e. .png, .jpg, .gif, etc)
{.is-warning}

### Plex

Level|Mandatory|Aspect Ratio|Minimum Dimension|Preferred Dimension|Titled
|-|-|-|-|-|-|
Series/Program|**Yes**|2x3|NA|NA|Yes
Episode|**No**|16x9|NA|NA|No

### Gracenote

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

Please refer to the official image style guides from Gracenote here:
- [Movies Images Style Guide](/gn_moviesstyleguide.pdf)
- [Series Images Style Guide](/gracenote_series_specs.pdf)
{.links-list}