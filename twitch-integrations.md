---
title: Amagi Twitch Integrations
description: Details the various Twitch integrations implemented in Amagi
published: true
date: 2021-05-10T16:09:15.696Z
tags: 
editor: undefined
dateCreated: 2021-02-18T06:34:42.729Z
---

# Twitch Integrations
This page captures the steps followed in build phase for the Twitch integration.
#### Pre-requisites
- Access to a production Twitch account from [Twitch](https://www.twitch.tv/). Instructions on how to create one is captured here.
- Access to a production Twitch developer account from [Developer Console](https://dev.twitch.tv/). Twitch account may be re-used.
- PUBSUB keys configured in the Amagi Cloudport player
- Definition of the criteria based on which the commercial is to be triggered (e.g. an asset id pattern, a given media type etc.,)

> Whenever the Twitch account password is changed, Amagi must be notified so that a new client secret can be generated, without which the ad triggers will start failing. 
{.is-warning}

#### Twitch Account Creation

1. Open [Twitch](https://www.twitch.tv/)

![6home.png](/twitch/6home.png)

2. Sign Up - Fill in the details and click on Sign Up

![sign_up.png](/twitch/sign_up.png)

3. Bot Check

![2puzzle.png](/twitch/2puzzle.png)

![3puzzle.png](/twitch/3puzzle.png)

4. OTP Confirmation

![4otpcode.png](/twitch/4otpcode.png)

![5confirmation.png](/twitch/5confirmation.png)

![6home.png](/twitch/6home.png)

5. Get stream key to pass to stream source

![7settings.png](/twitch/7settings.png)

![8settingshome.png](/twitch/8settingshome.png)

![9streamdetails.png](/twitch/9streamdetails.png)

6. Enable 2FA to allow application integration

![12twitchsecurity.png](/twitch/12twitchsecurity.png)

![13twitchsecurity2fa-1.png](/twitch/13twitchsecurity2fa-1.png)

![13twitchsecurity2fa-2.png](/twitch/13twitchsecurity2fa-2.png)

![13twitchsecurity2fa-3.png](/twitch/13twitchsecurity2fa-3.png)

![13twitchsecurity2fa-4.png](/twitch/13twitchsecurity2fa-4.png)

![13twitchsecurity2fa-5.png](/twitch/13twitchsecurity2fa-5.png)

![13twitchsecurity2fa-6.png](/twitch/13twitchsecurity2fa-6.png)

#### Setup Twitch developer account

![14devtwitchhome.png](/twitch/14devtwitchhome.png)

![15devtwitchhomedetails.png](/twitch/15devtwitchhomedetails.png)

![16register.png](/twitch/16register.png)

![17registered.png](/twitch/17registered.png)

![18manage.png](/twitch/18manage.png)

![19generatesecret.png](/twitch/19generatesecret.png)

![20confirmedsecret.png](/twitch/20confirmedsecret.png)

#### Trigger a commercial with Twitch API
Following are the steps to trigger a commercial using Twitch API.
- **Get Client ID (from the developer account)**
- **Get Client Secret (from the developer account)**
- **Get Authorization Code**
	*	Open the URL below in a browser
```
https://id.twitch.tv/oauth2/authorize?client_id=<client id here>&redirect_uri=http://localhost:3000/auth/twitch/callback&response_type=code&scope=channel%3Aedit%3Acommercial
```
![21authorizecommercial.png](/twitch/21authorizecommercial.png)
which will redirect to an URL like below after authorization
```
http://localhost:3000/auth/twitch/callback?code=7adev43ckvrb6wz2v6f8o60o621q45&scope=channel%3Aedit%3Acommercial
```
The value of "code" in the redirect URL is the authorization code that will be used (along with the client id and secret) for getting the access token.

- **Get Access Token**
	* Call API to get the access token
```
curl -X POST "https://id.twitch.tv/oauth2/token?client_id=<client id here>&client_secret=<client secret here>&code=<code here>&grant_type=authorization_code&redirect_uri=http://localhost:3000/auth/twitch/callback"
```
This request will provide a response containing an access token (that expires over time)  and a refresh token to allow a refresh of the access token.

```
{"access_token":"3v617a93syprft0wu8taq4wg1m8tnn","expires_in":13244,"refresh_token":"b8bxhiv83kqmfqm0tjeslzkltx60acu2uwz1idyw3dt9btex50","scope":["channel:edit:commercial"],"token_type":"bearer"}
```
- **Get Broadcaster ID**
	- Use the access token to retrieve the broadcaster id to use for commercial triggers
```
curl -X GET -H "Authorization: Bearer 3v617a93syprft0wu8taq4wg1m8tnn" -H "client-id: 9dr4hjyxb9nkbgeifjw0t72733enmh" "https://api.twitch.tv/helix/users?client_id=za9rds44ngoi5hpyassltfemevlbna&client_secret=fvu5mky6elu33rpr9aavi2xhhf9c0l"
```
This request will provide a response containing the broadcaster id.
```
{
	"data":	[
  {
  	"id":"642998111",
    "login":"amagitwitchtrial",
    "display_name":"amagitwitchtrial",
    "type":"",
    "broadcaster_type":"",
    "description":"",
    "profile_image_url":"https://static-cdn.jtvnw.net/user-default-pictures-uv/294c98b5-e34d-42cd-a8f0-140b72fba9b0-profile_image-300x300.png",
    "offline_image_url":"",
    "view_count":3,
    "created_at":"2021-01-29T14:40:09.551528Z"}
  ]
}
```
- **Trigger commercial**
	- Invoke the API
```
curl -X POST -H "Content-Type: application/json" -H "client-id: <client id here>" -H "Authorization: Bearer <access token here>" https://api.twitch.tv/helix/channels/commercial --data '{"broadcaster_id":"<broadcaster id here>","length":"<duration in seconds here>"}'
```
This request provides a response such as below
```
{
	"data":[
  	{
  		"message":"Starting commercial break. Keep in mind you are still live and not all viewers will receive a commercial.",
    	"length":125,
    	"retry_after":480
    }
  ]
}
```
### VennTV Integration
<p align="justify">
For VennTV, the video stream is delivered via Venn's Twitch account. Based on pubnub notifications from the Amagi player upon SCTE triggers, the API to trigger the commercial is invoked. 
</p>

[Postmaster](https://github.com/amagimedia/postmaster.git) has a pubnub listener that may trigger an action upon receipt of pubnub notifications (msg_type: "scte35", action: "triggered", splice_insert_type: "normal_on") from one or more configured pubnub topics. The duration value in the API call will be set as the value of "duration_sec" field.
</p>
Pubnub message on SCTE from the player looks like this:

```
{ 
	"customer": "shoutfactory-staging.amagi.tv", 
  "headend": "MST3K_101", 
  "msg_type": "scte35", 
  "common": { 
      "reconcile_id": "", 
      "timestamp": 1611912393.124, 
      "user_data": "", 
      "state": "state_normal", 
      "meta": "{}", 
      "cookie": "3827-50", 
      "unique_id": "1611912393388_176998" 
   }, 
   "action": "triggered", 
   "feed_code": "MST3K", 
   "data": { 
   		"event_id": 414, 
      "upid": 0, 
      "time_specified_flag": 0, 
      "pid": 500, 
      "duration_sec": 125.1, 
      "splice_insert_type": "normal_on", 
      "pts_90khz": "5300658162", 
      "command_type": "splice_insert"
    } 
}
```
### Shoutfactory Integration
<p align="justify">
For MST3K, the video stream is delivered by Amagi via MST3K's Twitch account. Based on pubnub notifications from the Amagi player upon the start of ad video assets (identified by the asset ids of pattern <i>Ad_*</i> ), the API to trigger the commercial is invoked. 

[Postmaster](https://github.com/amagimedia/postmaster.git) has a pubnub listener that may trigger an action upon receipt of pubnub notifications (msg_type: "video", action: "started") from one or more configured pubnub topics. The duration value in the API call will be set as the value of "duration_sec" field.
</p>
Pubnub message on SCTE from the player looks like this:

```
{ 
	"customer": "shoutfactory-staging.amagi.tv", 
  "headend": "MST3K_101", 
  "msg_type": "video", 
  "common": { 
  		"reconcile_id": "", 
      "timestamp": 1611912397.595, 
      "user_data": "", 
      "state": "state_normal", 
      "meta": "{}", 
      "cookie": "3827-49", 
      "unique_id": "1611912397739_177005" 
	}, 
  "action": "started", 
  "feed_code": "MST3K", 
  "data": { 
  		"asset_id": "Ad_MST3KSOL_WBRB_2minCountdown", 
      "segment_id": 1, 
      "som": "0", 
      "video_type": "avfile", 
      "duration_sec": 125.133, 
      "rescue_reason": "na" 
	} 
}
```