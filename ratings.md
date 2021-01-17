---
title: Program Ratings
description: Detailed information on the accepted values for ratings
published: true
date: 2021-01-17T17:42:32.002Z
tags: 
editor: markdown
dateCreated: 2021-01-14T10:17:25.832Z
---

# Ratings


## TV Content Ratings - USA

The Television content rating system in the United States used by the television industry and the Federal Communications Commission (FCC).

| Rating| Type| Description|
|--|--|--|
|**TV-Y**|All Children| Intended for children ages 2 to 6 and is not designed or expected to frighten|
|**TV-Y7**|Directed to Older Children|Intended for children ages 7 and older. Best suited for children who know the difference between real life and make-believe. Contains mild fantasy or comedic violence. Some content could frighten younger children (under age 7).|
|**TV-Y7 FV**|Directed to Older Children - Fantasy Violence|Intended for older children. Contains fantasy violence more combative than TVY7 programs.|
|**TV-G**|General Audience|Intended for all ages. Contains little or no violence, no strong language and little or no sexual dialogue or situations.
|**TV-PG**|Parental Guidance Suggested|Intended for younger children in the company of an adult. Possibly contains some suggestive dialogue, infrequent coarse language, some sexual situations or some moderate violence.|
|**TV-14**|Parents Strongly Cautioned|Intended for children ages 14 and older in the company of an adult. Possibly contains intensely suggestive dialogue, strong coarse language, intense sexual situations or intense violence.|
|**TV-MA**|Mature Audience Only|Intended for adults and may be unsuitable for children under 17. Possibly contains crude indecent language, explicit sexual activity or graphic violence.|

## MPAA Film Ratings

| Rating| Type| Description|
|---|---|---|
|**G**|General Audiences|All ages admitted. Nothing that would offend parents for viewing by children.|
|**PG**|Parental Guidance Suggested|Some material may not be suitable for children. Parents urged to give "parental guidance". May contain some material parents might not like for their young children.|
|**PG-13**|Parents Strongly Cautioned|Some material may be inappropriate for children under 13. Parents are urged to be cautious. Some material may be inappropriate for pre-teenagers.|
|**R**|Restricted|Under 17 requires accompanying parent or adult guardian. Contains some adult material. Parents are urged to learn more about the film before taking their young children with them.|
|**NC-17**|Adults Only|No One 17 and Under Admitted. Clearly adult. Young children will not be admitted to watch the film.|


<p align="justify">
Many of the MVPDs prefer to receive rating information for the scheduled programs as part of the metadata. These ratings vary as per the rating bodies in various countries. Hence the platforms may require ratings to be specified according to the country in which the stream is broadcast.

This document captures the various specifications for the Ratings, including the allowed values for the various MVPDs to which these values are delivered.
</p>

## Content Ratings - MVPDs

The following sections describes the ratings information required by MVPDs.

### Roku

For Roku, the ratings are required to be provided for every program, which includes a rating value and a rating source. <br/>
The list below captures the allowed rating sources that are accepted by Roku.
|Allowed Value|Description|
|----|----|
|BBFC|British Board of Film Classification
|CHVRS|Canadian Home Video Rating System
|CPR|Canadian Parental Rating
|MPAA|Motion Picture Association of America
|USA_PR|USA Parental Rating
TV Ratings|TV Parental Guidelines

The list below captures the allowed rating values that can be delivered to Roku.
|||||||||||
|----|----|----|----|----|----|----|----|----|----|
12|12A|14+|14A|15|18|18+|18A|A|AA|
C|C8|E|G|NC17|NR|PG|PG13|R|R18|
TV14|TVG|TVMA|TVPG|TVY|TVY14|TVY7|U|Uc|UNRATED

### Samsung

<p align="justify">
The following table lists the content ratings available in countries where TV PLUS is currently
available. The content rating is a mandatory value for programs and optional for groups.
</p>

|Country|Available Ratings|
|-|-|
**South Korea**|
All|This rating is for programming that is appropriate for all ages
7|Children under 7 are prohibited from watching this program/film
12|Children under 12 are prohibited from watching this program/film.
15|Children under 15 are prohibited from watching this program/film.
19|Children under 19 are prohibited from watching this program/film.
**UK, France, Germany, Austria, Switzerland, Italy, Spain, Vietnam, Russia**|
3|Not recommended for audiences under 3.
4|Not recommended for audiences under 4.
5|Not recommended for audiences under 5.
6|Not recommended for audiences under 6.
7|Not recommended for audiences under 7.
8|Not recommended for audiences under 8.
9|Not recommended for audiences under 9.
10|Not recommended for audiences under 10.
11|Not recommended for audiences under 11.
12|Not recommended for audiences under 12.
13|Not recommended for audiences under 13.
14|Not recommended for audiences under 14.
15|Not recommended for audiences under 15.
16|Not recommended for audiences under 16.
17|Not recommended for audiences under 17.
18|Not recommended for audiences under 18.
**USA,Canada,Mexico**|
**TV Show**|
TV-Y|This program is designed to be appropriate for all children.
TV-Y7|This program is designed for children age 7 and above.
TV-G|This program is suitable for all ages.
TV-PG|This program contains material that parents may find unsuitable for younger children.
TV-14|This program contains some material that many parents would find unsuitable for children under 14 years of age.
TV-MA|This program is specifically designed to be viewed by adults and therefore may be unsuitable for children under 17. <br/> **Content descriptors**<br/>D: Suggestive dialogue<br/>L: Coarse or crude language<br/>S: Sexual situations<br/>V: Violence<br/>FV: Fantasy violence<br/>For example, content provider can feed format about 1 program like this. TV-14-V, TV-14-S, TV-14-L<br/>**TV Setting:**<br/> Samsung TV user can set conditional bans using checkboxes.
**Movie**|
G|(General Audiences): All ages are admitted.
PG|(Parental Guidance Suggested): Some material may not be suitable for children.
PG-13|(Parents Strongly Cautioned): Some material may be inappropriate for children under 13.
R|(Restricted): Under 17 requires an accompanying parent or adult/guardian.
NC-17|(Adults Only): No one 17 and under admitted.
**Canadian English Rating**|
C|Programming is intended for younger children under the age of 8 years.
C8+|Suitable for children ages 8+.
G|Suitable for general audiences..
PG|Parental guidance.
14+|Programming intended for viewers ages 14 and older.
18+|Programming intended for viewers ages 18 and older.
**Canadian French Rating**|
G|Programming is intended for younger children under the age of 8 years.
8 ans+|Appropriate for children 8 and up may contain with little violence, language, and little to no sexual situations
13 ans+|Suitable for children 13 and up and may contain with moderate violence, language, and some sexual situations..
16 ans+|Recommended for children over the age of 16 and may contain with strong violence, strong language, and strong sexual content.
18 ans+|Recommended to be viewed by adults and may contain extreme violence and graphic sexual content. It is mostly used for 18+ movies and pornography.
**Australia**|
G|General
PG|Parental guidance recommended.
M|Recommended for mature audiences.
MA|Not suitable for people under 15. Content is STRONG in impact
AV|Not suitable for people under 15. Violence is STRONG in impact
R|Not for anyone under 18
**Brazil**|
L|General Audiences
10|Not recommended for minors under ten
12|Not recommended for minors under twelve
14|Not recommended for minors under fourteen
16|Not recommended for minors under sixteen
18|Not recommended for minors under eighteen