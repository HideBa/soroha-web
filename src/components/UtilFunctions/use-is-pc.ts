import { useMediaQuery } from "react-responsive";
import { metrics } from "@soroha/components/styles";

export const useIsPC = () => {
  const isPC = useMediaQuery({ minDeviceWidth: metrics.breakPoint.tabletOrSP });
  console.log("=---", isPC);
  return isPC;
};
