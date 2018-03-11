Send A Feedback using Aggregation Service - Data Driven Positive Tests Specification
====================================================================================
Date Created    : 03/04/2018
Version         : 1.0.0
Owner      	    : Osanda Deshan
Description  	: This is an executable specification file which follows markdown syntax. Every heading in this file denotes a scenario. Every bulleted point denotes a step.


tags: feedback, send_feedback-positive_tests, positive


table: /resources/data_driven_test_csv/send_feedback/send_feedback_using_aggregation_service.csv



* Given that a user needs to invoke <api>
* And the user set the request authentication configurations as follows
     |Configuration                                                     |Configuration Value            |
     |------------------------------------------------------------------|-------------------------------|
     |Is authentication required?                                       |Yes                            |
     |Do you need to retrieve the access token from the text file?      |Yes                            |
     |Provide the access token if you need to authorize the API manually|N/A                            |



Send a feedback using valid payload
-----------------------------------
* And the user set the request attributes as follows
     |Attribute Value In JSON Template|Attribute Value To Be Set               |
     |--------------------------------|----------------------------------------|
     |#comment                        |<comment>                               |
     |#username                       |<username>                              |
     |#rating                         |<rating>                                |
     |#appId                          |<appId>                                 |
     |#email                          |<email>                                 |
     |#appName                        |<appName>                               |
* When the user invokes the API
* Then the status code for the request is "201"
* And the JSON Path Assertions for the response should be equal to the following
     |JSON Path                          |Value                                   |
     |-----------------------------------|----------------------------------------|
     |$.status                           |Success                                 |
     |$.code                             |201                                     |
     |$.message.n                        |1                                       |
     |$.message.ok                       |1                                       |
