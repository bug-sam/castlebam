"use server";

import { Show } from "@/lib/db/models/Show";
import { addShow } from "@/lib/db/operations/Show";

export const submitShow = async (formData: Show) => {
    return;
    addShow(formData);
};
