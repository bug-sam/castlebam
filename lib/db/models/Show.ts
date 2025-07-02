import { z } from "zod";
import { venueSchema } from "./Venue";

export type Show = z.infer<typeof showSchema>;

export const baseShowSchema = z.object({
    _id: z.string().optional(),
    date: z.string().date(),
    time: z.string().time(),
    cost: z.number(),
    venue_id: z.string(),
    flyer: z.string(),
});

export const showSchema = baseShowSchema.extend({
    venue: z.lazy(() => venueSchema).optional(),
});
