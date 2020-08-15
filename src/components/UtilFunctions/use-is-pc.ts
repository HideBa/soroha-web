import { useMediaQuery } from "react-responsive";
import { metrics } from "@soroha/components/styles";

export const useIsPC = () => {
  return useMediaQuery({ minDeviceWidth: metrics.breakPoint.tabletOrSP });
};
