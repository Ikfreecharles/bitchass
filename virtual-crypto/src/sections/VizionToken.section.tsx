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
        <HeadingThreeComponent classname="subtitle">
          $Vizion token
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
  padding: 3rem 8rem;
  .logo {
    width: 100px;
  }
  .subtitle {
    margin-bottom: 0;
  }

  .share {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 50px;
    width: 100%;
    .token-share {
      display: flex;
      flex-direction: column;
      align-items: center;
      .owner-share {
        font-size: 3rem;
        line-height: 1.2;
      }
    }
  }
`;
