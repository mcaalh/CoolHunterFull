import { Router } from 'express'
import * as CategoriesController from './categories.controller'

const categoryRouter = Router()

categoryRouter.get('/categories', CategoriesController.findAll)

categoryRouter.post('/categories/new', CategoriesController.create)

categoryRouter.delete('/categories/:id', CategoriesController.remove)

categoryRouter.put('/categories/:id', CategoriesController.update)

export default categoryRouter