import React from "react";
import styled from "styled-components";
import { HeadingThreeComponent } from "../components/HeadingThree.component";
import { HeadingTwoComponent } from "../components/HeadingTwo.component";
import { LayoutComponent } from "../components/Layout.component";
import { HOW_TO_MINT } from "../consts/constants";

export const HowToMintSection = () => {
  return (
    <LayoutComponent>
      <CustomSection>
        <HeadingTwoComponent>
          The Official "Bitch Ass" NFT Collection
        </HeadingTwoComponent>
        <HeadingThreeComponent>How To Mint</HeadingThreeComponent>
        <div className="mint-steps">
          {HOW_TO_MINT.map(({ icon, title, desc }, idx) => (
            <div key={idx} className="step">
              <div className="image">
                <img src={icon} alt={title} />
              </div>

              <h5 className="title">{title}</h5>
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
  .mint-steps {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 100px;
    .step {
      text-align: center;
      .image {
        height: 100px;
        width: 100px;
        margin: 0 auto;

        img {
          object-fit: contain;
          height: 100%;
          width: 100%;
        }
      }
      .title {
        font-family: var(--main-font);
        text-transform: uppercase;
        font-size: 1.6rem;
        margin-bottom: 1rem;
      }
      .desc {
        color: var(--ter-black);
      }
    }
  }
`;
