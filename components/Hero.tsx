import { FadeUpStagger } from "./animations/TextFadeUp";

export default function Hero() {
  return (
    <div className="relative bg-hero w-full heightImgHero bg-top bg-cover bg-no-repeat -z-10">
      <div className="absolute bg-heroText w-[156px] h-[156px] right-14 bottom-14 animate-pulse">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-[2px] border-mainColor/50 rounded-full w-[100px] h-[100px]">
          <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-mainColor/70">
            SINCE <br /> 2019
          </p>
        </div>
      </div>
      <FadeUpStagger />
    </div>
  );
}
