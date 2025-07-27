"use client";

export const SigninForm = () => {
    return (
        <form action={() => console.log("sign in")}>
            <div>
                <label htmlFor="username">Username</label>
                <input id="username" name="username" placeholder="Username" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" />
            </div>
            <button type="submit">Sign In</button>
        </form>
    );
};
