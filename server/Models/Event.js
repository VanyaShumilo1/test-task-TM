import mongoose, {Schema} from "mongoose";

const EventModel = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
        min: Date.now() -  (3600 * 1000 * 24)
    },
    endDate: {
        type: Date,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    }
}, {timestamps: true})

export default mongoose.model('Event', EventModel)