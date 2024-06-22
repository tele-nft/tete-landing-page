import { NavItem, NavLink, NavLinkProps } from "reactstrap";
import Styles from "./menu-link.module.scss";
import React, { useEffect, useState } from "react";
import { NextRouter, useRouter } from "next/router";
import { resolveHref } from "next/dist/client/resolve-href";

const getLinkUrl = (params: {
  router: NextRouter;
  href: NavLinkProps["href"];
  as: NavLinkProps["as"];
}): string => {
  // Dynamic route will be matched via props.as
  // Static route will be matched via props.href
  if (params.as) return resolveHref(params.router, params.as);

  const [resolvedHref, resolvedAs] = resolveHref(
    params.router,
    params.href ?? "",
    true
  );

  return resolvedAs || resolvedHref;
};

export default function MenuLink({ children, ...props }: NavLinkProps) {
  const router = useRouter();
  const [className, setClassName] = useState(Styles["nav-link"]);

  useEffect(() => {
    // Check if the router fields are updated client-side
    if (router.isReady) {
      const linkUrl = getLinkUrl({
        router,
        href: props.href,
        as: props.as,
      });

      const linkPathname = new URL(linkUrl, location.href).pathname;
      console.log(linkPathname);

      // Using URL().pathname to get rid of query and hash
      const activePathname = new URL(router.asPath, location.href).pathname;
      console.log(activePathname);
      const newClassName =
        linkPathname === activePathname
          ? `${Styles["nav-link"]} ${Styles["active"]}`.trim()
          : Styles["nav-link"];

      if (newClassName !== className) {
        setClassName(newClassName);
      }
    }
  }, [router, props.as, props.href, className]);
  return (
    <NavItem className={Styles["nav-item"]}>
      <NavLink className={className} {...props}>
        {children}
      </NavLink>
    </NavItem>
  );
}
