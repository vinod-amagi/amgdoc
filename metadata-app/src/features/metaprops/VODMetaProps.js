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

const metaProps = (
    [
        {
            "name": "GUID or ID",
            "prop": "id",
            "description": "Content Id",
            "platforms": [
                {
                    "name": "YouTube",
                    "req": "Mandatory"
                },
                {
                    "name": "Philo",
                    "req": "Mandatory"
                },
                {
                    "name": "T-Mobile",
                    "req": "Mandatory"
                },
                {
                    "name": "Comcast",
                    "req": "Mandatory"
                },
                {
                    "name": "Sling",
                    "req": "Mandatory"
                },
                {
                    "name": "Xumo",
                    "req": "Mandatory"
                },
                {
                    "name": "Fubo",
                    "req": "Mandatory"
                }
            ]
        },
        {
            "name": "TMS ID",
            "prop": "tms_id",
            "description": "TMS ID from Gracenote",
            "platforms": [
                {
                    "name": "YouTube",
                    "req": "Mandatory"
                },
                {
                    "name": "Philo",
                    "req": "Mandatory"
                },
                {
                    "name": "T-Mobile",
                    "req": "Mandatory"
                },
                {
                    "name": "Comcast",
                    "req": "Mandatory"
                },
                {
                    "name": "Sling",
                    "req": "Optional"
                },
                {
                    "name": "Xumo",
                    "req": "Optional"
                },
                {
                    "name": "Fubo",
                    "req": "Mandatory"
                }
            ]
        },
        {
            "name": "Title",
            "prop": "title",
            "description": "Series / Movie title",
            "platforms": [
                {
                    "name": "YouTube",
                    "req": "Mandatory"
                },
                {
                    "name": "Philo",
                    "req": "Mandatory"
                },
                {
                    "name": "T-Mobile",
                    "req": "Mandatory"
                },
                {
                    "name": "Comcast",
                    "req": "Mandatory"
                },
                {
                    "name": "Sling",
                    "req": "Mandatory"
                },
                {
                    "name": "Xumo",
                    "req": "Mandatory"
                },
                {
                    "name": "Fubo",
                    "req": "Mandatory"
                }
            ]
        },
        {
            "name": "Description",
            "prop": "description",
            "description": "Short description of the series/movie",
            "platforms": [
                {
                    "name": "YouTube",
                    "req": "Mandatory"
                },
                {
                    "name": "Philo",
                    "req": "Mandatory"
                },
                {
                    "name": "T-Mobile",
                    "req": "Mandatory"
                },
                {
                    "name": "Comcast",
                    "req": "Mandatory"
                },
                {
                    "name": "Sling",
                    "req": "Mandatory"
                },
                {
                    "name": "Xumo",
                    "req": "Mandatory"
                },
                {
                    "name": "Fubo",
                    "req": "Mandatory"
                }
            ]
        },
        {
            "name": "Genre",
            "prop": "genre",
            "description": "",
            "platforms": [
                {
                    "name": "YouTube",
                    "req": "Mandatory"
                },
                {
                    "name": "Philo",
                    "req": "Mandatory"
                },
                {
                    "name": "T-Mobile",
                    "req": "Mandatory"
                },
                {
                    "name": "Comcast",
                    "req": "Mandatory"
                },
                {
                    "name": "Sling",
                    "req": "Mandatory"
                },
                {
                    "name": "Xumo",
                    "req": "Not required"
                },
                {
                    "name": "Fubo",
                    "req": "Optional"
                }
            ]
        },
        {
            "name": "Category",
            "prop": "category",
            "description": "",
            "platforms": [
                {
                    "name": "YouTube",
                    "req": "Mandatory"
                },
                {
                    "name": "Philo",
                    "req": "Mandatory"
                },
                {
                    "name": "T-Mobile",
                    "req": "Mandatory"
                },
                {
                    "name": "Comcast",
                    "req": "Optional"
                },
                {
                    "name": "Sling",
                    "req": "Optional"
                },
                {
                    "name": "Xumo",
                    "req": "Mandatory"
                },
                {
                    "name": "Fubo",
                    "req": "Optional"
                }
            ]
        },
        {
            "name": "Keywords",
            "prop": "keywords",
            "description": "",
            "platforms": [
                {
                    "name": "YouTube",
                    "req": "Optional"
                },
                {
                    "name": "Philo",
                    "req": "Optional"
                },
                {
                    "name": "T-Mobile",
                    "req": "Optional"
                },
                {
                    "name": "Comcast",
                    "req": "Optional"
                },
                {
                    "name": "Sling",
                    "req": "Optional"
                },
                {
                    "name": "Xumo",
                    "req": "Mandatory"
                },
                {
                    "name": "Fubo",
                    "req": "Optional"
                }
            ]
        },
        {
            "name": "Original Air Date",
            "prop": "original_air_date",
            "description": "",
            "platforms": [
                {
                    "name": "YouTube",
                    "req": "Optional"
                },
                {
                    "name": "Philo",
                    "req": "Optional"
                },
                {
                    "name": "T-Mobile",
                    "req": "Mandatory"
                },
                {
                    "name": "Comcast",
                    "req": "Mandatory"
                },
                {
                    "name": "Sling",
                    "req": "Mandatory"
                },
                {
                    "name": "Xumo",
                    "req": "Not required"
                },
                {
                    "name": "Fubo",
                    "req": "Mandatory"
                }
            ]
        },
        {
            "name": "Published Date",
            "prop": "published_date",
            "description": "",
            "platforms": [
                {
                    "name": "YouTube",
                    "req": "Optional"
                },
                {
                    "name": "Philo",
                    "req": "Optional"
                },
                {
                    "name": "T-Mobile",
                    "req": "Optional"
                },
                {
                    "name": "Comcast",
                    "req": "Optional"
                },
                {
                    "name": "Sling",
                    "req": "Optional"
                },
                {
                    "name": "Xumo",
                    "req": "Optional"
                },
                {
                    "name": "Fubo",
                    "req": "Not required"
                }
            ]
        },
        {
            "name": "Rating",
            "prop": "rating",
            "description": "",
            "platforms": [
                {
                    "name": "YouTube",
                    "req": "Optional"
                },
                {
                    "name": "Philo",
                    "req": "Optional"
                },
                {
                    "name": "T-Mobile",
                    "req": "Optional"
                },
                {
                    "name": "Comcast",
                    "req": "Mandatory"
                },
                {
                    "name": "Sling",
                    "req": "Mandatory"
                },
                {
                    "name": "Xumo",
                    "req": "Mandatory"
                },
                {
                    "name": "Fubo",
                    "req": "Not required"
                }
            ]
        },
        {
            "name": "Rating Agency",
            "prop": "rating_agency",
            "description": "",
            "platforms": [
                {
                    "name": "YouTube",
                    "req": "Optional"
                },
                {
                    "name": "Philo",
                    "req": "Optional"
                },
                {
                    "name": "T-Mobile",
                    "req": "Optional"
                },
                {
                    "name": "Comcast",
                    "req": "Mandatory"
                },
                {
                    "name": "Sling",
                    "req": "Mandatory"
                },
                {
                    "name": "Xumo",
                    "req": "Mandatory"
                },
                {
                    "name": "Fubo",
                    "req": "Not required"
                }
            ]
        },
        {
            "name": "Director",
            "prop": "director",
            "description": "",
            "platforms": [
                {
                    "name": "YouTube",
                    "req": "Optional"
                },
                {
                    "name": "Philo",
                    "req": "Optional"
                },
                {
                    "name": "T-Mobile",
                    "req": "Optional"
                },
                {
                    "name": "Comcast",
                    "req": "Optional"
                },
                {
                    "name": "Sling",
                    "req": "Optional"
                },
                {
                    "name": "Xumo",
                    "req": "Not required"
                },
                {
                    "name": "Fubo",
                    "req": "Not required"
                }
            ]
        },
        {
            "name": "Actors",
            "prop": "actors",
            "description": "",
            "platforms": [
                {
                    "name": "YouTube",
                    "req": "Optional"
                },
                {
                    "name": "Philo",
                    "req": "Optional"
                },
                {
                    "name": "T-Mobile",
                    "req": "Optional"
                },
                {
                    "name": "Comcast",
                    "req": "Optional"
                },
                {
                    "name": "Sling",
                    "req": "Optional"
                },
                {
                    "name": "Xumo",
                    "req": "Not required"
                },
                {
                    "name": "Fubo",
                    "req": "Not required"
                }
            ]
        },
        {
            "name": "Series ID",
            "prop": "series_id",
            "description": "",
            "platforms": [
                {
                    "name": "YouTube",
                    "req": "Optional"
                },
                {
                    "name": "Philo",
                    "req": "Optional"
                },
                {
                    "name": "T-Mobile",
                    "req": "Mandatory"
                },
                {
                    "name": "Comcast",
                    "req": "Mandatory"
                },
                {
                    "name": "Sling",
                    "req": "Mandatory"
                },
                {
                    "name": "Xumo",
                    "req": "Mandatory"
                },
                {
                    "name": "Fubo",
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
                    "name": "YouTube",
                    "req": "Optional"
                },
                {
                    "name": "Philo",
                    "req": "Optional"
                },
                {
                    "name": "T-Mobile",
                    "req": "Optional"
                },
                {
                    "name": "Comcast",
                    "req": "Mandatory"
                },
                {
                    "name": "Sling",
                    "req": "Mandatory"
                },
                {
                    "name": "Xumo",
                    "req": "Not required"
                },
                {
                    "name": "Fubo",
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
                    "name": "YouTube",
                    "req": "Optional"
                },
                {
                    "name": "Philo",
                    "req": "Optional"
                },
                {
                    "name": "T-Mobile",
                    "req": "Mandatory"
                },
                {
                    "name": "Comcast",
                    "req": "Mandatory"
                },
                {
                    "name": "Sling",
                    "req": "Mandatory"
                },
                {
                    "name": "Xumo",
                    "req": "Not required"
                },
                {
                    "name": "Fubo",
                    "req": "Mandatory"
                }
            ]
        },
        {
            "name": "Episode Name",
            "prop": "episode_name",
            "description": "For episodic contents",
            "platforms": [
                {
                    "name": "YouTube",
                    "req": "Optional"
                },
                {
                    "name": "Philo",
                    "req": "Optional"
                },
                {
                    "name": "T-Mobile",
                    "req": "Optional"
                },
                {
                    "name": "Comcast",
                    "req": "Mandatory"
                },
                {
                    "name": "Sling",
                    "req": "Mandatory"
                },
                {
                    "name": "Xumo",
                    "req": "Mandatory"
                },
                {
                    "name": "Fubo",
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
                    "name": "YouTube",
                    "req": "Optional"
                },
                {
                    "name": "Philo",
                    "req": "Optional"
                },
                {
                    "name": "T-Mobile",
                    "req": "Mandatory"
                },
                {
                    "name": "Comcast",
                    "req": "Mandatory"
                },
                {
                    "name": "Sling",
                    "req": "Mandatory"
                },
                {
                    "name": "Xumo",
                    "req": "Mandatory"
                },
                {
                    "name": "Fubo",
                    "req": "Mandatory"
                }
            ]
        },
        {
            "name": "Show_Type (Series/Movies)",
            "prop": "show_type",
            "description": "Specify Series or Movies content",
            "platforms": [
                {
                    "name": "YouTube",
                    "req": "Optional"
                },
                {
                    "name": "Philo",
                    "req": "Optional"
                },
                {
                    "name": "T-Mobile",
                    "req": "Mandatory"
                },
                {
                    "name": "Comcast",
                    "req": "Optional"
                },
                {
                    "name": "Sling",
                    "req": "Mandatory"
                },
                {
                    "name": "Xumo",
                    "req": "Not required"
                },
                {
                    "name": "Fubo",
                    "req": "Mandatory"
                }
            ]
        },
        {
            "name": "Episode Image",
            "prop": "episode_image",
            "description": "Image for Episode",
            "platforms": [
                {
                    "name": "YouTube",
                    "req": "Optional"
                },
                {
                    "name": "Philo",
                    "req": "Optional"
                },
                {
                    "name": "T-Mobile",
                    "req": "Optional"
                },
                {
                    "name": "Comcast",
                    "req": "Optional"
                },
                {
                    "name": "Sling",
                    "req": "Mandatory"
                },
                {
                    "name": "Xumo",
                    "req": "Mandatory",
                    "info": "One 16:9 Mandatory. Format: JEPG/PNG"
                },
                {
                    "name": "Fubo",
                    "req": "Mandatory",
                    "info": "Format: JPEG. Without text"
                }
            ]
        },
        {
            "name": "Series Image",
            "prop": "series_image",
            "description": "Image for Series",
            "platforms": [
                {
                    "name": "YouTube",
                    "req": "Optional"
                },
                {
                    "name": "Philo",
                    "req": "Optional"
                },
                {
                    "name": "T-Mobile",
                    "req": "Optional"
                },
                {
                    "name": "Comcast",
                    "req": "Optional"
                },
                {
                    "name": "Sling",
                    "req": "Mandatory"
                },
                {
                    "name": "Xumo",
                    "req": "Optional",
                    "info": "One 16:9 Mandatory. Format: JEPG/PNG"
                },
                {
                    "name": "Fubo",
                    "req": "Mandatory",
                    "info": "Format: JPEG. With text"
                }
            ]
        },
        {
            "name": "Movie Image",
            "prop": "movie_image",
            "description": "Image for Movie",
            "platforms": [
                {
                    "name": "YouTube",
                    "req": "Optional"
                },
                {
                    "name": "Philo",
                    "req": "Optional"
                },
                {
                    "name": "T-Mobile",
                    "req": "Optional"
                },
                {
                    "name": "Comcast",
                    "req": "Optional"
                },
                {
                    "name": "Sling",
                    "req": "Optional"
                },
                {
                    "name": "Xumo",
                    "req": "Mandatory",
                    "info": "One 16:9 Mandatory. Format: JEPG/PNG"
                },
                {
                    "name": "Fubo",
                    "req": "Mandatory",
                    "info": "Format: JPEG. With and without text"
                }
            ]
        },
        {
            "name": "Closed Captions",
            "prop": "captions",
            "description": "",
            "platforms": [
                {
                    "name": "YouTube",
                    "req": "Optional"
                },
                {
                    "name": "Philo",
                    "req": "Optional"
                },
                {
                    "name": "T-Mobile",
                    "req": "Mandatory"
                },
                {
                    "name": "Comcast",
                    "req": "Optional"
                },
                {
                    "name": "Sling",
                    "req": "Optional"
                },
                {
                    "name": "Xumo",
                    "req": "Mandatory"
                },
                {
                    "name": "Fubo",
                    "req": "Optional"
                }
            ]
        }
    ]
)