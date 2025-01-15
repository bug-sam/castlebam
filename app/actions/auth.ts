import { addUser } from "@/lib/db/models/User"

export const signup = async (formData: FormData) => {
    addUser();
}
