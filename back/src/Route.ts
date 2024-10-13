import { Express, Request, Response } from 'express'
import { LoginAPI } from './apis/login'
import { RegisterAPI } from './apis/register'

export async function Routes(app: Express) {
  app.get('/', (req: Request, res: Response) => {
    res.send('hey')
  })

  await LoginAPI(app)
  await RegisterAPI(app)
}
