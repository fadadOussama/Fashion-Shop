"use client";

import { SignedOut } from "@clerk/nextjs";
import Link from "next/link";

type Props = {
  style: string;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SignIn({ style, setOpen }: Props) {
  return (
    <SignedOut>
      <Link onClick={() => setOpen && setOpen(false)} className={style} href="/signIn">
        Sign In
      </Link>
    </SignedOut>
  );
}
