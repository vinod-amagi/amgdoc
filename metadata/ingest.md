## Ingest Methods

The section describes the different methods for ingesting metadata to Amagi Services. The method is largely classified as Push and Pull methods.

![Amagi Metadata Services](https://vinod-amagi.github.io/amgdoc/metadata/metadata_ingest_svc.png)


### Push

In this method, content providers are provided all four methods for ingesting metadata to Amagi Metadata Service. The input metadata formats are published and maintained by Amagi Metadata service. These formats are available here (TBD).

These methods are:

1. **S3 Upload**

2. **SFTP Upload**

3. **HTTP Post Endpoint**

4. **Simple Web page supporting multiple metadata**

### S3 Upload

All metadata upload for all customers are processed through a common AWS S3 Bucket.

Directories
* Customer

  A directory is created for each customer

* Account

  A directory is created under “Customer” directory for each account for a customer

* ToProcess
  
  Customer ingests metadata input files to “ToProcess” directory

* Processed

  Processed metadata is moved to “Processed” directory
  
* Errors
  
  Metadata with error is moved to “Errors” directory
