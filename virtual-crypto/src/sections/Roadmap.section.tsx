import React from "react";
import styled from "styled-components";
import { HeadingThreeComponent } from "../components/HeadingThree.component";
import { HeadingTwoComponent } from "../components/HeadingTwo.component";
import { LayoutComponent } from "../components/Layout.component";
import { ROADMAP } from "../consts/constants";

export const RoadmapSection = () => {
  return (
    <LayoutComponent>
      <CustomSection>
        <div className="top">
          <img src="./assets/images/bitchass.png" alt="logo" className="logo" />
          <HeadingTwoComponent>
            The Official "Bitch Ass" NFT Collection
          </HeadingTwoComponent>
          <HeadingThreeComponent>Roadmap</HeadingThreeComponent>
          {ROADMAP.map((item, idx) => (
            <p key={idx} className="roadmap">
              {item}
            </p>
          ))}
        </div>
      </CustomSection>
    </LayoutComponent>
  );
};

const CustomSection = styled.article`
  .top {
    text-align: center;
    padding: 0 10rem;
    .logo {
      width: 300px;
    }
    .roadmap {
      margin-bottom: 1rem;
    }
    margin-bottom: 10rem;
  }
`;
