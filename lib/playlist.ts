import { PrismaClient } from '@prisma/client';
import { isResSent } from 'next/dist/shared/lib/utils';
import { validateRoute } from './auth';

const prisma = new PrismaClient();

export default validateRoute(async (req, res, user) => {
  const playlists = await prisma.playlist.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      name: 'asc',
    }
  })
  res.json(playlists)
})