"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dynamoose_1 = __importDefault(require("dynamoose"));
var userSchema = new dynamoose_1.default.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
});
var User = dynamoose_1.default.model('User', userSchema);
exports.User = User;
