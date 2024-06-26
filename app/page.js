"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Homepage from "./homepage/page";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        if (router.pathname === "/login") {
          router.push("/");
        }
      } else {
        if (router.pathname !== "/login") {
          router.push("/login");
        }
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
