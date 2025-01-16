import { z } from "zod";

const showSchema = z.object({
    date: z.string().date(),
    time: z.string().time(),
    cost: z.number(),
    venue: z.string(),
})

export type Show = z.infer<typeof showSchema>;

export const addShow = () => {
}

export const removeShow = () => {
}

export const updateShow = () => {
}
