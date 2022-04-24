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
        <HeadingThreeComponent classname="title" sentencecase>
          Is That it?
        </HeadingThreeComponent>
        <p className="question">Are you Serious?</p>
        {IS_THAT_IT.map((item, idx) => (
          <div key={idx}>
            <p className="desc">{item}</p>
            <br />
          </div>
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
  max-width: 640px;
  margin: 0 auto;
  margin-top: -60vh;
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
    margin: 20px 0 0;
    font-weight: 700;
  }
  .desc {
    margin: 0 auto;
    width: 80%;
  }
  button {
    margin-top: 3rem;
  }
`;
