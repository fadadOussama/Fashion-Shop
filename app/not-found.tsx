import Link from "next/link";
import { prata } from "./layout";

export const dynamic = "force-static";

export default function NotFound() {
  return (
    <div className="loadingPage py-20">
      <div className="text-center mx-2">
        <h1 className={`sm:text-6xl text-5xl ${prata.className}`}>404</h1>
        <br />
        <h3 className="sm:text-2xl text-xl font-bold mb-2">Page not found</h3>
        <p className="sm:text-lg text-base mb-5">The page you are looking for doesn&apos;t exist.</p>
        <Link href=".." className="block mx-auto border border-mainColor px-5 py-2.5 text-mainColor hover:bg-gray-100 transition duration-300 w-fit">
          GO BACK
        </Link>
      </div>

      <div className="bg-notFound h-[50px] bg-contain bg-no-repeat mt-10"></div>
    </div>
  );
}
