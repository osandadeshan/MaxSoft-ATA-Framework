Form-Data Example Specification
===============================
Project Name : MaxSoft-IntelliAPI
Developer    : Osanda Deshan
Version      : 1.0.0
Date         : 6/2/2018
Time         : 3:02 PM
Description  : This is an executable specification file which follows markdown syntax. Every heading in this file denotes a scenario. Every bulleted point denotes a step.



Get Google OAuth Access token
-----------------------------
* Given that a user needs to invoke "Get Google OAuth Access Token using Refresh Token"
* And the user set the form-data key value pairs as follows
     |Key            |Value                                                                      |
     |---------------|---------------------------------------------------------------------------|
     |grant_type     |refresh_token                                                              |
     |client_id      |211897666304-ii96f12k6tf8h5k15sp41reo92osrgnm.apps.googleusercontent.com   |
     |client_secret  |fILuyCiaWDRElAP6MdWcJIdK                                                   |
     |refresh_token  |1/3wu2nvsunxK3mYRDTPun_8t8GeBEKkY--LYfEr9SIvU                              |
* When the user invokes the API
* Then the status code for the request is "200"
* And the JSON Path Assertions for the response should be equal to the following
     |JSON Path     |Expected Result|
     |--------------|---------------|
     |$.expires_in  |3600           |
     |$.token_type  |Bearer         |



Upload file
-----------
* Given that a user needs to invoke "Upload File"
* And the user set the request authentication configurations as follows
     |Configuration                                                     |Configuration Value            |
     |------------------------------------------------------------------|-------------------------------|
     |Is authentication required?                                       |Yes                            |
     |Do you need to retrieve the access token from the text file?      |Yes                            |
     |Provide the access token if you need to authorize the API manually|N/A                            |
* And the user set the form-data key value pairs as follows
     |Key                |Value                             |
     |-------------------|----------------------------------|
     |title              |DOCX file                         |
     |creatorId          |Osanda                            |
     |creatorPlatform    |Web                               |
     |creatoredSource    |File                              |
     |creatoredType      |Auto                              |
     |deckId             |5b123fa92e02d85d8b54c7b6          |
     |isExpert           |false                             |
     |examDate           |                                  |
     |userId             |osanda                            |
* And the user set the multipart file key value pairs as follows
     |Key            |File Path                                    |Mime Type                                                               |
     |---------------|---------------------------------------------|------------------------------------------------------------------------|
     |file           |/resources/docx_files/DOCX file1.docx        |application/vnd.openxmlformats-officedocument.wordprocessingml.document |
* When the user invokes the API
* Then the status code for the request is "200"
* And the JSON Path Assertions for the response should be equal to the following
     |JSON Path     |Expected Result|
     |--------------|---------------|
     |$.length()    |35             |