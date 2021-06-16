---
title: Amagi EPG Format
description: Details the default Amagi EPG format
published: true
date: 2021-04-21T12:27:31.255Z
tags: 
editor: undefined
dateCreated: 2021-02-19T07:14:29.310Z
---

# Amagi EPG

Amagi may deliver EPG in standard [XMLTV](http://wiki.xmltv.org/index.php/XMLTVFormat) format when the receiving platform does not have a defined specification.

### Available fields

|Field|Description|Mandatory|Remarks|
|--|--|--|--|
programme start|Program start time|Yes|Default format: `YYYY-MM-DDTHH:MM:SS.fff+hhmm`<br/>Channel time zone by default 
programme stop|Program end time|Yes|Default format: `YYYY-MM-DDTHH:MM:SS.fff+hhmm`<br/>Channel time zone by default 
title|Title of the program / series|Yes
sub-title|Title of the episode|No|Only for episodic contents
icon|Program / episode level Images|No|Subject to content partner providing the images<br/>Specific aspect ratios can be included
desc|Description of the episode||
category|Genre, sub-genre etc.,||
language|Language of the program||Default: English
date|Original air date|No|Format: `YYYYMMDD`
length|Duration of the program|No|In minutes and/or seconds<br/>e.g.```<length units="minutes">30</length>```<br/>```<length units="seconds">1800</length>```
episode-num|Episode number|No|Only for episodic contents<br/>Supported in xmltv_ns and onscreen formats:<br/>```<episode-num system="xmltv_ns">0.0.0</episode-num><episode-num system="onscreen">1</episode-num>```
Asset id|Id of the video asset|Yes|```<episode-num system="assetID">0b8c78ee-one-for-the-road</episode-num>```
premiere|Indicates if this program is a premiere show|No|Subject to content provider indication
previously-shown|Indicates if this program has been aired previously|No|Subject to content provider indication

### Delivery Mode

<p align="justify">
Delivered as one or more XML files uploaded to a location preferred by the platform. 

An output file includes EPG of only one channel, for one or more broadcast days as preferred by the platform. 

In case of day-wise output, the output file name includes the date of the EPG. In case of multiple days, the output file name stays the same but an updated file is delivered every day.

e.g. For a channel `XYZ`, the day-wise output is `XYZ2020-11-27.xml` and consolidated output is `XYZ.xml`. 
</p>

### Delivery Window

EPG is delivered for `(current day - 1 day)` to `(current day + 7 days)` by default. This can be extended to 30 days, subject to schedule availability from the content partners.


### Delivery Frequency
EPG is delivered at a maximum frequency of `every 6 hours`. As a bare minimum, at least once a day the EPG will be updated (to accommodate the current + n days sliding window).


### Delivery Mechanism

#### HTTPS

EPG is delivered to an AWS S3 bucket, hosted by Amagi and shared as a HTTPS URL via Cloudfront. 

#### S3

EPG is delivered to an AWS S3 bucket, hosted either by Amagi or the platform. In the case of Amagi hosted S3 bucket, the file(s) are shared as Cloudfront URL(s) (with no caching).

#### FTP / SFTP

<p align="justify">
EPG is delivered to a FTP server hosted by the platform. Authentication credentials and the destination folder needs to be shared by the platform. Amagi does not host a FTP server at the moment. 

In case of SFTP deliveries, the server may be hosted either by Amagi or the platform. Both password-based and public key based authentications are supported. 
</p>

#### Sample
```
<tv date="2020-12-06" generator-info-name="XMLTV" generator-info-url="http://membled.com/pwork/apps/xmltv/" source-info-name="Radio Times">
	<channel id="27">
		<display-name lang="en">Channel display name</display-name>
		<url>Channel web site</url>
	</channel>
	<programme channel="27" start="2020-11-04T06:00:00.000-0500" stop="2020-11-04T18:00:00.000-0500">
		<title lang="en">title of the series / program </title>
		<sub-title lang="en">title of the episode in case of episodic content</sub-title>
		<icon height="1080" src="https://example.images.net/image1.jpeg" width="1920"/>
		<desc lang="en">description of the program</desc>
		<category lang="en">program genre and subgenre</category>
		<language>English</language>
		<orig-language>English</orig-language>
		<date>20180601</date>
		<length units="minutes">720</length>
		<length units="seconds">43200</length>
		<episode-num system="xmltv_ns">0.1.0</episode-num>
		<episode-num system="onscreen">2</episode-num>
		<episode-num system="assetID">video_asset_id_1</episode-num>
		<credits/>
		<video>
			<present>yes</present>
			<colour>yes</colour>
			<quality>1920x1080</quality>
		</video>
		<audio>
			<present>yes</present>
			<stereo>stereo</stereo>
		</audio>
		<previously-shown/>
	</programme>
	<programme channel="27" start="2020-11-04T18:00:00.000-0500" stop="2020-11-05T06:00:00.000-0500">
		<title lang="en">title of the series / program </title>
		<sub-title lang="en">title of the episode in case of episodic content</sub-title>
		<icon height="1080" src="https://example.images.net/image2.jpeg" width="1920"/>
		<desc lang="en">description of the program</desc>
		<category lang="en">program genre and subgenre</category>
		<language>English</language>
		<orig-language>English</orig-language>
		<date>20180517</date>
		<length units="minutes">720</length>
		<length units="seconds">43200</length>
		<episode-num system="xmltv_ns">0.0.0</episode-num>
		<episode-num system="onscreen">1</episode-num>
		<episode-num system="assetID">video_asset_id_2</episode-num>
		<credits/>
		<video>
			<present>yes</present>
			<colour>yes</colour>
			<quality>1920x1080</quality>
		</video>
		<audio>
			<present>yes</present>
			<stereo>stereo</stereo>
		</audio>
		<previously-shown/>
	</programme>
</tv>
```