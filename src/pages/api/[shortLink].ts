import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const redirect = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const prisma = new PrismaClient()

  const route = req.query.shortLink as string

  const linkQuery = await prisma.link.findMany({
    where: {
      shortUrl: route,
    },
  })

  let redirectUrl = linkQuery[0]?.longUrl
  if (redirectUrl !== undefined) return res.status(201).redirect(redirectUrl)
  return res.status(201).redirect('/404')
}

export default redirect
