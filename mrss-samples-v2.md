---
title: mRSS V2.0
description: 
published: true
date: 2021-06-10T06:41:45.718Z
tags: 
editor: markdown
dateCreated: 2021-06-09T18:16:50.280Z
---

# mRSS Version 2.0

```xml
<rss xmlns:amagi="http://www.amagi.com/rss/namespace" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:media="https://www.rssboard.org/media-rss/" version="2.0">
    <title>
        <![CDATA[ Title of the Feed ]]>
    </title>
    <description>
        <![CDATA[ Description of the feed ]]>
    </description>
    <generator>Generator</generator>
    <lastBuildDate>2016-09-07T09:42:31+00:00</lastBuildDate>
    <language>en</language>
    <version>2.0</version>
    <series>
        <item>
            <guid>guid-of-the-series</guid>
            <amagi:externalId provider="gracenote" type="tms">tms-id-of-the-series</amagi:externalId>
            <title>
                <![CDATA[ Title of the series ]]>
            </title>
            <description>
                <![CDATA[ Description of the series ]]>
            </description>
            <short-description>
                <![CDATA[ Short description of the series ]]>
            </short-description>
            <long-description>
                <![CDATA[ Long description of the series ]]>
            </long-description>
            <genre>genre-of-the-series</genre>
            <media:keywords>keyword-1, keyword-2, keyword-3</media:keywords>
            <media:category>category-1</media:category>
            <media:category>category-2</media:category>
          	<media:rating scheme="urn:simple">adult</media:rating>
						<media:rating scheme="urn:icra">r (cz 1 lz 1 nz 1 oz 1 vz 1</media:rating>
						<media:rating scheme="urn:mpaa">pg</media:rating>
						<media:rating scheme="urn:v-chip">tv-y7-fv</media:rating>
            <media:rating scheme="urn:simple">adult</media:rating>
            <media:rating scheme="urn:mpaa">pg</media:rating>
            <media:rating scheme="urn:v-chip">tv-y7-fv</media:rating>
            <media:group>
                <media:thumbnail url="url-of-image-media" width="2048" height="1536">
                    <media:category>media-category-1</media:category>
                </media:thumbnail>
                <media:thumbnail url="url-of-image-media" width="1980" height="1080">
                    <media:category>media-category-2</media:category>
                </media:thumbnail>
                <media:content url="url" type="mime-type-1" name="name-1" duration="1320" medium="video" adBreakPoints="00:10:10.100,00:16:19.340,00:22:00.560" fps="23.97" />
                <closedCaptions name="name-1">url-of-closed-caption</closedCaptions>
                <media:subTitle type="text/srt" name="name-1" lang="en-us" href="http://www.example.org/subtitle.srt" />
                <media:subTitle type="text/vtt" name="name-1" lang="en-us" href="http://www.example.org/subtitle.vtt" />
            </media:group>
            <amagi:meta>
                <amagi:meta-value name="custom-meta-1" value="custom-meta-value-1" />
                <amagi:meta-value name="custom-meta-2" value="custom-meta-value-2" />
                <amagi:meta-list name="custom-meta-list">
                    <amagi:meta-value value="custom-meta-list-item-1" />
                    <amagi:meta-value value="custom-meta-list-item-2" />
                </amagi:meta-list>
            </amagi:meta>
            <amagi:platform name="platform-1">
                <dcterms:valid>start=2016-07-13T09:42:31+00:00; end=2016-07-13T09:42:31+00:00; scheme=W3C-DTF</dcterms:valid>
            </amagi:platform>
            <amagi:platform name="platform-2">
                <dcterms:valid>start=2016-07-13T09:42:31+00:00; end=2016-07-13T09:42:31+00:00; scheme=W3C-DTF</dcterms:valid>
            </amagi:platform>
            <dcterms:valid>start=2016-07-13T09:42:31+00:00; end=2016-07-13T09:42:31+00:00; scheme=W3C-DTF</dcterms:valid>
            <seasons>
                <item>
                    <guid>guid-of-the-episode</guid>
                    <amagi:externalId provider="gracenote" type="tms">tms-id-of-the-episode</amagi:externalId>
                    <title>
                        <![CDATA[ Title of the season ]]>
                    </title>
                    <description>
                        <![CDATA[ Description of the season ]]>
                    </description>
                    <short-description>
                        <![CDATA[ Short description of the season ]]>
                    </short-description>
                    <long-description>
                        <![CDATA[ Long description of the season ]]>
                    </long-description>
                    <seasonNumber>1</seasonNumber>
                    <media:group>
                        <media:thumbnail url="url-of-image-media" width="2048" height="1536">
                            <media:category>media-category-1</media:category>
                        </media:thumbnail>
                        <media:thumbnail url="url-of-image-media" width="1980" height="1080">
                            <media:category>media-category-2</media:category>
                        </media:thumbnail>
                        <media:content url="url" type="mime-type-1" name="name-1" duration="1320" medium="video" adBreakPoints="00:10:10.100,00:16:19.340,00:22:00.560" fps="23.97" />
                        <closedCaptions name="name-1">url-of-closed-caption</closedCaptions>
                        <media:subTitle type="text/srt" name="name-1" lang="en-us" href="http://www.example.org/subtitle.srt" />
                        <media:subTitle type="text/vtt" name="name-1" lang="en-us" href="http://www.example.org/subtitle.vtt" />
                    </media:group>

                    <episodes>
                        <item>
                            <guid>guid-of-the-episode</guid>
                            <amagi:externalId provider="gracenote" type="tms">tms-id-of-the-episode</amagi:externalId>
                            <title>
                                <![CDATA[ Title of the episode ]]>
                            </title>
                            <description>
                                <![CDATA[ Description of the episode ]]>
                            </description>
                            <short-description>
                                <![CDATA[ Short description of the episode ]]>
                            </short-description>
                            <long-description>
                                <![CDATA[ Long description of the episode ]]>
                            </long-description>
                            <episodeNumber>1</episodeNumber>
                            <media:thumbnail width="1920" height="1080" url="url" />
                            <amagi:meta>
                                <amagi:meta-value name="custom-meta-1" value="custom-meta-value-1" />
                                <amagi:meta-value name="custom-meta-2" value="custom-meta-value-2" />
                                <amagi:meta-list name="custom-meta-list">
                                    <amagi:meta-value value="custom-meta-list-item-1" />
                                    <amagi:meta-value value="custom-meta-list-item-2" />
                                </amagi:meta-list>
                            </amagi:meta>
                            <amagi:platform name="platform-1">
                                <dcterms:valid>start=2016-07-13T09:42:31+00:00; end=2016-07-13T09:42:31+00:00; scheme=W3C-DTF</dcterms:valid>
                            </amagi:platform>
                            <amagi:platform name="platform-2">
                                <dcterms:valid>start=2016-07-13T09:42:31+00:00; end=2016-07-13T09:42:31+00:00; scheme=W3C-DTF</dcterms:valid>
                            </amagi:platform>
                            <dcterms:valid>start=2016-07-13T09:42:31+00:00; end=2016-07-13T09:42:31+00:00; scheme=W3C-DTF</dcterms:valid>
                            <media:group>
                                <media:thumbnail url="url-of-image-media" width="2048" height="1536">
                                    <media:category>media-category-1</media:category>
                                </media:thumbnail>
                                <media:thumbnail url="url-of-image-media" width="1980" height="1080">
                                    <media:category>media-category-2</media:category>
                                </media:thumbnail>
                                <media:content url="url" type="mime-type-1" name="name-1" duration="1320" medium="video" adBreakPoints="00:10:10.100,00:16:19.340,00:22:00.560" fps="23.97" />
                                <media:content url="url" type="mime-type-2" name="name-1" duration="1320" medium="video" adBreakPoints="00:10:10.100,00:16:19.340,00:22:00.560" fps="23.97" />
                                <media:content url="url" type="mime-type-1" name="name-2" duration="1300" medium="video" adBreakPoints="00:10:10.100,00:16:19.340,00:22:00.560" fps="23.97" />
                                <media:content url="url" type="mime-type-2" name="name-2" duration="1300" medium="video" adBreakPoints="00:10:10.100,00:16:19.340,00:22:00.560" fps="23.97" />
                                <closedCaptions name="name-1">url-of-closed-caption</closedCaptions>
                                <closedCaptions name="name-2">url-of-closed-caption</closedCaptions>
                                <media:subTitle type="text/srt" name="name-1" lang="en-us" href="http://www.example.org/subtitle.srt" />
                                <media:subTitle type="text/vtt" name="name-1" lang="en-us" href="http://www.example.org/subtitle.vtt" />
                                <media:subTitle type="text/srt" name="name-2" lang="en-us" href="http://www.example.org/subtitle.srt" />
                                <media:subTitle type="text/vtt" name="name-2" lang="en-us" href="http://www.example.org/subtitle.vtt" />
                            </media:group>
                        </item>
                    </episodes>
                </item>
            </seasons>
        </item>
    </series>
    <standalone>
        <item>
            <guid>guid-of-the-movie</guid>
            <amagi:externalId provider="gracenote" type="tms">tms-id-of-the-movie</amagi:externalId>
            <title>
                <![CDATA[ Title of the standalone content ]]>
            </title>
            <description>
                <![CDATA[ Description of the standalone content ]]>
            </description>
            <short-description>
                <![CDATA[ Short description of the standalone content ]]>
            </short-description>
            <long-description>
                <![CDATA[ Long description of the standalone content ]]>
            </long-description>
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
                <amagi:meta-value name="custom-meta-1" value="custom-meta-value-1" />
                <amagi:meta-value name="custom-meta-2" value="custom-meta-value-2" />
                <amagi:meta-list name="custom-meta-list">
                    <amagi:meta-value value="custom-meta-list-item-1" />
                    <amagi:meta-value value="custom-meta-list-item-2" />
                </amagi:meta-list>
            </amagi:meta>
            <amagi:platform name="platform-1">
                <dcterms:valid>start=2016-07-13T09:42:31+00:00; end=2016-07-13T09:42:31+00:00; scheme=W3C-DTF</dcterms:valid>
            </amagi:platform>
            <amagi:platform name="platform-2">
                <dcterms:valid>start=2016-07-13T09:42:31+00:00; end=2016-07-13T09:42:31+00:00; scheme=W3C-DTF</dcterms:valid>
            </amagi:platform>
            <dcterms:valid>start=2016-07-13T09:42:31+00:00; end=2016-07-13T09:42:31+00:00; scheme=W3C-DTF</dcterms:valid>
            <media:group>
                <media:thumbnail url="url-of-image-media" width="2048" height="1536">
                    <media:category>media-category-1</media:category>
                </media:thumbnail>
                <media:thumbnail url="url-of-image-media" width="1980" height="1080">
                    <media:category>media-category-2</media:category>
                </media:thumbnail>
                <media:content url="url" type="mime-type-1" name="name-1" duration="1320" medium="video" adBreakPoints="00:10:10.100,00:16:19.340,00:22:00.560" fps="23.97" />
                <media:content url="url" type="mime-type-2" name="name-1" duration="1320" medium="video" adBreakPoints="00:10:10.100,00:16:19.340,00:22:00.560" fps="23.97" />
                <media:content url="url" type="mime-type-1" name="name-2" duration="1300" medium="video" adBreakPoints="00:10:10.100,00:16:19.340,00:22:00.560" fps="23.97" />
                <media:content url="url" type="mime-type-2" name="name-2" duration="1300" medium="video" adBreakPoints="00:10:10.100,00:16:19.340,00:22:00.560" fps="23.97" />
                <closedCaptions name="name-1">url-of-closed-caption</closedCaptions>
                <closedCaptions name="name-2">url-of-closed-caption</closedCaptions>
                <media:subTitle type="text/srt" category="name-1" lang="en-us" href="http://www.example.org/subtitle.srt" />
                <media:subTitle type="text/vtt" category="name-1" lang="en-us" href="http://www.example.org/subtitle.vtt" />
                <media:subTitle type="text/srt" category="name-2" lang="en-us" href="http://www.example.org/subtitle.srt" />
                <media:subTitle type="text/vtt" category="name-2" lang="en-us" href="http://www.example.org/subtitle.vtt" />
            </media:group>
        </item>
    </standalone>
</rss>
```