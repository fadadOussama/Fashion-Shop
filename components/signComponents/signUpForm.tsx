"use client";

import { MouseEvent, useRef, useState } from "react";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";
import GoogleAuthButton from "./GoogleButton";

import { FiEye, FiEyeOff } from "react-icons/fi";

type Props = {
  font: string;
};

export default function SignUpForm({ font }: Props) {
  const { isLoaded, signUp, setActive } = useSignUp();

  const [emailAddress, setEmailAddress] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [password, setPassword] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");
  const [visible, setVisiblity] = useState(false);
  const [signStatus, setSignStatus] = useState(false);
  const passwordRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  // start the sign up process.
  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        emailAddress,
        firstName,
        lastName,
        password,
      });

      setSignStatus(true);

      // send the email.
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // change the UI to our pending section.
      setPendingVerification(true);
      toast("A verification code has been sent to your email to verify your account");
    } catch (err: any) {
      toast.error(err.errors[0].longMessage);
    }
  };

  // This verifies the user using email code that is delivered.
  const onPressVerify = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });
      if (completeSignUp.status !== "complete") {
        /*  investigate the response, to see if there was an error
        or if the user needs to complete more steps.*/
        console.log(JSON.stringify(completeSignUp, null, 2));
      }

      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        router.push("/");
        toast.success("You've been signed up.");
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  const eyeIconShow = passwordRef.current?.value ? true : false;
  const eyeIconVisible = visible ? <FiEyeOff /> : <FiEye />;

  return (
    <div className="bg-gray-100">
      <div className="case py-20">
        <h1 className={`sectionTitleSign ${font}`}>Sign Up</h1>
        {!pendingVerification ? (
          <p className="text-center text-gray-500 mb-10">Choose your preferred sign up method</p>
        ) : (
          <p className="text-center text-gray-500 mb-10">Verification methods assist in authenticating the identity of users</p>
        )}

        <div className="border border-mainColor py-10 px-5 max-w-lg mx-auto">
          {!pendingVerification && <GoogleAuthButton />}
          {!pendingVerification && (
            <div className="relative mb-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t"></span>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-gray-100 px-2 text-mainColor">Or continue with</span>
              </div>
            </div>
          )}

          {!pendingVerification && (
            <form>
              <div className="mb-8">
                <label htmlFor="firstName">First name</label>
                <input
                  autoComplete="off"
                  className="signInput"
                  placeholder="type your first name"
                  onChange={(e) => setfirstName(e.target.value)}
                  id="firstName"
                  name="firstName"
                  type="text"
                />
              </div>
              <div className="mb-8">
                <label htmlFor="lastName">Last Name</label>
                <input
                  autoComplete="off"
                  className="signInput"
                  placeholder="type your last name"
                  onChange={(e) => setlastName(e.target.value)}
                  id="lastName"
                  name="lastName"
                  type="text"
                />
              </div>
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
                  className="signInput"
                  placeholder="type your password"
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  name="password"
                  type={visible ? "text" : "password"}
                  ref={passwordRef}
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
                {signStatus ? "Sign up..." : "Sign up"}
              </button>

              <p>
                Already have an account <span className="font-sans font-medium">?</span>{" "}
                <Link className="text-gray-400 hover:text-mainColor transition-colors duration-300" href="/signIn">
                  Sign In
                </Link>
              </p>
            </form>
          )}
          {pendingVerification && (
            <div>
              <form>
                <label htmlFor="verification">Verification code</label>
                <input
                  autoComplete="off"
                  className="signInput"
                  name="vrification"
                  id="verification"
                  value={code}
                  placeholder="type your code"
                  onChange={(e) => setCode(e.target.value)}
                />
                <button
                  className="block w-full bg-mainColor/95 px-5 py-2.5 font-medium text-gray-100/95 hover:text-gray-100 hover:bg-mainColor transition duration-300 mt-8"
                  onClick={onPressVerify}
                >
                  Verify Email
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
