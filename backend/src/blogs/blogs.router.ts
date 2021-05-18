import { Router } from 'express'
import * as blogController from './blogs.controller'

const blogRouter = Router()

blogRouter.get('/blogs', blogController.findAll)

blogRouter.post('/blogs/new', blogController.create)

blogRouter.delete('/blogs/:id', blogController.remove)

export default blogRouter