"use server";

import { addVenue } from "@/lib/db/operations/Venue";
import { Venue } from "@/lib/db/models/Venue";

export const submitVenue = async (formData: Venue) => {
    addVenue(formData);
};
