import React from "react";
import MoleculeTopPage from "@soroha/components/molecules/PageFrame/Top";
import NavBar from "@soroha/components/organisms/Nav/Header";
import MenuBar from "@soroha/components/organisms/Nav/MenuBar";

export type Props = {
  className?: string;
};

const TempBody = () => {
  return <div style={{ color: "red" }}>this is top page</div>;
};

const Top: React.FC<Props> = ({ className }) => {
  return (
    <MoleculeTopPage
      className={className}
      header={<NavBar />}
      body={<TempBody />}
      footer={<MenuBar />}
    />
  );
};

export default Top;
