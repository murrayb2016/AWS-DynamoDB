const AWS = require("aws-sdk");
const dynamoose = require('dynamoose');

const createDynamooseInstance = () => {
    dynamoose.AWS.config.update({
      accessKeyId: 'xxxx',
      secretAccessKey: 'xxxx',
      region: 'us-east-1'
    });
    dynamoose.local(); // This defaults to "http://localhost:8000"
}

const createAndGetCat = async () => {
    const Cat = dynamoose.model('Cat', {id: Number, name: String});
    const garfield = new Cat({id: 666, name: 'Garfield'});
    await garfield.save();
    const badCat = await Cat.get(666);
    return badCat;
}

const main = async () => {
    createDynamooseInstance();
    const badCat = await createAndGetCat();
    console.log('Never trust a smiling cat. - ' + badCat.name);
}

main();