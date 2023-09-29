"use client";

import { useClerk } from "@clerk/clerk-react";
import { SignedIn } from "@clerk/nextjs";
import { toast } from "sonner";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useAppDispatch } from "@/rtk/hooks";
import { updateCart } from "@/rtk/slices/cartSlice";

type Props = {
  style: string;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SignOut({ style, setOpen }: Props) {
  const { signOut } = useClerk();
  const dispatch = useAppDispatch();

  const handleSignOut = async () => {
    setOpen && setOpen(false);
    signOut();
    dispatch(updateCart({}));
    toast.success("You've been signed out.");
  };

  return (
    <SignedIn>
      <AlertDialog>
        <AlertDialogTrigger className={style}>Sign Out</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-mainColor">ARE YOU ABSOLUTELY SURE ?</AlertDialogTitle>
            <AlertDialogDescription className="text-mainColor/70">
              This action will log you out of your account and require you to sign in again to access your account.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="rounded-md border-0 bg-gray-100 px-5 py-2.5 text-sm font-medium text-mainColor hover:text-gray-100 hover:bg-mainColor transition duration-300">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              className="rounded-md border-0 bg-mainColor px-5 py-2.5 text-sm font-medium text-gray-100 hover:text-mainColor hover:bg-gray-100 transition duration-300"
              onClick={handleSignOut}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </SignedIn>
  );
}
