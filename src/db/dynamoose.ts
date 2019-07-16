require("aws-sdk")
import dynamoose from "dynamoose";

process.env['AWS_ACCESS_KEY_ID'] = 'xxxx';
process.env['AWS_SECRET_ACCESS_KEY'] = 'xxxx';
process.env['AWS_REGION'] = 'us-east-1';

const createDynamooseInstance = () => {
    dynamoose.AWS.config.update({
      accessKeyId: 'xxxx',
      secretAccessKey: 'xxxx',
      region: 'us-east-1'
    });
    dynamoose.local(); // This defaults to "http://localhost:8000"
}

const main = async () => {
  createDynamooseInstance();
}

main(); 
