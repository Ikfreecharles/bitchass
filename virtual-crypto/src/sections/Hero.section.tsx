import React from "react";
import styled from "styled-components";
import { ButtonComponent } from "../components/Button.component";
import { HeadingTwoComponent } from "../components/HeadingTwo.component";
import { LayoutComponent } from "../components/Layout.component";

export const HeroSection = () => {
  return (
    <CustomHero>
      <LayoutComponent classname="layout">
        <div className="header">
          <h1>VIZION PROTOCOL BRINGS YOU THE OFFICIAL</h1>
          <img
            src="./assets/images/bitchass.png"
            alt="bitch ass logo"
            className="img"
          />
          <HeadingTwoComponent classname="mint-soon" sentencecase>
            NFT Launch
          </HeadingTwoComponent>
          <ButtonComponent link="https://vizionprotocol.io/" noshadow>
            <div className="button-item">
              <span>MINT-SOON</span>
              <img
                src="./assets/images/5426-removebg-preview.png"
                alt="open sea"
                className="opensea"
              />
            </div>
          </ButtonComponent>
        </div>
      </LayoutComponent>
    </CustomHero>
  );
};

const CustomHero = styled.div`
  height: 100vh;
  background: url("./assets/images/B_tch-Ass.jpeg") no-repeat center;
  background-repeat: no-repeat;
  background-size: cover;
  .layout {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      font-size: 14px;
      color: var(--main-red);
      text-shadow: 0 0 9px #fff;
      letter-spacing: 4px;
      line-height: 20px;
    }
    .mint-soon {
      font-family: var(--main-font);
      margin-bottom: 2rem;
      color: var(--main-red);
    }
  }

  .img {
    width: 300px;
    margin-bottom: 30px;
  }
  .button-item {
    display: flex;
    align-items: center;

    .opensea {
      width: 40px;
    }
  }
`;
