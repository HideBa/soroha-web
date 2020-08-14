import React from "react";
import Form from "@soroha/components/organisms/Form";
import NavBar from "@soroha/components/organisms/Header";

export type Props = {
  className?: string;
};

const Home: React.FC<Props> = ({ className }) => {
  return (
    <>
      <NavBar />
      <Form />
    </>
  );
};

export default Home;
