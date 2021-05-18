import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
    title:  String, // String is shorthand for {type: String}
    author: String,
    image: String,
    description:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    published: String,
    meta: {
      votes: Number,
      favs:  Number
    }
});

export const Blog = mongoose.model('Blog', blogSchema)