import { z } from "zod";
import { baseShowSchema } from "./Show";

export type Location = z.infer<typeof locationEnum>;
export type VenueType = z.infer<typeof venueTypeEnum>;
export type Venue = z.infer<typeof venueSchema>;

export const locationEnum = z.enum([
    "South Philly",
    "West Philly",
    "Northeast Philly",
    "North Philly",
    "Temple",
    "South Jersey",
    "Other",
]);

export const locations = locationEnum.options;

export const venueTypeEnum = z.enum(["Bar", "DIY Space", "House"]);

export const venueTypes = venueTypeEnum.options;

export const venueSchema = z.object({
    _id: z.string().optional(),
    name: z.string(),
    type: venueTypeEnum,
    location: locationEnum,
    instagram: z.string(),
    allAges: z.boolean(),
    defunct: z.boolean(),
    description: z.string(),
    accepted: z.boolean().optional(),
    show_ids: z.array(z.string()).optional(),
    shows: z.array(z.lazy(() => baseShowSchema)).optional(),
})
