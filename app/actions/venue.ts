"use server"

import { add } from "@/lib/db/models/Venue";
import { VenueType, Location } from "@/lib/db/models/Venue";

export const submitVenue = async (formData: FormData) => {
    add({
        name: formData.get("name") as string,
        location: formData.get("location") as Location,
        instagram: formData.get("instagram") as string,
        allAges: formData.get("isAllAges") === "true",
        defunct: formData.get("isDefunct") === "true",
        type: formData.get("venueType") as VenueType,
        description: formData.get("description") as string,
    });
}