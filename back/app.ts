import express from 'express'
import ezServe from 'ez-serve'
import * as dot from 'dotenv'

import { Routes } from './src/Route'
import { Middleware } from './src/Middleware'

dot.config()

const app = express()

const port = Number(process.env.PORT) || 3000

Middleware(app)
Routes(app)
ezServe(app, port)
