import {Router} from "express";
import EventModel from "../Models/Event.js";


const router = new Router()

router.post('/', async (req, res) => {
    try {
        const {userid} = req.headers;
        const {title, description, startDate, endDate} = req.body

        const candidate = await EventModel.findOne({startDate, user: userid})

        if(candidate) {
            return res.status(500).json({
                message: "event on this date already exist",
                candidate
            })
        }

        const event = await EventModel.create({
            title,
            description,
            startDate,
            endDate,
            user: userid
        })

        res.status(200).json({
            message: "Event created successfully",
            event,
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: "Something went wrong while creating event",
            err
        })
    }
})

router.get('/', async (req, res) => {
    try {
        const {userid} = req.headers;

        const events = await EventModel.find({user: userId})

        if(!events) {
            return res.status(404).json({
                message: "events not found"
            })
        }

        res.status(200).json({
            message: "Events got successfully",
            events
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: "Something went wrong while getting post",
            err
        })
    }
})

export default router