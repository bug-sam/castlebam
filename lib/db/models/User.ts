import { z } from "zod";
import { insert } from "@/lib/utils/dbUtils";
import { hash } from "@/lib/utils/encryptionUtils";

const userTypeEnum = z.enum([
    "admin",
    "regular",
]);

const userSchema = z.object({
    _id: z.string().optional(),
    username: z.string(),
    password: z.string(),
    type: userTypeEnum,
});

export type User = z.infer<typeof userSchema>;

export type UserType = z.infer<typeof userTypeEnum>;

export const addUser = async (user: User) => {
    const { username, password, type } = userSchema.parse(user);
    const hashedPassword = await hash(password);
    insert(
        "users",
        {
            username: username,
            password: hashedPassword,
            type: type,
        } as User
    )
}

export const removeUser = () => {
}

export const updateUser = () => {
}
