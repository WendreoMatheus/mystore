import 'dotenv/config'

import cors from 'cors'
import express from 'express'
import morgan from 'morgan'

import router from '../routes/index.router'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(router)

export default app
