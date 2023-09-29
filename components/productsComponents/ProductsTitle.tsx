"use client";
import { useSearchParams } from "next/navigation";

type Props = {
  segment: segmentType;
  font: string;
};

export default function ProductsTitle({ segment, font }: Props) {
  const params = useSearchParams();

  return <h2 className={`sectionTitle capitalize ${font}`}>{params.get("category") ? `${segment} - ${params.get("category")}` : segment}</h2>;
}
