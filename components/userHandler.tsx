"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import initializeUserData from "@/helpers/initializeUserData";
import initializeUserDataMerge from "@/helpers/initializeUserDataMerge";

export default function UserHandler() {
  const { user } = useUser();

  useEffect(() => {
    const checking = async () => {
      const uid = localStorage.getItem("uid");
      if (user && !uid) await initializeUserData(user.id);
      else if (!user && uid) await initializeUserData(uid);
      else if (user && uid) await initializeUserDataMerge(user.id, uid);
    };

    checking();
  }, [user]);

  return null;
}
