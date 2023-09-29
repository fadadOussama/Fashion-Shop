import SignInForm from "@/components/signComponents/signInForm";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { prata } from "../../layout";

export default async function SignIn() {
  const user = await currentUser();
  if (user) redirect("/");

  return <SignInForm font={prata.className} />;
}
