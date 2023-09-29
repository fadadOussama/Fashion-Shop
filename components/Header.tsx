import Link from "next/link";
import { prata } from "../app/layout";
import ProductNav from "./headerComponents/ProductNav";
import ShopCard from "./headerComponents/ShopCard";
import SheetNav from "./headerComponents/SheetNav";

import SignIn from "./signComponents/SignIn";
import SignOut from "./signComponents/SignOut";

import ProductImgOne from "./headerComponents/headerProducts/ProductImgOne";
import ProductImgTwo from "./headerComponents/headerProducts/ProductImgTwo";
import ProductImgThree from "./headerComponents/headerProducts/ProductImgThree";
import { NavigationMenuLink } from "./ui/navigation-menu";

export default function Header() {
  return (
    <header className="bg-white mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 sticky top-0 rounded-b-lg z-40">
      <div>
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link className={`${prata.className} sm:text-[24px] text-[20px] font-medium`} href="/">
              Fashion Shop
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <ProductNav>
                  <NavigationMenuLink asChild>
                    <div>
                      <ProductImgOne />
                    </div>
                  </NavigationMenuLink>

                  <NavigationMenuLink asChild>
                    <div>
                      <ProductImgTwo />
                    </div>
                  </NavigationMenuLink>

                  <NavigationMenuLink asChild>
                    <div>
                      <ProductImgThree />
                    </div>
                  </NavigationMenuLink>
                </ProductNav>
                <li>
                  <Link className="navLink" href="/men">
                    MEN
                  </Link>
                </li>
                <li>
                  <Link className="navLink" href="/women">
                    WOMEN
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-4">
              <SignIn style="sign" />
              <SignOut style="sign" />
            </div>

            <ShopCard />
            <SheetNav>
              <div className="grid grid-cols-4 grid-rows-3 gap-4">
                <div className="col-span-4">
                  <ProductImgOne />
                </div>
                <div className="col-span-4 row-start-2">
                  <ProductImgTwo />
                </div>
                <div className="col-span-4 row-start-3">
                  <ProductImgThree />
                </div>
              </div>
            </SheetNav>
          </div>
        </div>
      </div>
    </header>
  );
}
