---
title: ESFS
description: 
published: true
date: 2021-02-26T08:46:48.182Z
tags: 
editor: markdown
dateCreated: 2021-02-26T08:46:48.182Z
---

# 1. Introduction {#1-introduction}

Elementary Stream File System (ESFS), also known as ESDB, is a methodology of segmenting files into smaller chunks (segments) and storing those ready for playout. The segmenting is done on the assets post downloading to the player by DA (Device Agent). The player shall continue to support native file formats in addition to ESFS.

The segmenting can be done on the following file formats (all file formats natively supported by the player to play out) in media, rescue & audio:



1. MXF
2. TS
3. WAV

Please note that this is not applicable to graphics or captions files.


# 2. Terminology {#2-terminology}



1. **ESFS** - Elementary Stream File System, where the files are stored as demuxed elementary stream chunks, rather than as a packaged file.
2. **ESDB** - Elementary Stream Database - another name of ESFS.
3. **Segment** - a segment is a small elementary stream chunk of the asset
4. **DA** - Device Agent - this is the module which manages the file download from S3 to the player and acknowledges back to BLIP of the same. It also manages purge as and when required, according to the set rules.
5. **Demux** - Demuxing is the process of pulling apart the video & audio streams of any media file.


# 3. Use Cases {#3-use-cases}


## 3.1. Primary Benefits {#3-1-primary-benefits}

The primary benefits of this format are:



1. Better caching mechanism
2. Resulting in overcoming of read latency problems with EBS (reduces player crashes)
3. Quicker seek to any frame in the asset, allowing lesser delay between PLM (Playlist Manager) command and the actual play time.
4. Less buffering requirement, resulting in lesser delay.
5. Time to first byte is lower.
6. Longer files can be supported (tested with 9 hours long file).


## 3.2. FAQs {#3-2-faqs}



1. Can the player play either MXF/TS/WAV files or ESFS, depending on whichever file format is available.
    1. Yes. If ESFS files are present, the player shall look to play the segmented file (ESFS). If not found, it will look for the full file and play that if available. Please note that this shall happen regardless of whether ESFS configuration is currently enabled or not.
2. Will the ESFS files be purged?
    2. The purge/delete behaviour of DA shall remain the same for ESFS files.
3. Can I enable this mode in existing deployment.
    3. Yes you can. However, it’s highly recommended to bring up a new player and use that. Please refer to the deployment section for more information.
4. Shall there be any effect on Audio binding and Audio shuffling?
    4. No. Audio binding and audio shuffling should continue to work.
5. Do I need to reprocess the assets after enabling ESFS?
    5. No. Reprocessing of the assets are not required. Please refer to the deployment section for more information.
6. Will the existing files in the player get converted to ESFS format on enabling the configuration?
    6. No.


# 


# 4. Versions & Configurations {#4-versions-&-configurations}


## 4.1. Versions {#4-1-versions}

This is dependent on BLIP 7.5.0+ directly. BLIP 7.5.0+ might be dependent on others.


<table>
  <tr>
   <td>1.
   </td>
   <td><strong>BLIP</strong>
   </td>
   <td><strong>7.5.0+ (7.5.6)</strong>
   </td>
  </tr>
  <tr>
   <td>2.
   </td>
   <td><strong>Player</strong>
   </td>
   <td><strong>4.17.0+</strong>
   </td>
  </tr>
  <tr>
   <td>3.
   </td>
   <td><strong>Nexus</strong>
   </td>
   <td><strong>6.4.6+</strong>
   </td>
  </tr>
  <tr>
   <td>4.
   </td>
   <td><strong>Vyuha</strong>
   </td>
   <td><strong>1.4.69+</strong>
   </td>
  </tr>
</table>



## 4.2. Configurations {#4-2-configurations}

To enable ESFS, following player configuration needs to be updated in player.ini.


```
enable_esdb = 1
```


To disable ESFS:


```
enable_esdb = 0
```



# 


# 5. Procedure - How To’s {#5-procedure-how-to’s}


## 5.1. Deployment {#5-1-deployment}


    Once ESFS is enabled, it should NOT be disabled. Bring up another player if required otherwise.


### 5.1.1. Approach 1: Parallel player {#5-1-1-approach-1-parallel-player}

It is recommended to deploy a new player if ESFS is enabled (and never disable it again). The procedure would be:



1. Bring up a new player.
2. Enable ESFS in the player.
3. Associate the player with BLIP as a secondary player.
4. Push the assets to be downloaded to the player by DA.
    1. The downloaded assets will be segmented and saved as ESFS.
5. Once the player starts playing out, switch the player to be the primary player.
6. Disable the existing player.


### 5.1.2. Approach 2: With downtime {#5-1-2-approach-2-with-downtime}



1. Bring the player down (disconnect the output stream)
2. Enable ESFS, mark this player as a new headend.
3. Delete the existing assets in the player (/mnt/ops/avfiles etc.)
4. Re-download the files to the player. 
    1. The downloaded assets will be segmented and saved as ESFS.
5. Bring up the player.

What happens if ESFS is enabled in the existing player:



1. Old files will remain in avfiles and new files will be downloaded to avfiles_esdb. 
2. This shall result in two things: 
    1. First, a confusion on the source of the playing files. 
    2. Second, all the benefits of ESFS will be compromised, resulting in no improvement in stability and such.


## 5.2. Workflow & Location {#5-2-workflow-&-location}


### 5.2.1. Workflow {#5-2-1-workflow}

Initially, the files are downloaded from S3 to avfiles_to_be_demuxed folder by Device Agent (DA). ESFS processing is then done on the files automatically and then, post processing, they are copied to avfiles_esdb. The files are demuxed at around 700 Mpbs, thus taking just a few seconds after getting copied to the player.

In case there any problem occurs during demuxing, the job will fail and the files will not get copied to avfiles_esdb folder. Logs are generated for debugging. 

BLIP is notified only after the files are successfully demuxed and copied to their final destination folder. It can be assumed that the files present in *_esdb folders are proper (unless someone manually changes anything). 


### 5.2.2. Location {#5-2-2-location}

The segmented files are stored in the following locations:


<table>
  <tr>
   <td><strong>Category</strong>
   </td>
   <td><strong>Old location</strong>
   </td>
   <td><strong>New location</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Video</strong>
   </td>
   <td>/mnt/ops/avfiles
   </td>
   <td>/mnt/ops/avfiles_esdb
   </td>
  </tr>
  <tr>
   <td><strong>Audio</strong>
   </td>
   <td>/mnt/ops/avfiles
   </td>
   <td>/mnt/ops/avfiles_esdb
   </td>
  </tr>
  <tr>
   <td><strong>Rescue (File)</strong>
   </td>
   <td>/mnt/ops/rescue_files
   </td>
   <td>/mnt/ops/rescue_files_esdb
   </td>
  </tr>
  <tr>
   <td><strong>Rescue (Live)</strong>
   </td>
   <td>/mnt/ops/rescue_live_files
   </td>
   <td>/mnt/ops/rescue_live_files_esdb
   </td>
  </tr>
</table>



## 5.3. Folder Structure & Generated Files {#5-3-folder-structure-&-generated-files}

Here is a sample generated folder: [Samsung_Galaxy](https://drive.google.com/drive/folders/1Ofu_UgHZIU-HK6a05nFKturQW8QqcG2q?usp=sharing).

The files are demuxed into video & audio streams separately. For example, if a video file has three audio tracks, then after demuxing, there shall be a total of 4 streams (1 video + 3 audio).


### 5.3.1. Video Tracks {#5-3-1-video-tracks}

For every video file, a folder is created: `video_1`

This video file further has folders 0, 1, 2, 3, etc, with 10 files each, numbered according to the first frame of the elementary stream. Example: 0.es, 100.es, 200.es etc. Each of these .es files have 100 frames of video. This can be used to calculate the number of .es file chunks that should be present. 


### 5.3.2. Audio Tracks {#5-3-2-audio-tracks}

Similar, for every audio track, separate folders are created: `audio_1`, `audio_2` etc.

The audio folders also have folders 0, 1, 2, 3, etc, with 10 files each, numbered in a similar fashion. Here, every file is a minimum of 3 MB audio data (except the last file possibly).


### 5.3.3. Folder Structure {#5-3-3-folder-structure}

The folder structure is as follows:


```
Samsung_Galaxy/
`-- Samsung_Galaxy.META.json
`-- Samsung_Galaxy.ts.info.json
`-- es_meta.bin
`-- es_meta.json
`-- video_1
    |-- 0
    |   |-- 0.es
    |   |-- . . . .
    |   `-- 900.es
    |-- 1
    |   |-- 1000.es
    |   |-- . . . .
    |   `-- 1900.es
`-- audio_1
    |-- 0
    |   |-- 0.es
    |   |-- . . . .
    |   `-- 900.es
    |-- 1
    |   |-- 1000.es
    |   |-- . . . .
    |   `-- 1900.es
```



### 5.3.4. Other Generated Files {#5-3-4-other-generated-files}

Apart from video & audio tracks demuxing, following files are additionally generated:



1. `es_meta.json`
    1. This file has basic information about the file and is described in the section below. It shows the count of audio streams and video streams.
2. `Es_meta.bin`: This is a database file and should not be read or tampered with.
3. `AssetID.META.json`
4. `AssetID.ts.info.json` or `AssetID.ts.info.json`


### 5.3.5. Sample es_meta.json file {#5-3-5-sample-es_meta-json-file}

This file provides the following information:



1. Number of Audio Streams: `num_aud_streams`
2. Number of Video Streams: `num_vid_streams`
3. Number of Data Streams (`num_data_streams`): This field is not used yet. This can be used later for DVB subtitles etc.
4. Number of Total ES Streams = Sum of previous three streams count: `num_total_es_streams`
5. In `stream_info`, there is additional information corresponding to every pid at which any stream/track is present.

```json
{
    "pat": {
        "num_aud_streams": 1,
        "num_data_streams": 0,
        "num_total_es_streams": 2,
        "num_vid_streams": 1
    },
    "stream_info": {
        "2064": {
            "codec": "h264",
            "frame_rate": "",
            "frame_rate_denominator": 0,
            "frame_rate_numerator": 0,
            "language": "",
            "max_au_id": 1154,
            "max_au_pts_90khz": 1531350,
            "min_au_id": 0,
            "min_au_pts_90khz": 183003,
            "num_audio_channels": 0,
            "resolution": "",
            "sampling_rate": 0,
            "stream_type": "video"
        },
        "2068": {
            "codec": "aac",
            "frame_rate": "",
            "frame_rate_denominator": 0,
            "frame_rate_numerator": 0,
            "language": "",
            "max_au_id": 1153,
            "max_au_pts_90khz": 1534683,
            "min_au_id": 15,
            "min_au_pts_90khz": 183003,
            "num_audio_channels": 0,
            "resolution": "",
            "sampling_rate": 0,
            "stream_type": "audio"
        }
    }
}
```




## 5.4. Verification & Debugging {#5-4-verification-&-debugging}


### 5.4.1. Verification {#5-4-1-verification}

Based on the information above, in sections: Workflow, Location, Folder Structure, basic verification can be done.


### 5.4.2. Logging {#5-4-2-logging}

The logs are be found in player logs using the following command:


```
logall | grep "esdb.creator"
```


It shall provide logs similar to follows:


```
Trying to demux <file_name> and create ESDB in <temp_folder_name>
Took <time>ms to demux and create ESDB, file size: <file_size>bytes
Creating es_meta json
Copying <meta_file_name> to ESDB
Creating <info_file_name>
Copying <cfg_file_name> to ESDB
```


In error case, it will show proper logs till any of the following errors:


```
Failed to demux / create ESDB, exit status: <exit_status>, exited after <time_ms>ms

Creating an empty ESDB <asset_name>

<meta_file_name> not present

Failed to create info.json

<cfg_file_name> not present
```


# 6. Limitations {#6-limitations}



1. Limitations in seamless deployment as covered in [Deployment section](#5-1-deployment)
2. Tested with 9 hour files maximum.
3. Cannot play the .es files directly for test/debugging.
4. Existing files in the player don’t get converted to ESFS format automatically.


# 7. Appendix {#7-appendix}


## 7.1. List of Documents {#7-1-list-of-documents}



1. [Engineering Specifications](https://docs.google.com/document/d/1-6IUSrQIOw2Vczyx3vlnRe1NMulBlSH-YpUCUukHwbY/edit?ts=5f9c02a4#)
2. [Sample ESDB Folder](https://drive.google.com/drive/folders/1Ofu_UgHZIU-HK6a05nFKturQW8QqcG2q?usp=sharing)


