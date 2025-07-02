"use client";

import { SignupForm } from "@/components/forms/SignupForm";
import { SigninForm } from "@/components/forms/SigninForm";
import { useState } from "react";

const Admin = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [loggingIn, setLoggingIn] = useState(true);

    return (
        <div>
            {loggedIn ? (
                <div>
                    <h3>Welcome back, admin!</h3>
                    <p>
                        This is where you can interact with the site as an
                        admin!
                    </p>
                </div>
            ) : (
                <div>
                    <h3>{loggingIn ? "Sign In" : "Sign Up"}</h3>
                    <div
                        onClick={() => setLoggingIn(!loggingIn)}
                        style={{ cursor: "pointer" }}
                    >
                        <p>
                            {loggingIn ? "Sign up instead" : "Sign in instead"}
                        </p>
                    </div>
                    {loggingIn ? <SigninForm /> : <SignupForm />}
                </div>
            )}
        </div>
    );
};

export default Admin;
