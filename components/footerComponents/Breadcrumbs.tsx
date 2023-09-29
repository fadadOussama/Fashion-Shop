"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

export default function Breadcrumbs() {
  const pathname = usePathname();

  let currentLink: any = "";

  const crumbs = pathname
    .split("/")
    .filter((crumb: string) => crumb !== "")
    .map((crumb: string) => {
      currentLink += `/${crumb}`;

      return (
        <Fragment key={crumb}>
          {currentLink === "/" ? (
            ""
          ) : (
            <div className="crumb">
              <Link href={currentLink}>{crumb}</Link>
            </div>
          )}
        </Fragment>
      );
    });

  return <div className="breadcrumbs">{crumbs}</div>;
}
