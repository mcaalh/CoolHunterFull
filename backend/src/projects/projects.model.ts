import { Schema, model } from 'mongoose'

const projectSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    images: [{
        type: String
    }],
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    date: {
        type: Date
    },
    coolRating: {
        type: Number,
        default: 0
    },
    location: {
        type: String,
        required: true
    },
    donationHistory: [{
        type: Schema.Types.ObjectId,
        ref: 'Donation'
    }],
    raised: {
        type: Number
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }

})

export const Project = model('Project', projectSchema)