"use client";

import dynamic from "next/dynamic";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const MobileNav = dynamic(() => import("../MobileNav/MobileNav"), { ssr: false });
import DesktopNav from "../DesktopNav/DesktopNav";

const HeaderNav = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      {isMobile && <DesktopNav />}
      {!isMobile && <MobileNav />}
    </>
  );
};

export default HeaderNav;
