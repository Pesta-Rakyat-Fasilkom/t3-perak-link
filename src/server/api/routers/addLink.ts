import { TRPCError } from '@trpc/server'
import { z } from 'zod'

import { createTRPCRouter, publicProcedure, protectedProcedure } from '../trpc'

export const addLinkRouter = createTRPCRouter({
  add: publicProcedure
    .input(z.object({ longUrl: z.string(), shortUrl: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const generated = await ctx.prisma.link.count({
        where: {
          shortUrl: input.shortUrl,
        },
      })

      if (generated > 0) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'URL pendek sudah pernah diguanakan',
        })
      }

      return await ctx.prisma.link.create({
        data: {
          shortUrl: input.shortUrl,
          longUrl: input.longUrl,
        },
      })
    }),
})
