import React from "react";
import Form from "@soroha/components/organisms/Form";
import NavBar from "@soroha/components/organisms/Header";
import { useMediaQuery } from "react-responsive";

export type Props = {
  className?: string;
};

const Home: React.FC<Props> = ({ className }) => {
  const isPC = useMediaQuery({ minDeviceWidth: 769 });
  return (
    <>
      <NavBar isPC={isPC} />
      <Form />
    </>
  );
};

export default Home;
