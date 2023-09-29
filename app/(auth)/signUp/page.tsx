import SignUpForm from "@/components/signComponents/signUpForm";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { prata } from "../../layout";

export default async function SignUp() {
  const user = await currentUser();
  if (user) redirect("/");

  return <SignUpForm font={prata.className} />;
}
