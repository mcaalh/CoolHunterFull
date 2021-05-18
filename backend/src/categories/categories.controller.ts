import { Request, Response } from "express";

import { Category } from './categories.model'

export const findAll = async(req, res) => {
    let categoriesList = await Category.find()
    if (!categoriesList) {
        res.status(500).json({ success: false })
    }
    res.send(categoriesList)
}

export const create = (req: Request, res: Response)=> {
    const newCategory = new Category({
        name:  req.body.name,
        icon: req.body.icon,
        color: req.body.color
    })
    newCategory.save()
        .then((createdCategory) => {
        res.status(201).json(createdCategory)
        })
        .catch((err) => {
            res.status(500).json({
                error: err,
                success: false
        })
    })
}

export const remove = async (req: Request, res: Response) => {
    Category.findByIdAndRemove(req.params.id)
        .then(category => {
            if (category) {
            return res.status(200).json({success: true, message: 'the category is deleted'})
        }
        }).catch((err) => {
            return res.status(400).json({
                success: false,
                error: err
        })
    })
}

export const update = async (req: Request, res: Response) => {
    Category.findByIdAndUpdate(
        req.params.id,
        {
            name:  req.body.name,
            icon: req.body.icon,
            color: req.body.color
        })
        .then(category => {
            if (category) {
            return res.status(200).json({success: true, message: `the category ${category.id} is updated`})
        }
        }).catch((err) => {
            return res.status(400).json({
                success: false,
                error: err
        })
    })
}