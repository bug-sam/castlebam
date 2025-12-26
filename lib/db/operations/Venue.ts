import { Show } from "../models/Show";
import { Venue, venueSchema } from "../models/Venue";
import { insert, getCollection } from "@/lib/utils/dbUtils";

export const getVenues = async () => {
    const shows = await getCollection<Show>("shows");
    const venues = await getCollection<Venue>("venues");
    return venues.map((venue) => ({
        ...venue,
        shows: shows.filter((s) => venue.show_ids?.includes(s._id!))
    }));
};

export const addVenue = async (venue: Venue) => {
    const parsedVenue = venueSchema.parse(venue);
    return await insert("venues", parsedVenue);
};

export const removeVenue = async () => {};

export const updateVenue = async () => {};
