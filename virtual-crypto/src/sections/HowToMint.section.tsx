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
        <HeadingTwoComponent sentencecase>
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
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
    @media screen and (max-width: 768px) {
      display: block;
    }
    @media screen and (max-width: 1024px) {
      display: block;
    }
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
        font-size: 24px;
        margin: 20px 0;
        letter-spacing: 1px;
        font-weight: 500;
      }
      .desc {
        color: var(--ter-black);
      }
    }
  }
`;
