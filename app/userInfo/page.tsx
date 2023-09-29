"use client";
import { useUser } from "@clerk/nextjs";

export default function Example() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return <div>Hello, {user.id} welcome to Clerk</div>;
}
