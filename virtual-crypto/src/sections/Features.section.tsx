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
        <HeadingTwoComponent>Bitch Ass NFT</HeadingTwoComponent>
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
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    .card {
      text-align: center;
      width: 30%;
      .title {
        font-family: var(--main-font);
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }
    }
  }
  .image {
    width: 100px;
    filter: invert(100%);
  }
`;