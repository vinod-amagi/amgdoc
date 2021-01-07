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
        "description": "",
        "platforms": [
            {
                "name": "Samsung",
                "req": ""
            },
            {
                "name": "Roku",
                "req": "Preferred"
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
                "req": "2"
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
                "req": "2"
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
                "req": ""
            },
            {
                "name": "Sling",
                "req": ""
            },
            {
                "name": "STIRR",
                "req": "Optional"
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
                "req": "2"
            }
        ]
    },
    {
        "name": "Series Name",
        "prop": "series_name",
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
                "req": "Mandatory"
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
                "req": "2"
            }
        ]
    },
    {
        "name": "Series Id",
        "prop": "series_id",
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
                "req": "Mandatory"
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
                "req": "2"
            }
        ]
    },
    {
        "name": "Season Number",
        "prop": "season_number",
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
                "req": "Mandatory"
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
                "req": "2"
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
                "req": ""
            },
            {
                "name": "Sling",
                "req": ""
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
                "req": ""
            },
            {
                "name": "Vizio",
                "req": ""
            },
            {
                "name": "Gracenote",
                "req": "2"
            }
        ]
    },
    {
        "name": "Episode Number",
        "prop": "episode_number",
        "description": "For episodic content",
        "platforms": [
            {
                "name": "Samsung",
                "req": "Optional"
            },
            {
                "name": "Roku",
                "req": "Mandatory for episodic content"
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
                "req": "Mandatory"
            },
            {
                "name": "Tivo",
                "req": "Mandatory"
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
                "req": "2"
            }
        ]
    },
    {
        "name": "Show_Type (Series/Movies)",
        "prop": "show_type",
        "description": "",
        "platforms": [
            {
                "name": "Samsung",
                "req": "Required"
            },
            {
                "name": "Roku",
                "req": "Required (also supports tvSpecials as another type)"
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
                "req": "2"
            }
        ]
    },
    {
        "name": "Images",
        "prop": "images",
        "description": "16x9 (1920x1080) preferred",
        "platforms": [
            {
                "name": "Samsung",
                "req": "Mandatory"
            },
            {
                "name": "Roku",
                "req": "16x9 series or program 2x3 movie poster Mandatory"
            },
            {
                "name": "Plex",
                "req": "2x3 mandatory 16x9 optional"
            },
            {
                "name": "Sling",
                "req": "16x9 images mandatory for series/show level Thumbnail images preferred"
            },
            {
                "name": "STIRR",
                "req": ""
            },
            {
                "name": "Tivo",
                "req": "16x9 Mandatory (minimum 1920x1080)"
            },
            {
                "name": "Rakuten",
                "req": "16x9 image mandatory with min 1920x1080 resolution"
            },
            {
                "name": "Vizio",
                "req": "2x3 mandatory 16x9 optional"
            },
            {
                "name": "Gracenote",
                "req": "2"
            }
        ]
    },
    {
        "name": "Image Rights",
        "prop": "image_rights",
        "description": "If this is licensed| validity start and end",
        "platforms": [
            {
                "name": "Samsung",
                "req": ""
            },
            {
                "name": "Roku",
                "req": ""
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
                "req": "Mandatory"
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
                "req": "2"
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
                "req": ""
            },
            {
                "name": "Roku",
                "req": ""
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
                "req": "Mandatory"
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
                "req": "2"
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
                "req": ""
            },
            {
                "name": "Sling",
                "req": ""
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
                "req": "2"
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
                "req": ""
            },
            {
                "name": "Sling",
                "req": ""
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
                "req": ""
            },
            {
                "name": "Gracenote",
                "req": "2"
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
                "req": "Mandatory"
            },
            {
                "name": "Roku",
                "req": "Mandatory for kids directed content"
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
                "req": "Preferred"
            },
            {
                "name": "Rakuten",
                "req": "Mandatory Required for the country delivering to"
            },
            {
                "name": "Vizio",
                "req": "Mandatory"
            },
            {
                "name": "Gracenote",
                "req": "2"
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
                "req": "Mandatory"
            },
            {
                "name": "Roku",
                "req": "Mandatory for kids directed content"
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
                "req": "Preferred"
            },
            {
                "name": "Rakuten",
                "req": "Mandatory Required for the country delivering to"
            },
            {
                "name": "Vizio",
                "req": "Mandatory"
            },
            {
                "name": "Gracenote",
                "req": "2"
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
                "req": ""
            },
            {
                "name": "Roku",
                "req": ""
            },
            {
                "name": "Plex",
                "req": ""
            },
            {
                "name": "Sling",
                "req": "Preferred"
            },
            {
                "name": "STIRR",
                "req": ""
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
                "req": ""
            },
            {
                "name": "Gracenote",
                "req": "2"
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
                "req": ""
            },
            {
                "name": "Roku",
                "req": ""
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
                "req": "Mandatory"
            },
            {
                "name": "Tivo",
                "req": "Mandatory"
            },
            {
                "name": "Rakuten",
                "req": "Required"
            },
            {
                "name": "Vizio",
                "req": ""
            },
            {
                "name": "Gracenote",
                "req": "2"
            }
        ]
    },
    {
        "name": "Roku Channel Logos",
        "prop": "channel_logos",
        "description": "",
        "platforms": [
            {
                "name": "Samsung",
                "req": "??"
            },
            {
                "name": "Roku",
                "req": "Mandatory"
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
                "req": "2"
            }
        ]
    },
    {
        "name": "Feed Json with description on Channels",
        "prop": "feed",
        "description": "",
        "platforms": [
            {
                "name": "Samsung",
                "req": ""
            },
            {
                "name": "Roku",
                "req": "Mandatory"
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
                "req": "Required"
            },
            {
                "name": "Vizio",
                "req": ""
            },
            {
                "name": "Gracenote",
                "req": "2"
            }
        ]
    },
    {
        "name": "Duration",
        "prop": "duration",
        "description": "",
        "platforms": [
            {
                "name": "Samsung",
                "req": ""
            },
            {
                "name": "Roku",
                "req": ""
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
                "req": "2"
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
                "req": ""
            },
            {
                "name": "Roku",
                "req": ""
            },
            {
                "name": "Plex",
                "req": ""
            },
            {
                "name": "Sling",
                "req": "Mandatory"
            },
            {
                "name": "STIRR",
                "req": ""
            },
            {
                "name": "Tivo",
                "req": "Mandatory"
            },
            {
                "name": "Rakuten",
                "req": ""
            },
            {
                "name": "Vizio",
                "req": "Mandatory"
            },
            {
                "name": "Gracenote",
                "req": "2"
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
                "req": ""
            },
            {
                "name": "Roku",
                "req": "kidsdirected tag is mandatory"
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
                "req": "2"
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
                "req": ""
            },
            {
                "name": "Roku",
                "req": ""
            },
            {
                "name": "Plex",
                "req": ""
            },
            {
                "name": "Sling",
                "req": "Mandatory"
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
                "req": "2"
            }
        ]
    },
    {
        "name": "",
        "prop": "",
        "description": "",
        "platforms": [
            {
                "name": "Samsung",
                "req": ""
            },
            {
                "name": "Roku",
                "req": ""
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
                "req": "2"
            }
        ]
    },
]);