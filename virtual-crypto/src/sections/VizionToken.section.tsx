import React from "react";
import styled from "styled-components";
import { HeadingThreeComponent } from "../components/HeadingThree.component";
import { LayoutComponent } from "../components/Layout.component";
import { TOKEN_SHARE } from "../consts/constants";

export const VizionTokenSection = () => {
  return (
    <LayoutComponent>
      <CustomSection>
        <img
          src="./assets/images/ViZion Protocol Logo.png"
          alt="logo"
          className="logo"
        />
        <HeadingThreeComponent classname="subtitle" sentencecase>
          $VIZION Token
        </HeadingThreeComponent>
        <span className="supply">Total Supply: 100,000,000</span>
        <div className="share">
          {TOKEN_SHARE.map(({ share, owner }, idx) => (
            <div key={idx} className="token-share">
              <p className="owner-share">{share}</p>
              <p className="owner">{owner}</p>
            </div>
          ))}
        </div>
      </CustomSection>
    </LayoutComponent>
  );
};

const CustomSection = styled.article`
  text-align: center;
  font-family: var(--main-font);
  background-color: var(--sec-black);
  padding: 31px 41px;
  border-radius: 12px;
  @media screen and (max-width: 768px) {
    padding: 3rem 0;
  }
  @media screen and (max-width: 1024px) {
    padding: 3rem 0;
  }

  .logo {
    width: 100px;
  }
  .subtitle {
    margin: 10px 0;
    font-size: 40px;
    font-weight: 400;
    line-height: 60px;
    letter-spacing: 2px;
  }
  .supply {
    color: var(--ter-black);
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 2px;
    margin-bottom: 10px;
  }

  .share {
    margin: 10px auto 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 90%;
    @media screen and (max-width: 320px) {
      grid-template-columns: auto auto;
    }
    @media screen and (max-width: 480px) {
      grid-template-columns: auto auto;
    }
    .token-share {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 100%;
      .owner-share {
        font-size: 35px;
        line-height: 60px;
        lettwe-spacing: 2px;
        font-weight: 400;
        margin-top: 10px;
      }
      .owner {
        color: var(--ter-black);
        letter-spacing: 2px;
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
        margin-bottom: 10px;
      }
    }
  }
`;
