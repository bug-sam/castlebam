"use client";

import { signin } from "@/app/actions/auth";
import { User } from "@/lib/db/models/User";
import { SubmitHandler, useForm } from "react-hook-form";

export const SigninForm = () => {
     const { register, handleSubmit, formState: { errors }, setValue } = useForm<User>();

    const onSubmit: SubmitHandler<User> = (data, e) => {
        e?.preventDefault();
        signin(data).then((result) => alert(result))
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
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SigninForm;
