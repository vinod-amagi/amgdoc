---
title: Media RSS Samples
description: All supported media RSS samples
published: true
date: 2021-02-18T05:33:39.577Z
tags: 
editor: undefined
dateCreated: 2021-01-14T10:17:23.505Z
---

# Media RSS Version 1.0

```xml
<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:amagi="http://www.amagi.com/rss/namespace" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:media="http://search.yahoo.com/mrss/" version="2.0">
   <title><![CDATA[Title of the Feed]]></title>
   <description><![CDATA[Description of the feed]]></description>
   <generator>Generator</generator>
   <lastBuildDate>2016-09-07T09:42:31+00:00</lastBuildDate>
   <language>en</language>
   <version>1.0</version>
   <series>
      <item>
         <guid>guid-of-the-series</guid>
         <amagi:externalId provider="gracenote" type="tms">tms-id-of-the-series</amagi:externalId>
         <title><![CDATA[Title of the series]]></title>
         <description><![CDATA[Description of the series]]></description>
         <genre>genre-of-the-series</genre>
         <media:keywords>keyword-1, keyword-2, keyword-3</media:keywords>
         <media:category>category-1</media:category>
         <media:category>category-2</media:category>
         <media:rating scheme="urn:simple">adult</media:rating>
         <media:rating scheme="urn:mpaa">pg</media:rating>
         <media:rating scheme="urn:v-chip">tv-y7-fv</media:rating>
         <media:thumbnail width="4320" height="3240" url="url" />
         <media:thumbnail width="1920" height="1080" url="url" />
         <episodes>
            <item>
               <guid>guid-of-the-episode</guid>
               <amagi:externalId provider="gracenote" type="tms">tms-id-of-the-episode</amagi:externalId>
               <title><![CDATA[Title of the episode]]></title>
               <description><![CDATA[Description of the episode]]></description>
               <episodeNumber>1</episodeNumber>
               <seasonNumber>1</seasonNumber>
               <media:thumbnail width="1920" height="1080" url="url" />
               <amagi:meta>
                  <amagi:meta-value name="vod" value="false" />
                  <amagi:meta-list name="platforms">
                     <amagi:meta-value value="platform-1" />
                     <amagi:meta-value value="platform-2" />
                  </amagi:meta-list>
               </amagi:meta>
               <closedCaptions>url-of-closed-caption</closedCaptions>
               <media:subTitle type="text/srt" lang="en-us" href="http://www.example.org/subtitle.srt" />
               <media:subTitle type="text/vtt" lang="en-us" href="http://www.example.org/subtitle.vtt" />
               <dcterms:valid>start=2016-07-13T09:42:31+00:00;
                  end=2016-07-13T09:42:31+00:00;
                  scheme=W3C-DTF</dcterms:valid>
               <media:content url="url" duration="1320" medium="video" adBreakPoints="00:10:10.100,00:16:19.340,00:22:00.560" fps="23.97" />
            </item>
            <item>
               <guid>guid-of-the-episode</guid>
               <amagi:externalId provider="gracenote" type="tms">tms-id-of-the-episode</amagi:externalId>
               <title><![CDATA[Title of the episode]]></title>
               <description><![CDATA[Description of the episode]]></description>
               <episodeNumber>2</episodeNumber>
               <seasonNumber>1</seasonNumber>
               <media:thumbnail width="1920" height="1080" url="url" />
               <amagi:meta>
                  <amagi:meta-value name="vod" value="false" />
                  <amagi:meta-list name="platforms">
                     <amagi:meta-value value="platform-1" />
                     <amagi:meta-value value="platform-2" />
                  </amagi:meta-list>
               </amagi:meta>
               <closedCaptions>url-of-closed-caption</closedCaptions>
               <media:subTitle type="text/srt" lang="en-us" href="http://www.example.org/subtitle.srt" />
               <media:subTitle type="text/vtt" lang="en-us" href="http://www.example.org/subtitle.vtt" />
               <dcterms:valid>start=2016-07-13T09:42:31+00:00;
                  end=2016-07-13T09:42:31+00:00;
                  scheme=W3C-DTF</dcterms:valid>
               <media:content url="url" duration="1320" medium="video" adBreakPoints="00:10:10.100,00:16:19.340,00:22:00.560" fps="23.97" />
            </item>
         </episodes>
      </item>
      <item>
         <guid>guid-of-the-series</guid>
         <amagi:externalId provider="gracenote" type="tms">tms-id-of-the-series</amagi:externalId>
         <title><![CDATA[Title of the series]]></title>
         <description><![CDATA[Description of the series]]></description>
         <genre>genre-of-the-series</genre>
         <media:keywords>keyword-1, keyword-2, keyword-3</media:keywords>
         <media:category>category-1</media:category>
         <media:category>category-2</media:category>
         <media:rating scheme="urn:simple">adult</media:rating>
         <media:rating scheme="urn:mpaa">pg</media:rating>
         <media:rating scheme="urn:v-chip">tv-y7-fv</media:rating>
         <media:thumbnail width="4320" height="3240" url="https://truffle-assets.imgix.net/47f58167-apple-adulting-backdropwide.png" x-tm-type="itunesHighResWideImage" />
         <media:thumbnail width="1920" height="1080" url="https://truffle-assets.imgix.net/c0d13988-apple-adulting-16x9keyart.png" x-tm-type="itunes16x9TileImage" />
         <episodes>
            <item>
               <guid>guid-of-the-episode</guid>
               <amagi:externalId provider="gracenote" type="tms">tms-id-of-the-episode</amagi:externalId>
               <title><![CDATA[Title of the episode]]></title>
               <description><![CDATA[Description of the episode]]></description>
               <episodeNumber>1</episodeNumber>
               <seasonNumber>1</seasonNumber>
               <media:thumbnail width="1920" height="1080" url="url" />
               <amagi:meta>
                  <amagi:meta-value name="vod" value="false" />
                  <amagi:meta-list name="platforms">
                     <amagi:meta-value value="platform-1" />
                     <amagi:meta-value value="platform-2" />
                  </amagi:meta-list>
               </amagi:meta>
               <closedCaptions>url-of-closed-caption</closedCaptions>
               <media:subTitle type="text/srt" lang="en-us" href="http://www.example.org/subtitle.srt" />
               <media:subTitle type="text/vtt" lang="en-us" href="http://www.example.org/subtitle.vtt" />
               <dcterms:valid>start=2016-07-13T09:42:31+00:00;
                  end=2016-07-13T09:42:31+00:00;
                  scheme=W3C-DTF</dcterms:valid>
               <media:content url="url" duration="1320" medium="video" adBreakPoints="00:10:10.100,00:16:19.340,00:22:00.560" fps="23.97" />
            </item>
            <item>
               <guid>guid-of-the-episode</guid>
               <amagi:externalId provider="gracenote" type="tms">tms-id-of-the-episode</amagi:externalId>
               <title><![CDATA[Title of the episode]]></title>
               <description><![CDATA[Description of the episode]]></description>
               <episodeNumber>2</episodeNumber>
               <seasonNumber>1</seasonNumber>
               <media:thumbnail width="1920" height="1080" url="url" />
               <amagi:meta>
                  <amagi:meta-value name="vod" value="false" />
                  <amagi:meta-list name="platforms">
                     <amagi:meta-value value="platform-1" />
                     <amagi:meta-value value="platform-2" />
                  </amagi:meta-list>
               </amagi:meta>
               <closedCaptions>url-of-closed-caption</closedCaptions>
               <media:subTitle type="text/srt" lang="en-us" href="http://www.example.org/subtitle.srt" />
               <media:subTitle type="text/vtt" lang="en-us" href="http://www.example.org/subtitle.vtt" />
               <dcterms:valid>start=2016-07-13T09:42:31+00:00;
                  end=2016-07-13T09:42:31+00:00;
                  scheme=W3C-DTF</dcterms:valid>
               <media:content url="url" duration="1320" medium="video" adBreakPoints="00:10:10.100,00:16:19.340,00:22:00.560" fps="23.97" />
            </item>
         </episodes>
      </item>
   </series>
   <movies>
      <item>
         <guid>guid-of-the-movie</guid>
         <amagi:externalId provider="gracenote" type="tms">tms-id-of-the-movie</amagi:externalId>
         <title><![CDATA[Title of the movie]]></title>
         <description><![CDATA[Description of the movie]]></description>
         <genre>genre-of-the-movie</genre>
         <media:keywords>keyword-1, keyword-2, keyword-3</media:keywords>
         <media:category>category-1</media:category>
         <media:category>category-2</media:category>
         <media:rating scheme="urn:simple">adult</media:rating>
         <media:rating scheme="urn:mpaa">pg</media:rating>
         <media:rating scheme="urn:v-chip">tv-y7-fv</media:rating>
         <media:thumbnail width="4320" height="3240" url="url" />
         <media:thumbnail width="1920" height="1080" url="url" />
         <amagi:meta>
            <amagi:meta-value name="vod" value="false" />
            <amagi:meta-list name="platforms">
               <amagi:meta-value value="platform-1" />
               <amagi:meta-value value="platform-2" />
            </amagi:meta-list>
         </amagi:meta>
         <closedCaptions>url-of-closed-caption</closedCaptions>
         <media:subTitle type="text/srt" lang="en-us" href="http://www.example.org/subtitle.srt" />
         <media:subTitle type="text/vtt" lang="en-us" href="http://www.example.org/subtitle.vtt" />
         <dcterms:valid>start=2016-07-13T09:42:31+00:00;
                  end=2016-07-13T09:42:31+00:00;
                  scheme=W3C-DTF</dcterms:valid>
         <media:content url="url" duration="1320" medium="video" adBreakPoints="00:10:10.100,00:16:19.340,00:22:00.560" fps="23.97" />
      </item>
      <item>
         <guid>guid-of-the-movie</guid>
         <amagi:externalId provider="gracenote" type="tms">tms-id-of-the-movie</amagi:externalId>
         <title><![CDATA[Title of the movie]]></title>
         <description><![CDATA[Description of the movie]]></description>
         <genre>genre-of-the-movie</genre>
         <media:keywords>keyword-1, keyword-2, keyword-3</media:keywords>
         <media:category>category-1</media:category>
         <media:category>category-2</media:category>
         <media:thumbnail width="4320" height="3240" url="url" />
         <media:thumbnail width="1920" height="1080" url="url" />
         <amagi:meta>
            <amagi:meta-value name="vod" value="false" />
            <amagi:meta-list name="platforms">
               <amagi:meta-value value="platform-1" />
               <amagi:meta-value value="platform-2" />
            </amagi:meta-list>
         </amagi:meta>
         <closedCaptions>url-of-closed-caption</closedCaptions>
         <media:subTitle type="text/srt" lang="en-us" href="http://www.example.org/subtitle.srt" />
         <media:subTitle type="text/vtt" lang="en-us" href="http://www.example.org/subtitle.vtt" />
         <dcterms:valid>start=2016-07-13T09:42:31+00:00;
                  end=2016-07-13T09:42:31+00:00;
                  scheme=W3C-DTF</dcterms:valid>
         <media:content url="url" duration="1320" medium="video" adBreakPoints="00:10:10.100,00:16:19.340,00:22:00.560" fps="23.97" />
      </item>
   </movies>
</rss>
```

