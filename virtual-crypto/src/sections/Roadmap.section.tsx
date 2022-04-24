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
          <HeadingTwoComponent sentencecase>
            The Official "Bitch Ass" NFT Collection
          </HeadingTwoComponent>
          <HeadingThreeComponent>Roadmap</HeadingThreeComponent>
          {ROADMAP.map((item, idx) => (
            <div key={idx}>
              <p className="roadmap">{item}</p>
              <br />
            </div>
          ))}
        </div>
      </CustomSection>
    </LayoutComponent>
  );
};

const CustomSection = styled.article`
  .top {
    text-align: center;
    max-width: 640px;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
      padding: 0;
    }

    @media screen and (max-width: 1024px) {
      padding: 0;
    }
    .logo {
      width: 300px;
    }
    .roadmap {
      margin: 0 auto;
      width: 80%;
    }
    margin-bottom: 100px;
  }
`;
