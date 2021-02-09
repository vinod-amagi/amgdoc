---
title: XML Formats
description: Supported XML Formats
published: true
date: 2021-01-14T10:17:36.871Z
tags: 
editor: undefined
dateCreated: 2021-01-14T10:17:35.248Z
---

## Episode XML

```xml
<?xml version="1.0" encoding="UTF-8"?>
<root>
   <provider>The channel name</provider>
   <type>tv_episode</type>
   <version>1.0</version>
   <updatedAt>2020-10-04T23:30:24Z</updatedAt>
   <series>
      <id>series-id</id>
      <seriesName>Series Name</seriesName>
      <longDescription>A lengthy description about series</longDescription>
      <shortDescription>Short description about the series</shortDescription>
      <createdAt>2020-10-04T23:30:24Z</createdAt>
      <externalIDs>
         <id>tms-id-from-gracenote</id>
         <provider>gracenote</provider>
      </externalIDs>
      <externalIDs>
         <id>is-from-provider-1</id>
         <provider>provider-1</provider>
      </externalIDs>
      <images>
         <filePath>https://image-url</filePath>
         <height>height-in-pixels</height>
         <width>width-in-pixels</width>
         <type>type-name</type>
      </images>
      <images>
         <filePath>https://image-url</filePath>
         <height>height-in-pixels</height>
         <width>width-in-pixels</width>
         <type>type-name-1</type>
      </images>
      <metadata>
         <genre>genre-1</genre>
         <genre>genre-2</genre>
         <category>category-1</category>
         <category>category-2</category>
         <ratings>
            <ratingValue>TV-14</ratingValue>
            <ratingBody>USAP</ratingBody>
            <ratingReason>Reason</ratingReason>
         </ratings>
      </metadata>
      <season>
         <episode>
            <createdAt>2020-10-04T23:30:24Z</createdAt>
            <episodeName>Episode name</episodeName>
            <episodeNumber>3</episodeNumber>
            <longDescription>Long description about episode</longDescription>
            <shortDescription>Short description about episode</shortDescription>
            <id>episode-id</id>
            <assets>
               <adBreaks>HH:MM:SS.msec</adBreaks>
               <adBreaks>00:15:29.310</adBreaks>
               <durationInSeconds>1320</durationInSeconds>
               <filePath>https://video-url</filePath>
               <frameRate>29.97</frameRate>
               <createdAt>2020-10-04T23:30:24Z</createdAt>
            </assets>
            <captions>
               <filePath>https://captions-url</filePath>
               <createdAt>2020-10-04T23:30:24Z</createdAt>
            </captions>
            <subtitles>
               <filePath>https://subtitles-url</filePath>
               <createdAt>2020-10-04T23:30:24Z</createdAt>
            </subtitles>
            <externalIDs>
               <id>tms-id-from-gracenote</id>
               <provider>gracenote</provider>
            </externalIDs>
            <externalIDs>
               <id>is-from-provider-1</id>
               <provider>provider-1</provider>
            </externalIDs>
            <images>
               <filePath>https://image-url</filePath>
               <height>height-in-pixels</height>
               <width>width-in-pixels</width>
            </images>
         </episode>
         <seasonNumber>1</seasonNumber>
      </season>
   </series>
</root>
```

## Movie XML

```xml
<?xml version="1.0" encoding="UTF-8"?>
<root>
   <provider>channel name</provider>
   <type>movie</type>
   <version>1.0</version>
   <updatedAt>2020-10-04T23:10:44Z</updatedAt>
   <movie>
      <id>movie-id</id>
      <title>Title of the movie</title>
      <releaseDate>1992-01-31</releaseDate>
      <longDescription>Long description</longDescription>
      <shortDescription>Short description</shortDescription>
      <createdAt>2020-10-04T23:10:44Z</createdAt>
      <assets>
         <duration>7114.048</duration>
         <filePath>https://video-url</filePath>
         <frameRate>29.97</frameRate>
         <createdAt>2020-10-04T23:30:24Z</createdAt>
         <adBreaks>HH:MM:SS.msec</adBreaks>
         <adBreaks>00:15:29.310</adBreaks>
      </assets>
      <captions>
         <filePath>https://s3.amazonaws.com/en-us/MGM_CuttingEdgeThe_1992_Feature_HD_4ch.scc</filePath>
         <createdAt>2020-10-04T23:30:24Z</createdAt>
      </captions>
      <subtitles>
         <filePath>https://s3.amazonaws.com/en-us/MGM_CuttingEdgeThe_1992_Feature_HD_4ch.scc</filePath>
         <createdAt>2020-10-04T23:30:24Z</createdAt>
      </subtitles>
      <images>
         <filePath>https://image-url</filePath>
         <height>height-in-pixels</height>
         <width>width-in-pixels</width>
         <type>type-name</type>
      </images>
      <images>
         <filePath>https://image-url</filePath>
         <height>height-in-pixels</height>
         <width>width-in-pixels</width>
         <type>type-name-1</type>
      </images>
      <metadata>
         <credits>
            <names>Name1</names>
            <names>Name2</names>
            <role>director</role>
         </credits>
         <credits>
            <names>Name1</names>
            <names>Name2</names>
            <role>cast</role>
         </credits>
         <genre>Comedy</genre>
         <genre>Romance</genre>
         <genre>Sports</genre>
         <category>category-1</category>
         <category>category-2</category>
         <ratings>
            <ratingValue>TV-14</ratingValue>
            <ratingBody>USAP</ratingBody>
            <ratingReason>Reason</ratingReason>
         </ratings>
      </metadata>
   </movie>
</root>
```