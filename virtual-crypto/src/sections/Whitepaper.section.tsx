import React from "react";
import styled from "styled-components";
import { ButtonComponent } from "../components/Button.component";
import { HeadingThreeComponent } from "../components/HeadingThree.component";
import { LayoutComponent } from "../components/Layout.component";
import { IS_THAT_IT } from "../consts/constants";

export const WhitepaperSection = () => {
  return (
    <LayoutComponent>
      <CustomSection>
        <HeadingThreeComponent classname="title">
          Is That it?
        </HeadingThreeComponent>
        <p className="question">Are you Serious?</p>
        {IS_THAT_IT.map((item, idx) => (
          <p key={idx} className="desc">
            {item}
          </p>
        ))}
        <ButtonComponent link="https://www.dropbox.com/s/fb0rx4df78k6r5e/ViZion%20Protocol%20White%20Paper%202021.pdf?dl=0">
          {"Click here to view White Paper".toUpperCase()}
        </ButtonComponent>
      </CustomSection>
    </LayoutComponent>
  );
};

const CustomSection = styled.article`
  text-align: center;
  padding: 0 10rem;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
  @media screen and (max-width: 1024px) {
    padding: 0;
  }
  .title {
    margin-bottom: 0.5rem;
  }
  .question {
    margin-bottom: 0.5rem;
    font-weight: 700;
  }
  .desc {
    margin-bottom: 1rem;
  }
  button {
    margin-top: 3rem;
  }
`;
