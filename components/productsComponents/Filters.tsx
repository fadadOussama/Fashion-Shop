/* eslint-disable react/no-string-refs */
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { setParams } from "@/helpers/setParams";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type Props = {
  segment: segmentType;
};

export default function Filters({ segment }: Props) {
  const querys = useSearchParams();
  const router = useRouter();

  const handleParams = (key: queryKeys, value: queryKeysValues) => {
    const params = setParams(key, value);
    router.push(`/${segment}/?${params}`);
  };

  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" className="border-b-transparent">
          <AccordionTrigger className="navLink text-lg">Categories</AccordionTrigger>
          <AccordionContent>
            <button
              onClick={() => handleParams("category", "sweaters")}
              className={`${querys.get("category") === "sweaters" ? "filterBtnActive" : "filterBtn"}`}
            >
              Sweaters
            </button>
            <br />
            <button
              onClick={() => handleParams("category", "tshirts")}
              className={`${querys.get("category") === "tshirts" ? "filterBtnActive" : "filterBtn"}`}
            >
              Tshirts
            </button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-b-transparent">
          <AccordionTrigger className="navLink text-lg">Price</AccordionTrigger>
          <AccordionContent>
            <button onClick={() => handleParams("price", "htl")} className={`${querys.get("price") === "htl" ? "filterBtnActive" : "filterBtn"}`}>
              High to low
            </button>
            <br />
            <button onClick={() => handleParams("price", "lth")} className={`${querys.get("price") === "lth" ? "filterBtnActive" : "filterBtn"}`}>
              Low to high
            </button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
