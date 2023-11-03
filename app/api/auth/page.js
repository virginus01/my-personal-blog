"use state"
// firebase.js
import firebase from "firebase/app";
import "firebase/auth"; // Import the authentication module
import { NextResponse } from 'next/server'

export default async function handler(req, res) {
  if (req.method !== "POST") {

    res.status(200).json({ message: "kk" });
  }

  const { email, password } = req.body;

  try {
    const userCredential = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    const user = userCredential.user;

    return res.status(200).json({ message: "Authentication successful", user });
  } catch (error) {
    return res.status(401).json({ message: "Authentication failed", error });
  }
}
