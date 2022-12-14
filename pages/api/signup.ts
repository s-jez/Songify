import getConfig from 'next/config';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const { serverRuntimeConfig } = getConfig();

const prisma = new PrismaClient();


export default async (req: NextApiRequest, res: NextApiResponse) => {
  const salt = bcrypt.genSaltSync()
  const {name, email, password, first_name, last_name, age, country} = req.body

  let user;

  try {
    user = await prisma.user.create({
      data: {
        name,
        email,
        password: bcrypt.hashSync(password, salt),
        first_name,
        last_name,
        age,
        country
      }
    })
  } catch(e) {
    res.status(401)
    res.json({error: 'User already exists!'})
    return
  }
  const token = jwt.sign({
    id: user.id,
    email: user.email,
    time: Date.now(),
  }, serverRuntimeConfig.TOKEN_SECRET, {expiresIn: '12h'})
  res.setHeader(
    'Set-Cookie',
    cookie.serialize(serverRuntimeConfig.COOKIE_NAME, token, {
      httpOnly: true,
      maxAge: 8 * 60 * 60,
      path: '/signup',
      secure: process.env.NODE_ENV === 'production',
    })
  )
  res.status(200).json(user)
}