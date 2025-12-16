"use server";

import { addUser, getUser } from "@/lib/db/operations/User";
import { verify } from "@/lib/utils/encryptionUtils";

export const signup = async (data: any) => {
    addUser({
        username: data.username,
        password: data.password,
        type: "regular",
    });
};

export const signin = async (data: any) => {
    const user = await getUser(data.username)
    return await verify(data.password, user.password);
};
