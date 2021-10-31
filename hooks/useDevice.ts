import { useState, useEffect } from "react";
import { Device } from "../types/types";
export const useDevice = () => {
  //useDevice hook
  const [device, setDevice] = useState<Device | undefined>();

  useEffect(() => {
    const handleResize = () => {
      setDevice({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return device;
};
