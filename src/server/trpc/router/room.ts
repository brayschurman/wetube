import { z } from "zod";
import { router, publicProcedure } from "../trpc";

export const roomRouter = router({
    create: publicProcedure
        .input(z.object({ name: z.string() }))
        .mutation(({ ctx, input }) => {
            return ctx.prisma.room.create({
                data: {
                    name: input?.name,
                    members: 1
                }
            })
        })
});
