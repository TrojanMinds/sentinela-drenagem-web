/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const UserRouter = createTRPCRouter({
    UpdUserLocation: protectedProcedure
        .input(z.object({id: z.string(), Locale: z.string(), Latitude: z.number(), Longitude: z.number()}))
        .mutation(async ({ctx, input}) => {
            await ctx.db.user.update({
                where: {id: input.id},
                data: {...input}
            })
    }),

    GetUserFollowings: protectedProcedure.query(async ({ctx}) => {
            const data_ = await ctx.db.station.findMany({
                where: {FollowersIds: {has: ctx.session.user.id}},
                select: {Status: true, Locale: true, Umidity: true, Temperature: true, id: true, Latitude: true, Longitude: true}
            })

            return data_ ?? null
        }),

    GetUser: publicProcedure
        .query(async ({ctx}) => {
            return await ctx.db.user.findUnique({
                where: {id: ctx.session?.user.id},
                select: {
                    email: true, image: true, Locale: true, name: true, Latitude: true, Longitude: true
                }
            })
        })
});
