import { z } from "zod";
import client from "@/lib/db/client";
import { hash } from "@/lib/utils/encryptionUtils";

const userTypeEnum = z.enum([
    "admin",
    "regular",
]);

const userSchema = z.object({
    username: z.string(),
    password: z.string(),
    type: userTypeEnum,
});

export type User = z.infer<typeof userSchema>;

export type UserType = z.infer<typeof userTypeEnum>;

export const addUser = async (user: User) => {
    const { username, password, type } = userSchema.parse(user);

    const hashedPassword = await hash(password);

    client.db().collection("users").insertOne({
        username: username,
        password: hashedPassword,
        type: type,
    })
}

export const removeUser = () => {
}

export const updateUser = () => {
}
