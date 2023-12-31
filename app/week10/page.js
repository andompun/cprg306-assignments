"use client"

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const handleSignIn = async () => {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.error("Error signing in with Github: ",error);
        }
    };

    const handleSignOut = async () => {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.error("Error signing out: ",error);
        }
    };

    return (
        <main>
            <h1 className="text-4xl font-bold text-center text-blue-800">Shopping List</h1>
        {user ? (
            <div className="text-lg">
                <p>
                Signed in as {user.displayName} ({user.email})
                </p>
                <p>
                    <button
                        className="text-lg-500 hover:underline"
                        onClick={handleSignOut}>Sign Out
                    </button>
                </p>
                <Link href="week8/shopping-list/"
                      className="text-lg-500 hover:underline">
                        Go to Shopping List
                </Link>
            </div>
        ) : (
            <button onClick={handleSignIn}>gitHub Sign In</button>
            )}
        </main>
    );
};
