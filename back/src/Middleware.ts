import { Express } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

export async function Middleware(app: Express) {
  const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
  }

  app.use(cors(corsOptions))

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
}
