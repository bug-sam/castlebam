"use server";

import { addVenue } from "@/lib/db/operations/Venue";
import { VenueType, Location, Venue } from "@/lib/db/models/Venue";

export const submitVenue = async (formData: Venue) => {
    return;
    addVenue(formData);
};
