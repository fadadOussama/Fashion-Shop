import { useSignIn } from "@clerk/nextjs";
import { OAuthStrategy } from "@clerk/types";
import { SiGoogle } from "react-icons/si";

export default function GoogleAuthButton() {
  const { isLoaded, signIn } = useSignIn();

  const signInWith = async (strategy: OAuthStrategy) => {
    if (!isLoaded) return;

    await signIn.authenticateWithRedirect({
      strategy,
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/",
    });
  };

  return (
    <div className="flex items-center gap-x-2 w-fit mx-auto mb-6 group cursor-pointer text-gray-400">
      <span className="group-hover:text-mainColor transition-colors duration-300">
        <SiGoogle />
      </span>
      <button className="group-hover:text-mainColor transition-colors duration-300" onClick={() => signInWith("oauth_google")}>
        Sign in with Google
      </button>
    </div>
  );
}
