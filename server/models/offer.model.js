const mongoose = require("mongoose")
const Schema = mongoose.Schema

const offerSchema = new Schema({
    price: {
        type: Number,
        required: true
    },
    local: { type: Schema.Types.ObjectId, ref: "Local", required: true},
    event: {type: Schema.Types.ObjectId, ref: "Event", required: true},
    description: {
        type: String
    },
    status: {
        type: String,
        enum: ["pending", "accepted", "rejected"],
        default: "pending"
    }
}, {
    timestamps: true
})

const Offer = mongoose.model("Offer", offerSchema)

module.exports = Offer