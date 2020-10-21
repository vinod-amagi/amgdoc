## What is metadata?

Metadata represents data that describes a media content. The metadata varies in details, and it could be one of the following details provided below, but not necessarily confining to these details:-

* Title of a content

* Information required for EPG (Electronic Programming Guide)

* Information required for delivering content for Video on Demand

## How is metadata used by Amagi services?

| Amagi Service | Service Description | Metadata | Remarks |
|----------------|----------------|----------------|----------------|
| CLOUDPORT | Linear Channel Playout | Title |  |
|   |   | Segments | Segements |
|   |   | V-Chip |  |
|   |   | AFD | Active Field Descriptor |
| EPG | Electronic Programming Guide | Depending on MVPD platform | As per EPG specification from MVPD  |
| VoD | Video on Demand Delivery | Depending on MVPD platform | As per requirements for VoD Delivery  |
| Analytics | Analytics | Title |  |
|   |   | Content Id | External Content Id |
