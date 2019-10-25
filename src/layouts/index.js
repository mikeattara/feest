import React from "react";
// import styled from 'styled-components';

import Header from "components/Header";
import Footer from "components/Footer";

export const withLandingLayout = props => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};
