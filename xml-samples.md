---
title: XML Formats
description: Supported metadata XML formats
published: true
date: 2021-02-18T05:33:46.682Z
tags: 
editor: undefined
dateCreated: 2021-01-14T10:17:32.860Z
---

**XML Version 1**

***Episode XML Sample***
```
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
***Movie XML Sample***
```
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

**XML Version 2 - Cablelabs**

***Episode XML Sample***
```
<?xml version="1.0" encoding="UTF-8"?>
<ADI>
	<Metadata>
		<AMS Asset_Class="package" Asset_ID=" amagi202000000001" Asset_Name="Some Show S01 Ep 01 package" Creation_Date="2020-01-19" Description="Some Show S01 Ep 01" Product="SVOD" Provider="Amagi Media" Provider_ID="amagi.com" Update_Time="2020-01-19'T'11:52:01" Version_Major="1" Version_Minor="1"/>
		<App_Data App="SVOD" Name="Metadata_Spec_Version" Value="CableLabsVOD1.1"/>
		<App_Data App="SVOD" Name="Provider_Content_Tier" Value=""/>
	</Metadata>
	<Asset>
		<Metadata>
			<AMS Asset_Class="title" Asset_ID=" amagi202000000002" Asset_Name="Some Show S01 Ep 01 title" Creation_Date="2020-01-19" Description="Some Show S01 Ep 01" Product="SVOD" Provider="Amagi Media" Provider_ID="amagi.com" Version_Major="1" Version_Minor="1"/>
			<App_Data App="SVOD" Name="Type" Value="title"/>
			<App_Data App="SVOD" Name="Title_Brief" Value="Some Show S01 Ep 01 (Brief)"/>
			<App_Data App="SVOD" Name="Title" Value="Some Show S01 Ep 01"/>
			<App_Data App="SVOD" Name="Summary_Long" Value="A long description"/>
			<App_Data App="SVOD" Name="Summary_Short" Value="A short description"/>
			<App_Data App="SVOD" Name="Rating" Value="U "/>
			<App_Data App="SVOD" Name="Closed_Captioning" Value="Y"/>
			<App_Data App="SVOD" Name="Run_Time" Value="00:29:00"/>
			<App_Data App="SVOD" Name="Display_Run_Time" Value="00:29"/>
			<App_Data App="SVOD" Name="Year" Value="2012"/>
			<App_Data App="SVOD" Name="Country_of_Origin" Value="India"/>
			<App_Data App="SVOD" Name="Director" Value="Lastname,Firstname"/>
			<App_Data App="SVOD" Name="Actors" Value="Lastname,Firstname"/>
			<App_Data App="SVOD" Name="Actors" Value="Lastname,Firstname"/>
			<App_Data App="SVOD" Name="Genre" Value="Drama"/>
			<App_Data App="SVOD" Name="Billing_ID" Value="11111"/>
			<App_Data App="SVOD" Name="Category" Value="/TVShows"/>
			<App_Data App="SVOD" Name="Licensing_Window_Start" Value="2020-01-01T00:00:00"/>
			<App_Data App="SVOD" Name="Licensing_Window_End" Value="2020-12-31T00:00:00"/>
			<App_Data App="SVOD" Name="Provider_QA_Contact" Value="qa@amagi.com"/>
			<App_Data App="SVOD" Name="Subscription_Packages" Value="package1;package2;package3"/>
			<App_Data App="SVOD" Name="Show_Type" Value="Series"/>
			<App_Data App="SVOD" Name="Series_Title" Value="Some Show"/>
			<App_Data App="SVOD" Name="Series_ID" Value="SST"/>
			<App_Data App="SVOD" Name="Episode_Name" Value="Name 1"/>
			<App_Data App="SVOD" Name="Season_Number" Value="1"/>
			<App_Data App="SVOD" Name="Episode_Number" Value="1"/>
			<App_Data App="SVOD" Name="Keywords" Value="keyword1, keyword2, keyword3"/>
			<App_Data App="SVOD" Name="Language" Value="eng"/>
			<App_Data App="SVOD" Name="Country" Value="IN"/>
			<App_Data App="SVOD" Name="Platforms" Value="amazon,samsung_tv,sling"/>
		</Metadata>
	</Asset>
	<Asset>
		<Metadata>
			<AMS Asset_Class="movie" Asset_ID="amagi202000000003" Asset_Name="Some Show S01 Ep 01 movie" Creation_Date="2020-01-19" Description="Some Show S01 Ep 01" Product="SVOD" Provider="Amagi Media" Provider_ID="amagi.com" Version_Major="1" Version_Minor="1"/>
			<App_Data App="SVOD" Name="Type" Value="movie"/>
			<App_Data App="SVOD" Name="Audio_Type" Value="Stereo"/>
			<App_Data App="SVOD" Name="Languages" Value="eng_1233"/>
			<App_Data App="SVOD" Name="Languages" Value="asm_4561"/>
			<App_Data App="SVOD" Name="Languages" Value="fra_3332"/>
			<App_Data App="SVOD" Name="Codec" Value="H264"/>
			<App_Data App="SVOD" Name="Resolution" Value="480i"/>
			<App_Data App="SVOD" Name="Content_FileSize" Value="1577923726"/>
			<App_Data App="SVOD" Name="Content_CheckSum" Value="a653cfdaabc93f2e106b31ecda43181f "/>
		</Metadata>
		<Content Value=" amagii202000000003-feature.ts"/>
	</Asset>
	<Asset>
		<Metadata>
			<AMS Asset_Class="poster" Asset_ID="amagi202000000004" Asset_Name="Some Show S01 Ep 01 poster" Creation_Date="2020-01-19" Description="Some Show S01 Ep 01" Product="SVOD" Provider="Amagi Media" Provider_ID="amagi.com" Version_Major="1" Version_Minor="1"/>
			<App_Data App="SVOD" Name="Type" Value="poster"/>
			<App_Data App="SVOD" Name="Image_Aspect_Ratio" Value="530x764"/>
			<App_Data App="SVOD" Name="Content_FileSize" Value="25434756"/>
			<App_Data App="SVOD" Name="Content_CheckSum" Value=" a653cfdaabc93f2e106b31ecda43181f "/>
		</Metadata>
		<Content Value="amagi202000000001-poster.jpg"/>
	</Asset>
	<Asset>
		<Metadata>
			<AMS Asset_Class="box_cover" Asset_ID="amagi202000000005" Asset_Name="Some Show S01 Ep 01 banner" Creation_Date="2020-01-19" Description="Some Show S01 Ep 01" Product="SVOD" Provider="Amagi Media" Provider_ID="amagi.com" Version_Major="1" Version_Minor="1"/>
			<App_Data App="SVOD" Name="Type" Value="box_cover"/>
			<App_Data App="SVOD" Name="Image_Aspect_Ratio" Value="530x764"/>
			<App_Data App="SVOD" Name="Content_FileSize" Value=""/>
			<App_Data App="SVOD" Name="Content_CheckSum" Value=""/>
		</Metadata>
		<Content Value="amagi202000000004-boxcover.jpg"/>
	</Asset>
	<Asset>
		<Metadata>
			<AMS Asset_Class="translation" Asset_ID="amagi202000000006" Asset_Name="Some Show S01 Ep 01 movie" Creation_Date="2020-01-19" Description="Some Show S01 Ep 01" Product="SVOD" Provider="Amagi Media" Provider_ID="amagi.com" Version_Major="1" Version_Minor="1"/>
			<App_Data App="SVOD" Name="Type" Value="translation"/>
			<App_Data App="SVOD" Name="Language" Value="hin"/>
			<App_Data App="SVOD" Name="Title" Value="कुछ दिखाने S01 Ep 01"/>
			<App_Data App="SVOD" Name="Summary_Long" Value="एक लंबा वििरण"/>
			<App_Data App="SVOD" Name="Summary_Short" Value="एक संक्षिप्त वििरण"/>
			<App_Data App="SVOD" Name="Keywords" Value="कीिर्ड 1, कीिर्ड 2, कीिर्ड 3"/>
		</Metadata>
	</Asset>
	<Asset>
		<Metadata>
			<AMS Asset_Class="translation" Asset_ID="amagi202000000007" Asset_Name="Some Show S01 Ep 01 movie" Creation_Date="2020-01-19" Description="Some Show S01 Ep 01" Product="SVOD" Provider="Amagi Media" Provider_ID="amagi.com" Version_Major="1" Version_Minor="1"/>
			<App_Data App="SVOD" Name="Type" Value="translation"/>
			<App_Data App="SVOD" Name="Language" Value="tna"/>
			<App_Data App="SVOD" Name="Title" Value="บางคนแสดง S01 Ep 01"/>
			<App_Data App="SVOD" Name="Summary_Long" Value="ค าอธิบายยาว"/>
			<App_Data App="SVOD" Name="Summary_Short" Value="ค าอธิบายสั น ้ ๆ"/>
			<App_Data App="SVOD" Name="Keywords" Value="ค าหลัก 1, ค าหลัก 2, ค าหลัก 3"/>
		</Metadata>
	</Asset>
	<Asset>
		<Metadata>
			<AMS Asset_Class="closedCaption" Asset_ID="amagi202000000008" Asset_Name="Some Show S01 Ep 01 banner" Creation_Date="2020-01-19" Description="Some Show S01 Ep 01" Product="SVOD" Provider="Amagi Media" Provider_ID="amagi.com" Version_Major="1" Version_Minor="1"/>
			<App_Data App="SVOD" Name="Type" Value="SMPTE-TT"/>
			<App_Data App="SVOD" Name="Source_Asset_Class" Value="movie"/>
			<App_Data App="SVOD" Name="Language" Value="eng"/>
			<App_Data App="SVOD" Name="Offset" Value="00:00:00:00"/>
			<App_Data App="SVOD" Name="FrameRate" Value="29.97"/>
			<App_Data App="SVOD" Name="dropFrame" Value="N"/>
			<App_Data App="SVOD" Name="Content_FileSize" Value="20235"/>
			<App_Data App="SVOD" Name="Content_CheckSum" Value="a653cfdaabc93f2e106b31ecda43181f "/>
		</Metadata>
		<Content Value="amagi202000000008_cap_eng.xml"/>
	</Asset>
	<Asset>
		<Metadata>
			<AMS Asset_Class="closedCaption" Asset_ID="amagi202000000009" Asset_Name="Some Show S01 Ep 01 banner" Creation_Date="2020-01-19" Description="Some Show S01 Ep 01" Product="SVOD" Provider="Amgi Media" Provider_ID="amagi.com" Version_Major="1" Version_Minor="1"/>
			<App_Data App="SVOD" Name="Type" Value="SRT"/>
			<App_Data App="SVOD" Name="Source_Asset_Class" Value="movie"/>
			<App_Data App="SVOD" Name="Language" Value="fra"/>
			<App_Data App="SVOD" Name="Offset" Value="00:00:00:00"/>
			<App_Data App="SVOD" Name="FrameRate" Value="29.97"/>
			<App_Data App="SVOD" Name="dropFrame" Value="Y"/>
			<App_Data App="SVOD" Name="Content_FileSize" Value="20235"/>
			<App_Data App="SVOD" Name="Content_CheckSum" Value="a653cfdaabc93f2e106b31ecda43181f "/>
		</Metadata>
		<Content Value="amagi202000000009_cap_fra.srt"/>
	</Asset>
	<Asset>
		<Metadata>
			<AMS Asset_Class="regional" Asset_ID="amagi202000000009" Asset_Name="Some Show S01 Ep 01 banner" Creation_Date="2020-01-19" Description="Some Show S01 Ep 01" Product="SVOD" Provider="Amagi Media" Provider_ID="amagi.com" Version_Major="1" Version_Minor="1"/>
			<App_Data App="SVOD" Name="Type" Value="regional"/>
			<App_Data App="SVOD" Name="Country" Value="IN"/>
			<App_Data App="SVOD" Name="Rating" Value="G"/>
			<App_Data App="SVOD" Name="Licensing_Window_Start" Value="2020-03-03T00:00:00"/>
			<App_Data App="SVOD" Name="Licensing_Window_End" Value="2020-03-30T00:00:00"/>
		</Metadata>
	</Asset>
</ADI>
```
***Movie XML Sample***
```
<?xml version="1.0" encoding="UTF-8"?>
<ADI>
	<Metadata>
		<AMS Asset_Class="package" Asset_ID="amagi202000000001" Asset_Name="Sample Movie M1-package" Creation_Date="2020-01-19" Description="Sample Movie M1" Product="SVOD" Provider="Amagi Media" Provider_ID="amagi.com" Update_Time="2020-01-19T11:52:01" Version_Major="1" Version_Minor="1"/>
		<App_Data App="SVOD" Name="Metadata_Spec_Version" Value="CableLabsVOD1.1"/>
		<App_Data App="SVOD" Name="Provider_Content_Tier" Value=""/>
	</Metadata>
	<Asset>
		<Metadata>
			<AMS Asset_Class="title" Asset_ID="amagi202000000002" Asset_Name="Sample Movie M1-title" Creation_Date="2020-01-19" Description="Sample Movie M1" Product="SVOD" Provider="Amagi Media" Provider_ID="amagi.com" Update_Time="2020-02-23T11:53:01" Version_Major="1" Version_Minor="1"/>
			<App_Data App="SVOD" Name="Type" Value="title"/>
			<App_Data App="SVOD" Name="Title_Brief" Value="Sample Movie M1"/>
			<App_Data App="SVOD" Name="Title" Value="Sample Movie M1"/>
			<App_Data App="SVOD" Name="Summary_Long" Value="A long description"/>
			<App_Data App="SVOD" Name="Summary_Short" Value="A short description"/>
			<App_Data App="SVOD" Name="Rating" Value="U"/>
			<App_Data App="SVOD" Name="Closed_Captioning" Value="Y"/>
			<App_Data App="SVOD" Name="Run_Time" Value="02:25:00"/>
			<App_Data App="SVOD" Name="Display_Run_Time" Value="02:25"/>
			<App_Data App="SVOD" Name="Year" Value="2013"/>
			<App_Data App="SVOD" Name="Country_of_Origin" Value="IN"/>
			<App_Data App="SVOD" Name="Director" Value="Lastname,Firstname"/>
			<App_Data App="SVOD" Name="Actors" Value="Lastname,Firstname"/>
			<App_Data App="SVOD" Name="Actors" Value="Lastname,Firstname"/>
			<App_Data App="SVOD" Name="Genre" Value="Comedy"/>
			<App_Data App="SVOD" Name="Billing_ID" Value="11111"/>
			<App_Data App="SVOD" Name="Category" Value="/Movies"/>
			<App_Data App="SVOD" Name="Category" Value="/Kids"/>
			<App_Data App="SVOD" Name="Licensing_Window_Start" Value="2020-08-01T00:00:00"/>
			<App_Data App="SVOD" Name="Licensing_Window_End" Value="2016-12-31T00:00:00"/>
			<App_Data App="SVOD" Name="Platforms" Value="amazon,samsung_tv,sling"/>
			<App_Data App="SVOD" Name="Provider_QA_Contact" Value="vodsupport@amagi.com"/>
			<App_Data App="SVOD" Name="Show_Type" Value="Movie"/>
			<App_Data App="SVOD" Name="Keywords" Value="keyword1, keyword2, keyword3"/>
			<App_Data App="SVOD" Name="Language" Value="eng"/>
			<App_Data App="SVOD" Name="Country" Value="IN"/>
			<App_Data App="SVOD" Name="Rental" Value="Y"/>
			<App_Data App="SVOD" Name="Price" Value="4.99"/>
			<App_Data App="SVOD" Name="Currency" Value="USD"/>
			<App_Data App="SVOD" Name="Rental_Duration" Value="24600"/>
			<App_Data App="SVOD" Name="Platforms" Value="amazon,samsung_tv,sling"/>
		</Metadata>
	</Asset>
	<Asset>
		<Metadata>
			<AMS Asset_Class="movie" Asset_ID=" amagi202000000003" Asset_Name="Sample Movie M1- movie" Creation_Date="2020-01-19" Description="Sample Movie M1" Product="SVOD" Provider="Amagi Media" Provider_ID="amagi.com" Update_Time="2020-01-19T11:52:01" Version_Major="1" Version_Minor="1"/>
			<App_Data App="SVOD" Name="Type" Value="movie"/>
			<App_Data App="SVOD" Name="Audio_Type" Value="Stereo"/>
			<App_Data App="SVOD" Name="Languages" Value="eng_1234"/>
			<App_Data App="SVOD" Name="Languages" Value="hin_1235"/>
			<App_Data App="SVOD" Name="Languages" Value="tha_1236"/>
			<App_Data App="SVOD" Name="Languages" Value="tgl_1237"/>
			<App_Data App="SVOD" Name="Codec" Value="H264"/>
			<App_Data App="SVOD" Name="Resolution" Value="480i"/>
			<App_Data App="SVOD" Name="Content_FileSize" Value="13253693210"/>
			<App_Data App="SVOD" Name="Content_CheckSum" Value="a653cfdaabc93f2e106b31ecda43181f "/>
		</Metadata>
		<Content Value=" amagi202000000003-feature.ts"/>
	</Asset>
	<Asset>
		<Metadata>
			<AMS Asset_Class="preview" Asset_ID=" amagi202000000004" Asset_Name="Sample Movie M1- preview" Creation_Date="2020-01-19" Description="Sample Movie M1" Product="SVOD" Provider="Amgi Media" Provider_ID="amagi.com" Update_Time="2020-03-23T11:51:01" Version_Major="1" Version_Minor="1"/>
			<App_Data App="SVOD" Name="Type" Value="preview"/>
			<App_Data App="SVOD" Name="Audio_Type" Value="Stereo"/>
			<App_Data App="SVOD" Name="Languages" Value="eng_1234"/>
			<App_Data App="SVOD" Name="Codec" Value="H264"/>
			<App_Data App="SVOD" Name="Content_FileSize" Value="272861188"/>
			<App_Data App="SVOD" Name="Content_CheckSum" Value="a653cfdaabc93f2e106b31ecda43181f "/>
		</Metadata>
		<Content Value="amagi202000000004-preview.ts"/>
	</Asset>
	<Asset>
		<Metadata>
			<AMS Asset_Class="poster" Asset_ID="amagi202000000005" Asset_Name="Sample Movie M1- poster" Creation_Date="2020-01-19" Description="Sample Movie M1" Product="SVOD" Provider="Amagi Media" Provider_ID="amagi.com" Update_Time="2020-01-19T11:52:01" Version_Major="1" Version_Minor="1"/>
			<App_Data App="SVOD" Name="Type" Value="poster"/>
			<App_Data App="SVOD" Name="Image_Aspect_Ratio" Value="2048x3072"/>
			<App_Data App="SVOD" Name="Content_FileSize" Value="2233862"/>
			<App_Data App="SVOD" Name="Content_CheckSum" Value="a653cfdaabc93f2e106b31ecda43181f "/>
		</Metadata>
		<Content Value="amagi202000000001-poster.jpg"/>
	</Asset>
	<Asset>
		<Metadata>
			<AMS Asset_Class="translation" Asset_ID="amagi202000000006" Asset_Name="Sample Movie M1- translation" Creation_Date="2020-01-19" Description="Sample Movie M1" Product="SVOD" Provider="Amagi Media" Provider_ID="amagi.com" Update_Time="2020-01-19T11:52:01" Version_Major="1" Version_Minor="1"/>
			<App_Data App="SVOD" Name="Type" Value="translation"/>
			<App_Data App="SVOD" Name="Language" Value="tha"/>
			<App_Data App="SVOD" Name="Title" Value="บาง P1 ภาพยนตร์ "/>
			<App_Data App="SVOD" Name="Summary_Long" Value="ค าอธิบายยาว"/>
			<App_Data App="SVOD" Name="Summary_Short" Value="ค าอธิบายสั น ้ ๆ"/>
			<App_Data App="SVOD" Name="Keywords" Value="कीिर्ड 1, कीिर्ड 2, कीिर्ड 3"/>
		</Metadata>
	</Asset>
	<Asset>
		<Metadata>
			<AMS Asset_Class="closedCaption" Asset_ID="amagi202000000007" Asset_Name="Sample Movie M1-closedCaption" Creation_Date="2020-01-19" Description="Sample Movie M1" Product="SVOD" Provider="Amagi Media" Provider_ID="amagi.com" Update_Time="2020-01-19T11:52:01" Version_Major="1" Version_Minor="1"/>
			<App_Data App="SVOD" Name="Type" Value="SMPTE-TT"/>
			<App_Data App="SVOD" Name="Source_Asset_Class" Value="movie"/>
			<App_Data App="SVOD" Name="Language" Value="qsc"/>
			<App_Data App="SVOD" Name="Offset" Value="00:00:00:00"/>
			<App_Data App="SVOD" Name="FrameRate" Value="29.97"/>
			<App_Data App="SVOD" Name="dropFrame" Value="N"/>
			<App_Data App="SVOD" Name="Content_FileSize" Value="204605"/>
			<App_Data App="SVOD" Name="Content_CheckSum" Value="a653cfdaabc93f2e106b31ecda43181f"/>
		</Metadata>
		<Content Value="amagi202000000001-cap_qsc.xml"/>
	</Asset>
	<Asset>
		<Metadata>
			<AMS Asset_Class="closedCaption" Asset_ID="amagi202000000008" Asset_Name="Sample Movie M1-closedCaption" Creation_Date="2020-01-19" Description="Sample Movie M1" Product="SVOD" Provider="Amagi Media" Provider_ID="amagi.com" Update_Time="2020-01-19T11:52:01" Version_Major="1" Version_Minor="1"/>
			<App_Data App="SVOD" Name="Type" Value="SRT"/>
			<App_Data App="SVOD" Name="Source_Asset_Class" Value="movie"/>
			<App_Data App="SVOD" Name="Language" Value="mal"/>
			<App_Data App="SVOD" Name="Offset" Value="00:00:00:00"/>
			<App_Data App="SVOD" Name="FrameRate" Value="29.97"/>
			<App_Data App="SVOD" Name="dropFrame" Value="Y"/>
			<App_Data App="SVOD" Name="Content_FileSize" Value="157792"/>
			<App_Data App="SVOD" Name="Content_CheckSum" Value="a653cfdaabc93f2e106b31ecda43181f"/>
		</Metadata>
		<Content Value="amagi202000000001-cap_mal.srt"/>
	</Asset>
</ADI>
```

***Music Video Sample***
```
<?xml version="1.0" encoding="UTF-8"?>
<ADI>
	<Metadata>
		<AMS Asset_Class="package" Asset_ID="amagi202000000001" Asset_Name="Sample Music M1 package" Creation_Date="2020-01-19" Description="Sample Music M1" Product="SVOD" Provider="Amagi Media" Provider_ID="amagi.com" Update_Time="2020-01-19'T'11:52:01" Version_Major="1" Version_Minor="1"/>
		<App_Data App="SVOD" Name="Metadata_Spec_Version" Value="CableLabsVOD1.1"/>
		<App_Data App="SVOD" Name="Provider_Content_Tier" Value=""/>
	</Metadata>
	<Asset>
		<Metadata>
			<AMS Asset_Class="title" Asset_ID="amagi202000000002" Asset_Name="Sample Music M1 title" Creation_Date="2020-01-19" Description="Sample Music M1" Product="SVOD" Provider="Amagi Media" Provider_ID="amagi.com" Version_Major="1" Version_Minor="1"/>
			<App_Data App="SVOD" Name="Type" Value="title"/>
			<App_Data App="SVOD" Name="Title_Brief" Value="Sample Music M1 (Brief)"/>
			<App_Data App="SVOD" Name="Title" Value="Sample Music M1"/>
			<App_Data App="SVOD" Name="Summary_Long" Value="A long description"/>
			<App_Data App="SVOD" Name="Summary_Short" Value="A short description"/>
			<App_Data App="SVOD" Name="Rating" Value="G"/>
			<App_Data App="SVOD" Name="Closed_Captioning" Value="N"/>
			<App_Data App="SVOD" Name="Run_Time" Value="00:06:00"/>
			<App_Data App="SVOD" Name="Display_Run_Time" Value="06:00"/>
			<App_Data App="SVOD" Name="Year" Value="2012"/>
			<App_Data App="SVOD" Name="Country_of_Origin" Value="Thailand"/>
			<App_Data App="SVOD" Name="Director" Value="Lastname,Firstname"/>
			<App_Data App="SVOD" Name="Actors" Value="Lastname,Firstname"/>
			<App_Data App="SVOD" Name="Genre" Value="None"/>
			<App_Data App="SVOD" Name="Billing_ID" Value="11111"/>
			<App_Data App="SVOD" Name="Category" Value="/Music Videos"/>
			<App_Data App="SVOD" Name="Show_Type" Value="Music"/>
			<App_Data App="SVOD" Name="Licensing_Window_Start" Value="2020-01-01T00:00:00"/>
			<App_Data App="SVOD" Name="Licensing_Window_End" Value="2020-12-31T00:00:00"/>
			<App_Data App="SVOD" Name="Provider_QA_Contact" Value="vodsupport@amagi.com"/>
			<App_Data App="SVOD" Name="Subscription_Packages" Value="package1;package2;package3"/>
			<App_Data App="SVOD" Name="Keywords" Value="keyword1, keyword2, keyword3"/>
			<App_Data App="SVOD" Name="Language" Value="eng"/>
			<App_Data App="SVOD" Name="Recording_Artist" Value="A sample artist"/>
			<App_Data App="SVOD" Name="Country" Value="TH"/>
			<App_Data App="SVOD" Name="Platforms" Value="amazon,samsung_tv,sling"/>
		</Metadata>
	</Asset>
	<Asset>
		<Metadata>
			<AMS Asset_Class="movie" Asset_ID="amagi202000000003" Asset_Name="Sample Music M1 movie" Creation_Date="2020-01-19" Description="Sample Music M1" Product="SVOD" Provider="Amagi Media" Provider_ID="amagi.com" Version_Major="1" Version_Minor="1"/>
			<App_Data App="SVOD" Name="Type" Value="movie"/>
			<App_Data App="SVOD" Name="Audio_Type" Value="Stereo"/>
			<App_Data App="SVOD" Name="Languages" Value="eng_1234"/>
			<App_Data App="SVOD" Name="Languages" Value="tna_1238"/>
			<App_Data App="SVOD" Name="Codec" Value="H264"/>
			<App_Data App="SVOD" Name="Resolution" Value="480i"/>
			<App_Data App="SVOD" Name="Content_FileSize" Value="1678924756"/>
			<App_Data App="SVOD" Name="Content_CheckSum" Value="e653cffaabc93f4e107b31bcea33181e"/>
		</Metadata>
		<Content Value="amagi202000000001-feature.ts"/>
	</Asset>
	<Asset>
		<Metadata>
			<AMS Asset_Class="poster" Asset_ID="amagi202000000004" Asset_Name="Sample Music M1 poster" Creation_Date="2020-01-19" Description="Sample Music M1" Product="SVOD" Provider="Amagi Media" Provider_ID="amagi.com" Version_Major="1" Version_Minor="1"/>
			<App_Data App="SVOD" Name="Type" Value="poster"/>
			<App_Data App="SVOD" Name="Image_Aspect_Ratio" Value="530x764"/>
			<App_Data App="SVOD" Name="Content_FileSize" Value="25434756"/>
			<App_Data App="SVOD" Name="Content_CheckSum" Value="e653cffaabc93f4e107b31bcea33181e"/>
		</Metadata>
		<Content Value="amagi202000000001-poster.jpg"/>
	</Asset>
</ADI>
```
