import { User, userSchema } from "@/lib/db/models/User";
import { hash } from "@/lib/utils/encryptionUtils";
import { insert, getRow } from "@/lib/utils/dbUtils";

export const getUser = async (username: string) => {
    return getRow<User>("users", (u => u.username === username))
}

export const addUser = async (user: User) => {
    const { username, password, type } = userSchema.parse(user);
    const hashedPassword = await hash(password);
    insert("users", {
        username: username,
        password: hashedPassword,
        type: type,
    } as User);
};

export const removeUser = async () => {};

export const updateUser = async () => {};
