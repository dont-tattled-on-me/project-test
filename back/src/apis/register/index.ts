import { Express, Request, Response } from 'express'

import { ResponseInterface } from '../../modules/interfece/response'

interface RespInt extends ResponseInterface {
  payload?: {
    firstName: string
    lastName: string
    position: string
    username: string
    password: string
  }
}

export async function RegisterAPI(app: Express) {
  app.post('/api/register', (req: Request, res: Response) => {
    const body = req.body
    let resp: RespInt

    if (body.username == 'admin') {
      resp = {
        status: 0,
        message: `User existed..`,
      }
    } else {
      resp = {
        status: 1,
        message: `This is just a mocking back-end so this won't save to db..`,
        payload: {
          firstName: body.firstName,
          lastName: body.lastName,
          position: body.position,
          username: body.username,
          password: body.password,
        },
      }
    }

    res.send(resp)
  })
}
