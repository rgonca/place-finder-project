const mongoose = require("mongoose")
const Schema = mongoose.Schema

const eventSchema = new Schema({

    owner: { type: Schema.Types.ObjectId, ref: "User" },
    name: {
        type: String,
        required: true,
        maxlength: 40,
        minlength: 2,
        unique: true, 
    },
    image: {
        type: String,
        default: "./images/calendar icon.jpg"
    },
    description: {
        type: String,
        required: true,
        maxlength: 500
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    typeOfLocal: {
        type: String,
        enum: ["restaurant", "gym", "hotel", "others"]
    },
    avatar: {
        type: String, 
        default: ""
    },
    theme: {
        type: [String],
        enum: ["sport", "music", "learning", 'technology', 'health and wellness', 'kids', 'adults', 'photography', 'art', 'food', 'languajes', 'culture', 'cinema', 'games', 'fashion', 'dance', 'bussiness'],
        minlength: 1
    },

    acceptedOffer: { type: Schema.Types.ObjectId, ref: "Offer" },

    participants: [{ type: Schema.Types.ObjectId, ref: "User" }]

}, {
    timestamps: true
})

const Event = mongoose.model("Event", eventSchema)

module.exports = Event