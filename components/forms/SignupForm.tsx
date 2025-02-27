"use client"

import { signup } from '@/app/actions/auth'

export const SignupForm = () => {
    return (
        <form action={signup}>
            <div>
                <label htmlFor="username">Username</label>
                <input id="username" name="username" placeholder="Username" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" />
            </div>
            <button type="submit">Sign Up</button>
        </form>
    );
}
