import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

// Middleware route
export const validateRoute = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const {TOKEN_SECRET: token} = req.cookies;
    if(token) {
      let user
      try {
        const {id} = jwt.verify(token, process.env['COOKIE_NAME'])
        user = await prisma.user.findUnique({
          where: {id},
        })
        if(!user) {
          throw new Error('This is a not real user!')
        }
      }
      catch (error) {
        console.log(error)
        res.status(401)
        res.json({error: 'Not Authorized!'})
        return
      }
      return handler(req, res, user)
    }
    res.status(401)
    res.json({error: 'Not Authorized!'})
  }
}