import { Request, Response } from 'express'
import { Blog } from './blogs.model'

export const findAll = async (req: Request, res: Response) => {
    const blogsList = await Blog.find();
    if (!blogsList) {
        res.status(500).json({ success: false })
    }
    res.send(blogsList)
}

export const create = (req: Request, res: Response) => {
    const newBlog = new Blog({
        title:  req.body.title, // String is shorthand for {type: String}
        author: req.body.author,
        image: req.body.image,
        description:   req.body.description,
        published: req.body.published
    })
    newBlog.save()
        .then((createdBlog) => {
        res.status(201).json(createdBlog)
        })
        .catch((err) => {
            res.status(500).json({
                error: err,
                success: false
        })
    })
}

export const remove = async (req: Request, res: Response) => {
    Blog.findByIdAndRemove(req.params.id)
        .then(blog => {
            if (blog) {
            return res.status(200).json({success: true, message: 'the blog post is deleted'})
        }
        }).catch((err) => {
            return res.status(400).json({
                success: false,
                error: err
        })
    })
}
