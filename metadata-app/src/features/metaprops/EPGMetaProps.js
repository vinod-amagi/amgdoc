export function MetaProps(){
    return metaProps
}

export function Platforms(){
    let platforms = new Set()
    for (let i in metaProps) {
        for (let j in metaProps[i].platforms) {
            platforms.add(metaProps[i].platforms[j].name)
        }
    }

    return [...platforms]
}

const  metaProps =  (
    [
    {
        "name": "TMS ID",
        "prop": "tms_id",
        "description": "TMS ID from Gracenote",
        "platforms": [
            {
                "name": "Samsung",
                "req": ""
            },
            {
                "name": "Roku",
                "req": "Preferred",
                "info": "If provided, Roku can pull some info from Gracenote directly"
            },
            {
                "name": "Plex",
                "req": ""
            },
            {
                "name": "Sling",
                "req": ""
            },
            {
                "name": "STIRR",
                "req": ""
            },
            {
                "name": "Tivo",
                "req": ""
            },
            {
                "name": "Rakuten",
                "req": ""
            },
            {
                "name": "Vizio",
                "req": ""
            },
            {
                "name": "Gracenote",
                "req": "Preferred"
            }
        ]
    },
    {
        "name": "Title",
        "prop": "title",
        "description": "Series / Movie title",
        "platforms": [
            {
                "name": "Samsung",
                "req": "Mandatory"
            },
            {
                "name": "Roku",
                "req": "Mandatory"
            },
            {
                "name": "Plex",
                "req": "Mandatory"
            },
            {
                "name": "Sling",
                "req": "Mandatory"
            },
            {
                "name": "STIRR",
                "req": "Mandatory"
            },
            {
                "name": "Tivo",
                "req": "Mandatory"
            },
            {
                "name": "Rakuten",
                "req": "Mandatory"
            },
            {
                "name": "Vizio",
                "req": "Mandatory"
            },
            {
                "name": "Gracenote",
                "req": "Mandatory"
            }
        ]
    },
    {
        "name": "Category",
        "prop": "category",
        "description": "",
        "platforms": [
            {
                "name": "Samsung",
                "req": "Optional"
            },
            {
                "name": "Roku",
                "req": "Optional"
            },
            {
                "name": "Plex",
                "req": "Optional"
            },
            {
                "name": "Sling",
                "req": "Optional"
            },
            {
                "name": "STIRR",
                "req": "Optional"
            },
            {
                "name": "Tivo",
                "req": "Optional"
            },
            {
                "name": "Rakuten",
                "req": "Optional"
            },
            {
                "name": "Vizio",
                "req": "Optional"
            },
            {
                "name": "Gracenote",
                "req": "Optional"
            }
        ]
    },
    {
        "name": "Series Name",
        "prop": "series_name",
        "description": "For episodic contents",
        "platforms": [
            {
                "name": "Samsung",
                "req": "Mandatory"
            },
            {
                "name": "Roku",
                "req": "Mandatory"
            },
            {
                "name": "Plex",
                "req": "Mandatory"
            },
            {
                "name": "Sling",
                "req": "Mandatory"
            },
            {
                "name": "STIRR",
                "req": "Optional"
            },
            {
                "name": "Tivo",
                "req": "Mandatory"
            },
            {
                "name": "Rakuten",
                "req": "Optional"
            },
            {
                "name": "Vizio",
                "req": "Mandatory"
            },
            {
                "name": "Gracenote",
                "req": "Optional"
            }
        ]
    },
    {
        "name": "Series Id",
        "prop": "series_id",
        "description": "For episodic contents",
        "platforms": [
            {
                "name": "Samsung",
                "req": "Mandatory"
            },
            {
                "name": "Roku",
                "req": "Mandatory",
                "info": "If not provided, id will be generated from the title"
            },
            {
                "name": "Plex",
                "req": "Optional"
            },
            {
                "name": "Sling",
                "req": "Mandatory",
                "info": "If not provided, id will be generated from the title"
            },
            {
                "name": "STIRR",
                "req": "Optional"
            },
            {
                "name": "Tivo",
                "req": "Mandatory"
            },
            {
                "name": "Rakuten",
                "req": "Optional"
            },
            {
                "name": "Vizio",
                "req": "Optional"
            },
            {
                "name": "Gracenote",
                "req": "Mandatory"
            }
        ]
    },
    {
        "name": "Season Number",
        "prop": "season_number",
        "description": "For episodic contents",
        "platforms": [
            {
                "name": "Samsung",
                "req": "Mandatory"
            },
            {
                "name": "Roku",
                "req": "Mandatory"
            },
            {
                "name": "Plex",
                "req": "Mandatory"
            },
            {
                "name": "Sling",
                "req": "Optional"
            },
            {
                "name": "STIRR",
                "req": "Optional"
            },
            {
                "name": "Tivo",
                "req": "Mandatory"
            },
            {
                "name": "Rakuten",
                "req": "Optional"
            },
            {
                "name": "Vizio",
                "req": "Optional"
            },
            {
                "name": "Gracenote",
                "req": "Mandatory"
            }
        ]
    },
    {
        "name": "Episode Name",
        "prop": "episode_name",
        "description": "For episodic content",
        "platforms": [
            {
                "name": "Samsung",
                "req": "Mandatory"
            },
            {
                "name": "Roku",
                "req": "Mandatory"
            },
            {
                "name": "Plex",
                "req": "Mandatory"
            },
            {
                "name": "Sling",
                "req": "Mandatory"
            },
            {
                "name": "STIRR",
                "req": "Mandatory"
            },
            {
                "name": "Tivo",
                "req": "Mandatory"
            },
            {
                "name": "Rakuten",
                "req": "Mandatory"
            },
            {
                "name": "Vizio",
                "req": "Mandatory"
            },
            {
                "name": "Gracenote",
                "req": "Mandatory"
            }
        ]
    },
    {
        "name": "Episode Number",
        "prop": "episode_number",
        "description": "For episodic contents",
        "platforms": [
            {
                "name": "Samsung",
                "req": "Optional"
            },
            {
                "name": "Roku",
                "req": "Mandatory"
            },
            {
                "name": "Plex",
                "req": "Mandatory"
            },
            {
                "name": "Sling",
                "req": "Optional"
            },
            {
                "name": "STIRR",
                "req": "Mandatory"
            },
            {
                "name": "Tivo",
                "req": "Mandatory"
            },
            {
                "name": "Rakuten",
                "req": "Optional"
            },
            {
                "name": "Vizio",
                "req": "Mandatory"
            },
            {
                "name": "Gracenote",
                "req": "Mandatory"
            }
        ]
    },
    {
        "name": "Show Type",
        "prop": "show_type",
        "description": "Specify Series or Movies content",
        "platforms": [
            {
                "name": "Samsung",
                "req": "Required"
            },
            {
                "name": "Roku",
                "req": "Required",
                "info": "TVSpecial is also a supported type"
            },
            {
                "name": "Plex",
                "req": "Optional"
            },
            {
                "name": "Sling",
                "req": "Mandatory"
            },
            {
                "name": "STIRR",
                "req": "Optional"
            },
            {
                "name": "Tivo",
                "req": "Mandatory"
            },
            {
                "name": "Rakuten",
                "req": "Optional"
            },
            {
                "name": "Vizio",
                "req": "Optional"
            },
            {
                "name": "Gracenote",
                "req": "Optional"
            }
        ]
    },
    {
        "name": "Images",
        "prop": "images",
        "description": "16x9 (1920x1080) is preferred",
        "platforms": [
            {
                "name": "Samsung",
                "req": "Mandatory",
                "info": "16x9 image is mandatory (1920x1080 recommended, minimum 1280x720)"
            },
            {
                "name": "Roku",
                "req": "Mandatory",
                "info": "16x9 image is mandatory (1920x1080 recommended, minimum 800x450); Additional 2x3 is allowed"
            },
            {
                "name": "Plex",
                "req": "Mandatory",
                "info": "2x3 image is mandatory; 16x9 optional"
            },
            {
                "name": "Sling",
                "req": "Mandatory",
                "info": "Titled 16x9 image is mandatory (1920x1080 recommended) for series; 16x9 Thumbnail preferred for episode level"
            },
            {
                "name": "STIRR",
                "req": "Optional"
            },
            {
                "name": "Tivo",
                "req": "Mandatory", 
                "info": "Titled 16x9 image is mandatory (1920x1080 recommended) for series; 16x9 Thumbnail preferred for episode level"
            },
            {
                "name": "Rakuten",
                "req": "Mandatory",
                "info": "16x9 image mandatory with min 1920x1080 resolution"
            },
            {
                "name": "Vizio",
                "req": "Mandatory",
                "info": "2x3 Mandatory, 16x9 Optional"
            },
            {
                "name": "Gracenote",
                "req": "Optional"
            }
        ]
    },
    {
        "name": "Image Rights",
        "prop": "image_rights",
        "description": "Validity Start and End for licensed images",
        "platforms": [
            {
                "name": "Samsung",
                "req": "Optional"
            },
            {
                "name": "Roku",
                "req": "Optional"
            },
            {
                "name": "Plex",
                "req": "Optional"
            },
            {
                "name": "Sling",
                "req": "Optional"
            },
            {
                "name": "STIRR",
                "req": "Optional"
            },
            {
                "name": "Tivo",
                "req": "Mandatory"
            },
            {
                "name": "Rakuten",
                "req": "Optional"
            },
            {
                "name": "Vizio",
                "req": "Optional"
            },
            {
                "name": "Gracenote",
                "req": "Optional"
            }
        ]
    },
    {
        "name": "Image Type",
        "prop": "image_type",
        "description": "Series/episode/movie",
        "platforms": [
            {
                "name": "Samsung",
                "req": "Optional"
            },
            {
                "name": "Roku",
                "req": "Mandatory"
            },
            {
                "name": "Plex",
                "req": "Mandatory"
            },
            {
                "name": "Sling",
                "req": "Mandatory"
            },
            {
                "name": "STIRR",
                "req": "Optional"
            },
            {
                "name": "Tivo",
                "req": "Mandatory"
            },
            {
                "name": "Rakuten",
                "req": "Optional"
            },
            {
                "name": "Vizio",
                "req": "Optional"
            },
            {
                "name": "Gracenote",
                "req": "Optional"
            }
        ]
    },
    {
        "name": "Description",
        "prop": "description",
        "description": "Short description of the series/movie",
        "platforms": [
            {
                "name": "Samsung",
                "req": "Mandatory"
            },
            {
                "name": "Roku",
                "req": "Mandatory"
            },
            {
                "name": "Plex",
                "req": "Mandatory"
            },
            {
                "name": "Sling",
                "req": "Mandatory"
            },
            {
                "name": "STIRR",
                "req": "Mandatory"
            },
            {
                "name": "Tivo",
                "req": "Mandatory"
            },
            {
                "name": "Rakuten",
                "req": "Mandatory"
            },
            {
                "name": "Vizio",
                "req": "Mandatory"
            },
            {
                "name": "Gracenote",
                "req": "Mandatory"
            }
        ]
    },
    {
        "name": "Episode Description",
        "prop": "episode_description",
        "description": "Short description of the episode",
        "platforms": [
            {
                "name": "Samsung",
                "req": "Mandatory"
            },
            {
                "name": "Roku",
                "req": "Mandatory"
            },
            {
                "name": "Plex",
                "req": "Mandatory"
            },
            {
                "name": "Sling",
                "req": "Mandatory"
            },
            {
                "name": "STIRR",
                "req": "Mandatory"
            },
            {
                "name": "Tivo",
                "req": "Mandatory"
            },
            {
                "name": "Rakuten",
                "req": "Mandatory"
            },
            {
                "name": "Vizio",
                "req": "Optional"
            },
            {
                "name": "Gracenote",
                "req": "Mandatory"
            }
        ]
    },
    {
        "name": "Rating",
        "prop": "rating",
        "description": "",
        "platforms": [
            {
                "name": "Samsung",
                "req": "Mandatory",
                "info": "Country-wise rating is preferred"
            },
            {
                "name": "Roku",
                "req": "Mandatory",
                "info": "Mandatory  for children's content"
            },
            {
                "name": "Plex",
                "req": "Optional"
            },
            {
                "name": "Sling",
                "req": "Optional"
            },
            {
                "name": "STIRR",
                "req": "Optional"
            },
            {
                "name": "Tivo",
                "req": "Preferred"
            },
            {
                "name": "Rakuten",
                "req": "Mandatory",
                "info": "Country-wise rating is required"
            },
            {
                "name": "Vizio",
                "req": "Mandatory"
            },
            {
                "name": "Gracenote",
                "req": "Optional"
            }
        ]
    },
    {
        "name": "Rating Agency",
        "prop": "rating_agency",
        "description": "",
        "platforms": [
            {
                "name": "Samsung",
                "req": "Mandatory",
                "info": "Country-wise rating is preferred"
            },
            {
                "name": "Roku",
                "req": "Mandatory",
                "info": "Required for children's content"
            },
            {
                "name": "Plex",
                "req": "Optional"
            },
            {
                "name": "Sling",
                "req": "Optional"
            },
            {
                "name": "STIRR",
                "req": "Optional"
            },
            {
                "name": "Tivo",
                "req": "Preferred"
            },
            {
                "name": "Rakuten",
                "req": "Mandatory",
                "info": "Country-wise rating is required"
            },
            {
                "name": "Vizio",
                "req": "Mandatory"
            },
            {
                "name": "Gracenote",
                "req": "Optional"
            }
        ]
    },
    {
        "name": "Genre",
        "prop": "genre",
        "description": "",
        "platforms": [
            {
                "name": "Samsung",
                "req": "Mandatory",
                "info": "Genre is at channel level, not individual content-wise"
            },
            {
                "name": "Roku",
                "req": "Optional"
            },
            {
                "name": "Plex",
                "req": "Optional"
            },
            {
                "name": "Sling",
                "req": "Preferred"
            },
            {
                "name": "STIRR",
                "req": "Optional"
            },
            {
                "name": "Tivo",
                "req": "Preferred"
            },
            {
                "name": "Rakuten",
                "req": "Preferred"
            },
            {
                "name": "Vizio",
                "req": "Optional"
            },
            {
                "name": "Gracenote",
                "req": "Optional"
            }
        ]
    },
    {
        "name": "Language",
        "prop": "language",
        "description": "",
        "platforms": [
            {
                "name": "Samsung",
                "req": "Optional"
            },
            {
                "name": "Roku",
                "req": "Optional"
            },
            {
                "name": "Plex",
                "req": "Optional"
            },
            {
                "name": "Sling",
                "req": "Optional"
            },
            {
                "name": "STIRR",
                "req": "Mandatory"
            },
            {
                "name": "Tivo",
                "req": "Mandatory"
            },
            {
                "name": "Rakuten",
                "req": "Mandatory"
            },
            {
                "name": "Vizio",
                "req": "Optional"
            },
            {
                "name": "Gracenote",
                "req": "Optional"
            }
        ]
    },
    {
        "name": "Channel Logos",
        "prop": "channel_logos",
        "description": "Logos for the channel itself",
        "platforms": [
            {
                "name": "Samsung",
                "req": "Mandatory"
            },
            {
                "name": "Roku",
                "req": "Mandatory"
            },
            {
                "name": "Plex",
                "req": "Optional"
            },
            {
                "name": "Sling",
                "req": "Optional"
            },
            {
                "name": "STIRR",
                "req": "Optional"
            },
            {
                "name": "Tivo",
                "req": "Optional"
            },
            {
                "name": "Rakuten",
                "req": "Optional"
            },
            {
                "name": "Vizio",
                "req": "Optional"
            },
            {
                "name": "Gracenote",
                "req": "Optional"
            }
        ]
    },
    {
        "name": "Duration",
        "prop": "duration",
        "description": "Duration of the program",
        "platforms": [
            {
                "name": "Samsung",
                "req": "Mandatory",
                "info": "Derived from the schedule"
            },
            {
                "name": "Roku",
                "req": "Mandatory",
                "info": "Derived from the schedule"
            },
            {
                "name": "Plex",
                "req": "Mandatory",
                "info": "Derived from the schedule"
            },
            {
                "name": "Sling",
                "req": "Mandatory",
                "info": "Derived from the schedule"
            },
            {
                "name": "STIRR",
                "req": "Mandatory",
                "info": "Derived from the schedule"
            },
            {
                "name": "Tivo",
                "req": "Mandatory",
                "info": "Derived from the schedule"
            },
            {
                "name": "Rakuten",
                "req": "Mandatory",
                "info": "Derived from the schedule"
            },
            {
                "name": "Vizio",
                "req": "Mandatory",
                "info": "Derived from the schedule"
            },
            {
                "name": "Gracenote",
                "req": "Mandatory",
                "info": "Derived from the schedule"
            }
        ]
    },
    {
        "name": "Original air date",
        "prop": "original_air_date",
        "description": "",
        "platforms": [
            {
                "name": "Samsung",
                "req": "Optional"
            },
            {
                "name": "Roku",
                "req": "Optional"
            },
            {
                "name": "Plex",
                "req": "Optional"
            },
            {
                "name": "Sling",
                "req": "Mandatory"
            },
            {
                "name": "STIRR",
                "req": "Optional"
            },
            {
                "name": "Tivo",
                "req": "Mandatory"
            },
            {
                "name": "Rakuten",
                "req": "Optional"
            },
            {
                "name": "Vizio",
                "req": "Mandatory"
            },
            {
                "name": "Gracenote",
                "req": "Optional"
            }
        ]
    },
    {
        "name": "Tags",
        "prop": "tags",
        "description": "",
        "platforms": [
            {
                "name": "Samsung",
                "req": "Optional"
            },
            {
                "name": "Roku",
                "req": "Optional",
                "info": "Must be set to kidsdirected if the content is for children"
            },
            {
                "name": "Plex",
                "req": "Optional"
            },
            {
                "name": "Sling",
                "req": "Optional"
            },
            {
                "name": "STIRR",
                "req": "Optional"
            },
            {
                "name": "Tivo",
                "req": "Optional"
            },
            {
                "name": "Rakuten",
                "req": "Optional"
            },
            {
                "name": "Vizio",
                "req": "Optional"
            },
            {
                "name": "Gracenote",
                "req": "Optional"
            }
        ]
    },
    {
        "name": "isLive",
        "prop": "is_live",
        "description": "",
        "platforms": [
            {
                "name": "Samsung",
                "req": "Optional"
            },
            {
                "name": "Roku",
                "req": "Optional"
            },
            {
                "name": "Plex",
                "req": "Optional"
            },
            {
                "name": "Sling",
                "req": "Mandatory"
            },
            {
                "name": "STIRR",
                "req": "Optional"
            },
            {
                "name": "Tivo",
                "req": "Optional"
            },
            {
                "name": "Rakuten",
                "req": "Optional"
            },
            {
                "name": "Vizio",
                "req": "Optional"
            },
            {
                "name": "Gracenote",
                "req": "Optional"
            }
        ]
    }
]);