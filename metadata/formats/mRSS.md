---
title: mRSS
description: 
published: true
date: 2021-01-11T16:47:20.041Z
tags: 
editor: markdown
---

## Amagi mRSS Format

mRSS Feed that can be used for ingesting metadata to Amagi systems are based on the following specifications:

1. [Media RSS (mRSS) Specification, Version 1.5.1](https://www.rssboard.org/media-rss)
2. [RSS 2.0 Specification](https://www.rssboard.org/rss-specification)

Field|Description
---|---|---
Channel|Details of the Channel: Last Build Date, description etc.,
title|Title of the feed
description|Description of the feed
lastBuildDate|Last time the feed was updated
**series>>**|Series items
**item>>**|Series item
guid|Unique id of the series
amagi:externalId|External Id
title|Title of the series
description|Description of the series
genre|Genre
media:keywords|List of keywords
media:category|List of categories
media:rating|Rating as per the rating agency
media:thumbnail|Thumbnail images
**episodes**>>|Episodes in a series
**item**>>|Episode item
guid|Unique id of episode
amagi:externalId|External Id such as TMS ID, EIDR ID etc.,
title|Title of the episode
description|Description of the episode
episodeNumber|Episode Number
seasonNumber|Season Number
media:thumbnail|Thumbnail image
closedCaptions|Closed Captions
media:subTitle|Subtitle of the Episode
**amagi:meta**>>|Amagi metadata used for specifying VOD platforms
dcterms:valid|“start” and “end” date for Licensing terms
**movies>>**|Movies
**item>>**|Movie item
guid|Unique id of the movie item
amagi:externalId|External Id such as TMS ID, EIDR ID etc.,
title|Title of the movie
description|Description of the movie
media:thumbnail|Thumbnail image
closedCaptions|Closed Captions
media:subTitle|Subtitles for the movie