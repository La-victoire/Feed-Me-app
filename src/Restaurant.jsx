import React from "react";
import App from "./App";
import { Header } from "./Header";
import { Banner } from "./Hero";
import Buttons from "./Buttons";

export const Restaurant = () => {
  return (
    <>
      <Header />
      <Banner />
      <Buttons />
      <App />
    </>
  );
};
