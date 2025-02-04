import { z } from "zod";
import { insert, getCollection } from "@/lib/utils/dbUtils";
import { Venue, venueSchema } from "./Venue";

export type Show = z.infer<typeof showSchema>;

export const baseShowSchema = z.object({
    _id: z.string().optional(),
    date: z.string().date(),
    time: z.string().time(),
    cost: z.number(),
    venue_id: z.string(),
    flyer: z.string(),
})

export const showSchema = baseShowSchema.extend({
    venue: z.lazy(() => venueSchema).optional(),
})

export const get = async () => {
    const shows = await getCollection<Show>("shows");
    const venues = await getCollection<Venue>("venues");
    return shows.map(show => {
        show.venue = venues.find(v => v._id === show.venue_id);
    })
}

export const add = (show: Show) => {
    const parsed = showSchema.parse(show);
    insert("shows", parsed);
}

export const remove = () => {
}

export const update = () => {
}
