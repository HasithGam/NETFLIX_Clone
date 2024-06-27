"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Homepage from "./Homepage/page";


export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // console.log("Logged In");
        router.push("/");
      } else {
        // console.log("out");
        router.push("/Login");
      }
    });

    return () => unsubscribe();
  }, [router]);

  return (
    <>
      <Homepage />
    </>
  );
}
