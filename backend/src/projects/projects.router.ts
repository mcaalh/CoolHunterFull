import { Router } from 'express'
import * as ProjectsController from './projects.controller'

const projectRouter = Router()

projectRouter.get('/projects', ProjectsController.findAll)

projectRouter.post('/projects/new', ProjectsController.create)

projectRouter.delete('/projects/:id', ProjectsController.remove)

projectRouter.put('/projects/:id', ProjectsController.update)

export default projectRouter