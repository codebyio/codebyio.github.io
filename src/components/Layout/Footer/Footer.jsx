"use client";

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import FooterContent from "./FooterContent";

const Footer = () => {
  const pathname = usePathname();
  const variant = pathname === "/contact-us" ? "contact" : "default";

  return <FooterContent variant={variant} />;
};

export default Footer;
