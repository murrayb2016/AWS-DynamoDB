** This document assumes you have AWS CLI, Docker, and VisualStudio Code downloaded and configured**

DynamoDB Local 

Follow instructions: https://hub.docker.com/r/amazon/dynamodb-local/ 

Steps: 

1) In the terminal run 
    a) docker pull amazon/dynamodb-local
    b) docker run -p 8000:8000 amazon/dynamodb-local
2) Go to http://localhost:8000/shell/ and ensure the shell is running 

NPM 

Main npm packages being used: 

a) dynamoose
b) aws-sdk
c) typescript
d) express
e) handlebars

Steps: 

1) Clone project to local enviornment 
2) In the terminal run 
    a) npm init 
    b) npm i 

Running App

This app can be started by two simple commands

a) Compile the Typescript 
    a) npm run tsc
    b) npm run index

b) Run examples that can be easily written to a Typescript file in dynamo-db-examples

This app is meant to be a starting point with the basic configuration with our enviornment. 




