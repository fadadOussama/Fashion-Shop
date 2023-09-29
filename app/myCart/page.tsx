"use client";

import MyCartCard from "@/components/myCartCard";
import { useAppSelector } from "@/rtk/hooks";
import Link from "next/link";

import { FiArrowRight } from "react-icons/fi";

export default function MyCart() {
  const cart = useAppSelector((state) => state.cart);
  const cartArr = Object.values(cart);
  let total = 0;

  cartArr.map((product) => {
    total += product.sizes.length * product.details.price;
  });

  return (
    <section className={`${cartArr.length <= 1 && "loadingPage"}`}>
      <div className="case py-20">
        <div>
          <header className="text-center">
            <h1 className="text-xl text-mainColor sm:text-3xl">Your Cart</h1>
          </header>

          {cartArr.length === 0 ? (
            <div>
              <p className="text-[15px] text-center mt-8 mb-6">
                Before procced to checkout you must add some products in your cart , go ahead and start exploring our products.
              </p>
              <div className="flex justify-center gap-x-6 gap-y-4 flex-wrap">
                <Link
                  href="/men"
                  className="inline-block border border-mainColor px-5 py-2.5 text-mainColor hover:bg-gray-100 transition duration-300 w-fit"
                >
                  GO TO MEN
                </Link>
                <Link
                  href="/women"
                  className="inline-block border border-mainColor px-5 py-2.5 text-mainColor hover:bg-gray-100 transition duration-300 w-fit"
                >
                  GO TO WOMEN
                </Link>
              </div>
            </div>
          ) : (
            <div className="mt-8">
              <ul className="space-y-4 overflow-auto">
                {cartArr.map((product, index) => (
                  <MyCartCard key={index} product={product} />
                ))}
              </ul>

              <div className="mt-8 border-t border-mainColor pt-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>TOTAL : </span>
                    <span className="text-2xl">{total}$</span>
                  </div>

                  <div className="border border-mainColor px-5 py-2.5 text-mainColor hover:bg-gray-100 transition duration-300 cursor-pointer">
                    <div className="flex items-center justify-between">
                      <Link href="*">CONTINUE TO PAY</Link>
                      <span className="text-mainColor">
                        <FiArrowRight />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
