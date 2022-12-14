import getConfig from 'next/config';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookie from 'cookie';
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const { serverRuntimeConfig } = getConfig();

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {email, password} = req.body

  if(email == null) {
    res.status(400).send({error: 'Email is empty! Fill a email'})
    return;
  }
  if(password == null) {
    res.status(400).send({error: 'Password is empty! Fill a password'})
    return;
  }

  const user = await prisma.user.findUnique({
    where: {
      email,
    }
  })
  if(user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign({
      id: user.id,
      email: user.email,
      time: Date.now(),
    }, serverRuntimeConfig.TOKEN_SECRET, {expiresIn: '12h'})
    res.setHeader(
      'Set-Cookie',
      cookie.serialize(serverRuntimeConfig.COOKIE_NAME, token, {  
        httpOnly: true,
        maxAge: 8 * 3600,
        path: '/signin',
        secure: process.env.NODE_ENV === 'production',
      })
    )
    res.status(200).json(user)
  } else {
    res.status(401).send({error: 'Email or password are wrong!'})
  }
}