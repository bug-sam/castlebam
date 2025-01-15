import { z } from "zod";
import { Venue } from "@/lib/db/models/Venue";
import { Date, Time } from "@/lib/types";

export interface Show {
    date: Date;
    cost: Time;
    venue: Venue;
}

export const addShow = () => {
}

export const removeShow = () => {
}

export const updateShow = () => {
}
