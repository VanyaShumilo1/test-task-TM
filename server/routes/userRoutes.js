import {Router} from "express";
import UserModel from "../Models/User.js";


const router = new Router()

router.post('/', async (req, res) => {
    try {
        const {firstName, lastName, email, phoneNumber} = req.body
        const candidate = await UserModel.findOne({email: email})

        if (candidate) {
            return res.status(500).json({
                message: "user already exist",
                user: candidate,
            })
        }

        const user = await UserModel.create({
            firstName,
            lastName,
            email,
            phoneNumber,
        })

        res.status(200).json({
            message: "User created successfully",
            user,
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: "Something went wrong while creating user",
            err
        })
    }
})

router.get('/', async (req, res) => {
    try {

        console.log(req.query)
        const offset = Number(req.query.offset)
        const limit = Number(req.query.limit)

        const totalUsers = await UserModel.find()
        const users = await UserModel.find().skip(offset*limit).limit(limit)

        res.status(200).json({
            message: "Users got successfully",
            users,
            totalUsers: totalUsers.length
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: "Something went wrong while getting users",
            err
        })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params
        const user = await UserModel.findOne({_id: id})

        if(!user) {
            return res.status(404).json({
                message: "User not found",
            })
        }

        res.status(200).json({
            message: "User got successfully",
            user
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: "Something went wrong while getting user",
            err
        })
    }
})

export default router