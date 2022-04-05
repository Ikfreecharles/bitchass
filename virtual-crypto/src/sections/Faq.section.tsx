import React from "react";
import styled from "styled-components";
import { HeadingThreeComponent } from "../components/HeadingThree.component";
import { HeadingTwoComponent } from "../components/HeadingTwo.component";
import { LayoutComponent } from "../components/Layout.component";

export const FaqSection = () => {
  return (
    <LayoutComponent>
      <CustomSection>
        <img
          src="./assets/images/ViZion Protocol Logo.png"
          alt="logo"
          className="logo"
        />
        <HeadingTwoComponent>ViZion Protocol</HeadingTwoComponent>
        <HeadingThreeComponent>FAQ</HeadingThreeComponent>
      </CustomSection>
    </LayoutComponent>
  );
};
const CustomSection = styled.article`
  text-align: center;
  .logo {
    width: 200px;
  }
`;
