import getBase64 from "@/lib/getLocalBase64";
import Image from "next/image";
import Link from "next/link";

export default async function ProductImgOne() {
  const myBlurDataUrlOne = await getBase64("menOne_front.jpg");
  const myBlurDataUrlTwo = await getBase64("menOne_back.jpg");

  return (
    <Link href="/men/8" className="group block overflow-hidden rounded-t-xl">
      <div className="relative h-[350px] sm:h-[450px]">
        <Image
          src="/menOne_front.jpg"
          alt=""
          fill
          className="absolute inset-0 object-cover opacity-100 group-hover:opacity-0 transition duration-500"
          sizes="30vw"
          priority={true}
          blurDataURL={myBlurDataUrlOne}
          placeholder="blur"
        />

        <Image
          src="/menOne_back.jpg"
          alt=""
          fill
          className="absolute inset-0 object-cover opacity-0 group-hover:opacity-100 transition duration-500"
          sizes="30vw"
          priority={true}
          blurDataURL={myBlurDataUrlTwo}
          placeholder="blur"
        />
      </div>
      <div className="relative bg-white pt-3 text-center">
        <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">PREMIUM SWEATSHIRT</h3>
        <p className="tracking-wide text-gray-900">$32</p>
      </div>
    </Link>
  );
}
