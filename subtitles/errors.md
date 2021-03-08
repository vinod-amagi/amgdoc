---
title: Errors
description: 
published: true
date: 2021-03-08T16:07:49.944Z
tags: 
editor: markdown
dateCreated: 2021-03-08T16:01:06.162Z
---

# Errors

## Unprintable characters

> There are unprintable characters.
> Please check the following subtitles.
> Subtitle 217 has characters from the extended charset
> Subtitle 442 has characters from the extended charset
> 
{.is-danger}

### Reason

When subtitle is converted from one format to another (SRT to SCC, STL to PAC), the error will be shown. There is no fix for this issue, and the characters will need to be replaced in the source file.

Note:
**Message from EzTitles**
*I’m afraid this is a critical error and the message could not be skipped.
The best way to handle it is to check the subtitle in question and fix the issue by replacing the character that looks like “square” in this subtitle.
Unprintable characters, a.k.a. not supported characters, will be displayed as a “square”.*

**Message from EzTitles**
*The issue is that the input EBU STL file contains a character named “D with stroke”, also known as “crossed D” or dyet – “đ”.
This character is not supported by the .PAC format, thus the “unprintable character” error message you get during the conversion.
You can easily solve this by importing the EBU STL in EZTitles and replacing that character with normal “d” (if appropriate) via Edit > Replace feature.*

