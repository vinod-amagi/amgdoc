---
title: EPG API for Content Analytics
description: Specifications of the EPG API for Content Analytics
published: true
date: 2021-03-19T10:40:13.574Z
tags: 
editor: markdown
dateCreated: 2021-03-19T10:40:13.574Z
---

# EPG API for Content Analytics

For content analytics, Amagi EPG system exposes an API that can be  

https://amgepg.amagi.tv/v1/programs/platform?token=1W6xKg2kwVh6yeXwLAFZW8zJCa6&customerID=290&platform=thunderstorm&startTime=2021-01-29T00:00:00Z&endTime=2021-01-29T23:59:59Z

Field|Description|Mandatory|Format|Example
--|--|--|--|--
ID|Content id (Cloudport asset id / External id / Program id)|Y|||
Start Time|Start time of the program in UTC|Y|YYYY-mm-ddTHH:MM:SSZ|2021-01-29T00:00:00Z
End Time|End time of the program in UTC|Y|YYYY-mm-ddTHH:MM:SSZ|2021-01-29T00:00:00Z
Duration|Duration of the program in seconds|Y|||
Name|Program name|N|||
Type|Program type|N|||program
Series Title|Title of the series in case of episodic contents|N|||
Genres|Program genres|N|||
Studio|Studio id/name as provided by content partner|N|||
Language|Program language|N|||
Rating|Program ratings|N|A key value pair of rating body and value|"USA PR": "tv-g"
AdditionalInfo|Additional information as KVP for extension|N|||

```
{
	"schedule": [
		{
    "start-time": "",
    "end-time": "",
    "id": "",
    "genres": [],
    "type": "",
    "name": "",
    "series-title": "",
    "studio": "",
    "langauage": "",
    "duration": "",
    "rating": {
      "body": "value"
    },
    additional-info: {
      "": ""
    }
  ]
}
```



