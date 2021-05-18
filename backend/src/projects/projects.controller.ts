import { Request, Response } from "express";

import { Project } from './projects.model'

export const findAll = async(req: Request, res: Response) => {
    let categoriesList = await Project.find()
    if (!categoriesList) {
        res.status(500).json({ success: false })
    }
    res.send(categoriesList)
}

export const create = (req: Request, res: Response)=> {
    const newProject = new Project({
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        categories: req.body.categories,
        date: req.body.date,
        location: req.body.location,
        createdBy: req.body.createdBy,
    })
    newProject.save()
        .then((createdProject) => {
        res.status(201).json(createdProject)
        })
        .catch((err) => {
            res.status(500).json({
                error: err,
                success: false
        })
    })
}

export const remove = async (req: Request, res: Response) => {
    Project.findByIdAndRemove(req.params.id)
        .then(project => {
            if (project) {
            return res.status(200).json({success: true, message: 'the project is deleted'})
        }
        }).catch((err) => {
            return res.status(400).json({
                success: false,
                error: err
        })
    })
}

export const update = async (req: Request, res: Response) => {
    Project.findByIdAndUpdate(
        req.params.id,
        {
            name:  req.body.name,
            icon: req.body.icon,
            color: req.body.color
        })
        .then(project => {
            if (project) {
            return res.status(200).json({success: true, message: `the project ${project.id} is updated`})
        }
        }).catch((err) => {
            return res.status(400).json({
                success: false,
                error: err
        })
    })
}