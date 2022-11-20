import { router } from "../trpc";
import { exampleRouter } from "./example";
import { roomRouter } from "./room";

export const appRouter = router({
    example: exampleRouter,
    room: roomRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
