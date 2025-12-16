"use client";

import { signup } from "@/app/actions/auth";
import { User } from "@/lib/db/models/User";
import { SubmitHandler, useForm } from "react-hook-form";

export const SignupForm = () => {
     const { register, handleSubmit, formState: { errors }, setValue } = useForm<User>();

    const onSubmit: SubmitHandler<User> = (data, e) => {
        signup(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="username">Username</label>
                <input {...register("username")} placeholder="Username" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input {...register("password")} type="password" />
            </div>
            <button type="submit">Sign In</button>
        </form>
    );
};

export default SignupForm;
