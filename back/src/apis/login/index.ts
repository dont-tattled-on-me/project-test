import { Express, Request, Response } from 'express'

import { ResponseInterface } from '../../modules/interfece/response'
import { mockData } from '../../modules/mocks/basedData'

interface RespInt extends ResponseInterface {
  payload?: {
    username: string
    firstName: string
    lastName: string
    position: string
  }
}

export async function LoginAPI(app: Express) {
  app.post('/api/login', (req: Request, res: Response) => {
    const body = req.body
    let resp: RespInt

    if (body.username == 'admin' && body.password == 'admin') {
      resp = {
        status: 1,
        message: 'Authorized success',
        payload: mockData,
      }
    } else {
      resp = {
        status: 0,
        message: 'Unauthorized',
      }
    }

    res.send(resp)
  })
}
