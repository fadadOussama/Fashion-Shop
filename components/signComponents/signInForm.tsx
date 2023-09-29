"use client";

import { MouseEvent, useRef, useState } from "react";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import GoogleAuthButton from "./GoogleButton";
import Link from "next/link";

import { FiEye, FiEyeOff } from "react-icons/fi";

type Props = {
  font: string;
};

export default function SignInForm({ font }: Props) {
  const { isLoaded, signIn, setActive } = useSignIn();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisiblity] = useState(false);
  const [signStatus, setSignStatus] = useState(false);
  const passwordRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  // start the sign In process.
  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }

    try {
      const result = await signIn.create({
        identifier: emailAddress,
        password,
      });

      setSignStatus(true);

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        router.push("/");
        toast.success("You've been signed in.");
      } else {
        /*Investigate why the login hasn't completed */
        console.log(result);
      }
    } catch (err: any) {
      toast.error(err.errors[0].longMessage);
    }
  };

  const eyeIconShow = passwordRef.current?.value ? true : false;
  const eyeIconVisible = visible ? <FiEyeOff /> : <FiEye />;

  return (
    <div className="bg-gray-100">
      <div className="case py-20">
        <h1 className={`sectionTitleSign ${font}`}>Sign In</h1>
        <p className="text-center text-gray-500 mb-10">Choose your preferred sign in method</p>

        <div className="border border-mainColor py-10 px-5 max-w-lg mx-auto">
          <GoogleAuthButton />

          <div className="relative mb-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-gray-100 px-2 text-mainColor">Or continue with</span>
            </div>
          </div>

          <form>
            <div className="mb-8">
              <label htmlFor="email">E-mail</label>
              <input
                autoComplete="off"
                className="signInput"
                placeholder="example@example.com"
                onChange={(e) => setEmailAddress(e.target.value)}
                id="email"
                name="email"
                type="email"
              />
            </div>
            <div className="mb-8 relative">
              <label htmlFor="password">Password</label>
              <input
                ref={passwordRef}
                className="signInput"
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                name="password"
                type={visible ? "text" : "password"}
                placeholder="type your password"
              />
              <span className="absolute right-4 cursor-pointer top-[27px]" onClick={() => setVisiblity(!visible)}>
                {eyeIconShow && eyeIconVisible}
              </span>
            </div>

            <button
              disabled={signStatus}
              onClick={handleSubmit}
              className={`block w-full bg-mainColor/95 px-5 py-2.5 font-medium text-gray-100/95 ${
                !signStatus && "hover:text-gray-100 hover:bg-mainColor"
              } transition duration-300 mb-8`}
            >
              {signStatus ? "Sign in..." : "Sign in"}
            </button>

            <p>
              Don&apos;t have an account <span className="font-sans font-medium">?</span>{" "}
              <Link href="/signUp" className="text-gray-400 hover:text-mainColor transition-colors duration-300">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
