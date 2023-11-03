'use client'

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const handleSignIn = async () => {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.error(error);
        }
    };

    const handleSignOut = async () => {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <main>
            <h1 className="text-4xl font-bold text-center text-blue-800">Shopping List</h1>
            <div>
                {user ? (
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleSignOut}
                    >
                        Sign Out
                    </button>
                ) : (
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleSignIn}
                    >
                        Sign In
                    </button>
                )}
            </div>
            <div>
                <Link href="/week8">
                    <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Shopping List
                    </a>
                </Link>
            </div>
        </main>

