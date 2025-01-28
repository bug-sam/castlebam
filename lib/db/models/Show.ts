import { z } from "zod";
import { insert, getCollection } from "@/lib/utils/dbUtils";

const showSchema = z.object({
    _id: z.string().optional(),
    date: z.string().date(),
    time: z.string().time(),
    cost: z.number(),
    venue: z.string(),
    flyer: z.string(),
})

export type Show = z.infer<typeof showSchema>;

export const get = async () => {
    return await getCollection<Show>("shows");
}

export const add = (show: Show) => {
    const parsed = showSchema.parse(show);
    insert("shows", parsed);
}

export const remove = () => {
}

export const update = () => {
}
