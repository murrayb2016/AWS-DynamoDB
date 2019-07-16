import express from "express"
import { User } from "../models/user"  

const userRouter = express.Router();

userRouter.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        res.status(201).send(); 
    } catch (e) {
        res.status(400).send(e)
    }
});

export {userRouter};