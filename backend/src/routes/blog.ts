import { Router } from 'express'
import { Settings } from '../../settings'
import { timeRes } from '../controllers/blogController'

const blogRouter = Router()
const api: string = Settings.API_URL

blogRouter.get('/', timeRes)

export default blogRouter