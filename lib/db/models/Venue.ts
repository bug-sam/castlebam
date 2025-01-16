import { z } from "zod";

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

const venueSchema = z.object({
    name: z.string(),
    location: locationEnum,
    instagram: z.string(),
    allAges: z.boolean(),
    defunct: z.boolean(),
    type: venueTypeEnum,
    description: z.string(),
})

export type Location = z.infer<typeof locationEnum>;

export type VenueType = z.infer<typeof venueTypeEnum>;

export type Venue = z.infer<typeof venueSchema>;

export const addVenue = () => {
}

export const removeVenue = () => {
}

export const updateVenue = () => {
}
