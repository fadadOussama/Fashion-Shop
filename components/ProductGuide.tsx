import { prata } from "@/app/layout";
import getBase64 from "@/lib/getLocalBase64";
import Image from "next/image";

import guideOne from "../public/guideOne.jpg";
import guideTwo from "../public/guideTwo.jpg";
import guideThree from "../public/guideThree.jpg";

export default async function ProductGuide() {
  const guideOneBlur = await getBase64("guideOne.jpg");
  const guideTwoBlur = await getBase64("guideTwo.jpg");
  const guideThreeBlur = await getBase64("guideThree.jpg");

  return (
    <div className="case py-20">
      <h1 className={`sectionTitle ${prata.className}`}>Products Guide</h1>

      <div className="grid sm:grid-cols-3 grid-rows-1 gap-6 justify-center">
        <div className="group cursor-pointer">
          <Image
            src={guideOne}
            alt="image"
            className="rounded-tl-3xl rounded-br-3xl mx-auto border border-black"
            sizes="50vw"
            placeholder="blur"
            blurDataURL={guideOneBlur}
          />
          <div className="text-center mt-6">
            <p className="text-base mb-1 group-hover:underline">MODERN SWEATERS</p>
            <p className="text-xs text-mainColor/70 max-w-[350px] mx-auto">
              Modern sweaters offer a fusion of contemporary design and comfort, providing stylish warmth for your wardrobe.
            </p>
          </div>
        </div>
        <div className="group cursor-pointer">
          <Image
            src={guideTwo}
            alt="image"
            className="rounded-tl-3xl rounded-br-3xl mx-auto border border-black"
            sizes="50vw"
            placeholder="blur"
            blurDataURL={guideTwoBlur}
          />
          <div className="text-center mt-6">
            <p className="text-base mb-1 group-hover:underline">BUILT TO LAST</p>
            <p className="text-xs text-mainColor/70">
              Discover enduring quality and style in our t-shirts and sweaters, where enduring style meets unmatched durability, ensuring your
              wardrobe stands the test of time.
            </p>
          </div>
        </div>
        <div className="group cursor-pointer">
          <Image
            src={guideThree}
            alt="image"
            className="rounded-tl-3xl rounded-br-3xl mx-auto border border-black"
            sizes="50vw"
            placeholder="blur"
            blurDataURL={guideThreeBlur}
          />
          <div className="text-center mt-6">
            <p className="text-base mb-1 group-hover:underline">PREMUIM SHIRTS</p>
            <p className="text-xs text-mainColor/70">
              Elevate your wardrobe with our premium shirts, meticulously crafted for timeless style and exceptional quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
