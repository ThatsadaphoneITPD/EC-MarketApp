import React, { useEffect, useState } from "react";
import Komi from "./komi";
import { useMatchMedia } from "../../hook";

export default function Mascot() {
  const isDesktopResolution = useMatchMedia("(min-width:768px)", true);

  return (
    <>
      {/* Hide Component on limit screen size */}
      {isDesktopResolution && <Komi />}
    </>
  );
}
