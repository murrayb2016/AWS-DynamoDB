** This document assumes you have AWS CLI, Docker, and VisualStudio Code downloaded and configured**

DynamoDB Local 

Follow instructions: https://hub.docker.com/r/amazon/dynamodb-local/ 

Steps: 

1) In the terminal run 
    a) docker pull amazon/dynamodb-local
    b) docker run -p 8000:8000 amazon/dynamodb-local
2) Go to http://localhost:8000/shell/ and ensure the shell is running 

NPM 

This project contains the base NPM packages: dynamoose, aws-sdk

Steps: 

1) Clone project to local enviornment 
2) In the terminal run 
    a) npm init 
    b) npm i 






