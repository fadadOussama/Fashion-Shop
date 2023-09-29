"use client";

import Link from "next/link";
import Breadcrumbs from "./footerComponents/Breadcrumbs";
import { usePathname } from "next/navigation";

export default function Footer({ font }: { font: string }) {
  const pathname = usePathname();

  return (
    <div
      className={`${
        pathname === "/" || pathname === "/signIn" || pathname === "/signUp" || pathname === "/sso-callback"
          ? "bg-white"
          : "bg-gray-100"
      }`}
    >
      <div className="case pt-5 text-center">
        <Breadcrumbs />
        <Link className={`${font} sm:text-[24px] text-[20px] font-medium mb-5 inline-block`} href="/">
          Fashion Shop
        </Link>
        <p className="mb-5 text-gray-500">
          Fashion is a state of mind, where creativity knows no bounds, Choose your own style, and let it reflect the uniqueness within you.
        </p>
      </div>
      <p className="text-center text-xs border-t py-5 text-gray-500 font-light">Copyright &copy; 2023. All rights reserved.</p>
    </div>
  );
}
