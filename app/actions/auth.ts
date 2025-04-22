"use server"

import { addUser } from "@/lib/db/operations/User";

export const signup = async (formData: FormData) => {
    addUser({
        username: formData.get("username") as string,
        password: formData.get("password") as string,
        type: "regular",
    });
}

export const signin = async (formData: FormData) => {
    addUser({
        username: formData.get("username") as string,
        password: formData.get("password") as string,
        type: "regular",
    });
}
