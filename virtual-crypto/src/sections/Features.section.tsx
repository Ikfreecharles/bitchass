import React from "react";
import styled from "styled-components";
import { HeadingThreeComponent } from "../components/HeadingThree.component";
import { HeadingTwoComponent } from "../components/HeadingTwo.component";
import { LayoutComponent } from "../components/Layout.component";
import { FEATURES } from "../consts/constants";

export const FeaturesSection = () => {
  return (
    <LayoutComponent>
      <CustomSection>
        <HeadingTwoComponent sentencecase>Bitch Ass NFT</HeadingTwoComponent>
        <HeadingThreeComponent>FEATURES</HeadingThreeComponent>
        <div className="cards">
          {FEATURES.map(({ id, title, desc, image }) => (
            <div key={id} className="card">
              <img src={image} alt={title} className="image" />
              <h4 className="title">{title}</h4>
              <p className="desc">{desc}</p>
            </div>
          ))}
        </div>
      </CustomSection>
    </LayoutComponent>
  );
};

const CustomSection = styled.article`
  text-align: center;

  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-row-gap: 25px;
    grid-column-gap: 16px;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
      display: block;
    }
    @media screen and (max-width: 1024px) {
      display: block;
    }
    .card {
      text-align: center;
      @media screen and (max-width: 768px) {
        width: 100%;
        margin-bottom: 5rem;
      }
      @media screen and (max-width: 1024px) {
        width: 100%;
        margin-bottom: 5rem;
      }
      .title {
        font-family: var(--main-font);
        font-size: 24px;
        margin: 20px 0;
        letter-spacing: 1px;
      }
      .desc {
        color: var(--ter-black);
      }
    }
  }
  .image {
    width: 100px;
    filter: invert(100%);
  }
`;
