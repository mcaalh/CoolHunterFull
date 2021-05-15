import * as express from 'express'
import * as morgan from 'morgan'
import * as bodyParser from 'body-parser'
import * as cookieParser from 'cookie-parser'
import * as cors from 'cors'
import * as mongoose from 'mongoose'

import { Settings } from '../settings';
import blogRouter from './routes/blog';
import db = require('./services/queries')
require('dotenv').config()
const api: string = Settings.API_URL

//get app
const app = express()

//get the db
mongoose.connect(Settings.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => console.log('DB connected'));

//middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())

// routes middleware
app.use(api, blogRouter)

//cors
// if (Settings === 'development') {
//     app.use(cors({
//         origin: `${Settings.CLIENT_URL}`
//     }));
// }

//routes http://localhost:3000/api/v1/products


app.get(api + '/products', (req, res) => {
    const product = {
        id: 1,
        name: 'Best Restaurant in town',
        image: 'somess_url1'
    }
    res.send(product)
})

app.get(api + '/users', db.getUsers)
app.get(api + '/users/:id', db.getUserById)
app.post(api + '/users', db.createUser)
app.put(api + '/users/:id', db.updateUser)
app.delete(api + '/users/:id', db.deleteUser)

//port
const port:number = Settings.PORT || 8000

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})