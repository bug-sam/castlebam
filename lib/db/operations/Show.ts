import { Show, showSchema } from "../models/Show";
import { Venue } from "../models/Venue";
import { insert, getCollection } from "@/lib/utils/dbUtils";

export const getShows = async () => {
    const shows = await getCollection<Show>("shows");
    const venues = await getCollection<Venue>("venues");
    return shows.map((show) => ({
        ...show,
        venue: venues.find((v) => v._id === show.venue_id)
    }));
};

export const addShow = async (show: Show) => {
    const parsed = showSchema.parse(show);
    insert("shows", parsed);
};

export const removeShow = async () => {};

export const updateShow = async () => {};
