import { prata } from "@/app/layout";
import Image from "next/image";

import variertyOne from "../public/variertyOne.jpg";
import variertyTwo from "../public/variertyTwo.jpg";
import variertyThree from "../public/variertyThree.jpg";
import variertyFour from "../public/variertyFour.jpg";
import Link from "next/link";
import getBase64 from "@/lib/getLocalBase64";

export default async function ProductVarierty() {
  const variertyOneBlur = await getBase64("variertyOne.jpg");
  const variertyTwoBlur = await getBase64("variertyTwo.jpg");
  const variertyThreeBlur = await getBase64("variertyThree.jpg");
  const variertyFourBlur = await getBase64("variertyFour.jpg");

  return (
    <div className="bg-gray-100">
      <div className="case py-20">
        <h1 className={`sectionTitle ${prata.className}`}>Varierty of fashion</h1>
        <div className="grid md:grid-cols-2 grid-cols-1 grid-rows-2 gap-6 text-center">
          <div className="relative overflow-hidden border border-black h-[450px] group">
            <Image
              src={variertyOne}
              alt=""
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              placeholder="blur"
              blurDataURL={variertyOneBlur}
              sizes="40vw"
            />
            <div className="absolute h-full w-full bg-mainColor/10 flex items-center justify-center inset-0 group-hover:inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <Link
              href="/men?category=tshirts"
              className="absolute inset-0 flex justify-center items-center sm:text-4xl text-3xl hover:underline transition duration-300 text-black"
            >
              MEN T-SHIRT
            </Link>
          </div>
          <div className="relative overflow-hidden border border-black h-[450px] group">
            <Image
              src={variertyThree}
              alt=""
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              placeholder="blur"
              blurDataURL={variertyTwoBlur}
              sizes="40vw"
            />
            <div className="absolute h-full w-full bg-mainColor/10 flex items-center justify-center inset-0 group-hover:inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <Link
              href="/women?category=tshirts"
              className="absolute inset-0 flex justify-center items-center sm:text-4xl text-3xl hover:underline transition duration-300 text-black"
            >
              WOMEN T-SHIRT
            </Link>
          </div>
          <div className="relative overflow-hidden border border-black h-[450px] group">
            <Image
              src={variertyFour}
              alt=""
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              placeholder="blur"
              blurDataURL={variertyThreeBlur}
              sizes="40vw"
            />
            <div className="absolute h-full w-full bg-mainColor/10 flex items-center justify-center inset-0 group-hover:inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <Link
              href="/women?category=sweaters"
              className="absolute inset-0 flex justify-center items-center sm:text-4xl text-3xl hover:underline transition duration-300 text-black"
            >
              WOMEN SWEATERS
            </Link>
          </div>
          <div className="relative overflow-hidden border border-black h-[450px] group">
            <Image
              src={variertyTwo}
              alt=""
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              placeholder="blur"
              blurDataURL={variertyFourBlur}
              sizes="40vw"
            />
            <div className="absolute h-full w-full bg-mainColor/10 flex items-center justify-center inset-0 group-hover:inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <Link
              href="/men?category=sweaters"
              className="absolute inset-0 flex justify-center items-center sm:text-4xl text-3xl hover:underline transition duration-300 text-black"
            >
              MEN SWEATERS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
