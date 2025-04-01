import { User, userSchema } from "@/lib/db/models/User";
import { hash } from "@/lib/utils/encryptionUtils";
import { insert } from "@/lib/utils/dbUtils";

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

export const removeUser = async () => {
}

export const updateUser = async () => {
}
