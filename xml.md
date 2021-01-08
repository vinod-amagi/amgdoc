---
title: XML Formats
description: Supported metadata XML formats
published: true
date: 2021-01-08T22:01:38.715Z
tags: 
editor: markdown
---

## XML Formats

**XML Version 1**

**XML Version 2 - Cablelabs**

***Episode***

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
***Movie***
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
