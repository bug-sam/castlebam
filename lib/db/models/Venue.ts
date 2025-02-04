import { z } from "zod";
import { getCollection } from "@/lib/utils/dbUtils";
import { baseShowSchema, Show, showSchema } from "./Show";

export type Location = z.infer<typeof locationEnum>;
export type VenueType = z.infer<typeof venueTypeEnum>;
export type Venue = z.infer<typeof venueSchema>;

const locationEnum = z.enum([
    "South Philly",
    "West Philly",
    "Temple",
    "South Jersey",
    "Other",
]);

const venueTypeEnum = z.enum([
    "Bar",
    "DIY Space",
    "House",
]);

export const venueSchema = z.object({
    _id: z.string().optional(),
    name: z.string(),
    location: locationEnum,
    instagram: z.string(),
    show_ids: z.array(z.string()),
    shows: z.array(z.lazy(() => baseShowSchema)).optional(),
    allAges: z.boolean(),
    defunct: z.boolean(),
    type: venueTypeEnum,
    description: z.string(),
})

export const get = async () => {
    const shows = await getCollection<Show>("shows");
    const venues = await getCollection<Venue>("venues");
    return venues.map(venue => {
        venue.shows = shows.filter(s => venue.show_ids.includes(s._id!));
    })
}

export const add = () => {
}

export const removeVenue = () => {
}

export const updateVenue = () => {
}
