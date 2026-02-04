"use client"

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "@/firebase/client";
import { Button } from "./ui/button";

export default function ContinueWithGoogleButton() {
    return (
        <Button onClick={() => {
            const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider);
        }}>
            Continue with Google
        </Button>
    )
}
