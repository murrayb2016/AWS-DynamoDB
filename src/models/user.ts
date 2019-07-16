import dynamoose from "dynamoose"; 

const userSchema = new dynamoose.Schema({
    name: {
        type: String, 
        required: true,
        trim: true
    }
});

const User = dynamoose.model('User', userSchema); 

export {User}; 