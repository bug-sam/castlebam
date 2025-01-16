import { addUser } from "@/lib/db/models/User"

export const signup = async (formData: FormData) => {
    addUser({
        username: formData.get("username") as string,
        password: formData.get("password") as string,
        type: "regular",
    });
}
