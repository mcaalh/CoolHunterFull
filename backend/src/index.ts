import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import helmet from 'helmet'

import { Settings } from '../settings';
import blogRouter from './blogs/blogs.router';
import categoryRouter from './categories/categories.router';
import authRouter from './auth/auth.router';

require('dotenv').config()
const api: string = Settings.API_URL

const port: number = Settings.PORT || 8000

const app = express()

/** 
 * App Configuration
**/

app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())
app.use(helmet())
if (Settings.NODE_ENV === 'development') {
    app.use(cors({
        origin: `${Settings.CLIENT_URL}`
    }));
}

app.options('*', cors())


//connect to  the db
mongoose.connect(Settings.DATABASE_CLOUD, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    dbName: 'coolHunterDb'
})
    .then(() => console.log('DB connected'))
    .catch((err) => {
    console.log(`u've got error: ${err}`)
});

// routes

//Auth
app.use(api, authRouter)


//Blogs
app.use(api, blogRouter)

//Categories
app.use(api, categoryRouter)
//Users

//Projects

/** 
 * Server Activation
 */

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})