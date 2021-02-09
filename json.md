---
title: JSON
description: JSON Sample
published: true
date: 2021-01-16T14:06:13.642Z
tags: 
editor: undefined
dateCreated: 2021-01-16T14:06:11.964Z
---

# Episode 

```json
{
   "provider": "The channel name",
   "type": "tv_episode",
   "updatedAt": "2020-10-04T23:30:24Z",
   "version" : "1.0",
   "series": [
      {
         "id": "series-id",
         "seriesName": "Series Name",
         "longDescription": "A lengthy description about series",
         "shortDescription": "Short description about the series",
         "createdAt": "2020-10-04T23:30:24Z",
         "externalIDs": [
            {
               "id": "tms-id-from-gracenote",
               "provider": "gracenote"
            },
            {
               "id": "is-from-provider-1",
               "provider": "provider-1"
            }
         ],
         "images": [
            {
               "filePath": "https://image-url",
               "height": "height-in-pixels",
               "width": "width-in-pixels",
               "type": [
                  "type-name"
               ]
            },
            {
               "filePath": "https://image-url",
               "height": "height-in-pixels",
               "width": "width-in-pixels",
               "type": [
                  "type-name-1"
               ]
            }
         ],
         "metadata": {
            "genre": [
               "genre-1",
               "genre-2"
            ],
            "category": [
               "category-1",
               "category-2"
            ],
            "ratings": [
               {
                  "ratingValue": "TV-14",
                  "ratingBody": "USAP",
                  "ratingReason": "Reason"
               }
            ]
         },
         "seasons": [
            {
               "episodes": [
                  {
                     "createdAt": "2020-10-04T23:30:24Z",
                     "episodeName": "Episode name",
                     "episodeNumber": "3",
                     "longDescription": "Long description about episode",
                     "shortDescription": "Short description about episode",
                     "id": "episode-id",
                     "assets": [
                        {
                           "adBreaks": [
                              "HH:MM:SS.msec",
                              "00:15:29.310"
                           ],
                           "durationInSeconds": "1320",
                           "filePath": "https://video-url",
                           "frameRate": "29.97",
                           "createdAt": "2020-10-04T23:30:24Z"
                        }
                     ],
                     "captions": [
                        {
                           "filePath": "https://captions-url",
                           "createdAt": "2020-10-04T23:30:24Z"
                        }
                     ],
                     "subtitles": [
                        {
                           "filePath": "https://subtitles-url",
                           "createdAt": "2020-10-04T23:30:24Z"
                        }
                     ],
                     "externalIDs": [
                        {
                           "id": "tms-id-from-gracenote",
                           "provider": "gracenote"
                        },
                        {
                           "id": "is-from-provider-1",
                           "provider": "provider-1"
                        }
                     ],
                     "images": [
                        {
                           "filePath": "https://image-url",
                           "height": "height-in-pixels",
                           "width": "width-in-pixels"
                        }
                     ],
                  }
               ],
               "seasonNumber": "1"
            }
         ]
      }
   ]
}
```

## Movie

```json
{
   "provider": "channel name",
   "type": "movie",
   "updatedAt": "2020-10-04T23:10:44Z",
   "version" : "1.0",
   "movie": [
      {
         "id": "movie-id",
         "title": "Title of the movie",
         "releaseDate": "1992-01-31",
         "longDescription": "Long description",
         "shortDescription": "Short description",
         "createdAt": "2020-10-04T23:10:44Z",
         "assets": [
            {
               "duration": "7114.048",
               "filePath": "https://video-url",
               "frameRate": "29.97",
               "createdAt": "2020-10-04T23:30:24Z",
               "adBreaks": [
                  "HH:MM:SS.msec",
                  "00:15:29.310"
               ]
            }
         ],
         "captions": [
            {
               "filePath": "https://s3.amazonaws.com/en-us/closed-captions.scc",
               "createdAt": "2020-10-04T23:30:24Z"
            }
         ],
         "subtitles": [
            {
               "filePath": "https://s3.amazonaws.com/en-us/closed-captions.srt",
               "createdAt": "2020-10-04T23:30:24Z"
            }
         ],
         "images": [
            {
               "filePath": "https://image-url",
               "height": "height-in-pixels",
               "width": "width-in-pixels",
               "type": [
                  "type-name"
               ]
            },
            {
               "filePath": "https://image-url",
               "height": "height-in-pixels",
               "width": "width-in-pixels",
               "type": [
                  "type-name-1"
               ]
            }
         ],
         "metadata": {
            "credits": [
               {
                  "names": [
                     "Name1",
                     "Name2"
                  ],
                  "role": "director"
               },
               {
                  "names": [
                     "Name1",
                     "Name2"
                  ],
                  "role": "cast"
               }
            ],
            "genre": [
               "Comedy",
               " Romance",
               " Sports"
            ],
            "category": [
               "category-1",
               "category-2"
            ],
            "ratings": [
               {
                  "ratingValue": "TV-14",
                  "ratingBody": "USAP",
                  "ratingReason": "Reason"
               }
            ]
         }
      }
   ]
}
```