import { Router } from 'express'
import * as AuthController from './auth.controller'
import { runValidation } from '../validators/index';
import { userSignupValidator } from '../validators/auth';

const authRouter = Router()

authRouter.post('/signup', userSignupValidator, runValidation, AuthController.signup)

// authRouter.post('/projects/new', ProjectsController.create)

// authRouter.delete('/projects/:id', ProjectsController.remove)

// authRouter.put('/projects/:id', ProjectsController.update)

export default authRouter