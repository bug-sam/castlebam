import { z } from "zod";

export type User = z.infer<typeof userSchema>;
export type UserType = z.infer<typeof userTypeEnum>;

const userTypeEnum = z.enum([
    "admin",
    "regular",
]);

export const userSchema = z.object({
    _id: z.string().optional(),
    username: z.string(),
    password: z.string(),
    type: userTypeEnum,
});
