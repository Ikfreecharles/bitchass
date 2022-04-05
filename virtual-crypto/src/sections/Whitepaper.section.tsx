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
        <ButtonComponent>
          {"Click here to view White Paper".toUpperCase()}
        </ButtonComponent>
      </CustomSection>
    </LayoutComponent>
  );
};

const CustomSection = styled.article`
  text-align: center;
  padding: 0 15rem;
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
`;
