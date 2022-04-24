import React from "react";
import styled from "styled-components";
import { HeadingThreeComponent } from "../components/HeadingThree.component";
import { HeadingTwoComponent } from "../components/HeadingTwo.component";
import { LayoutComponent } from "../components/Layout.component";
import { LAUNCH } from "../consts/constants";

export const IdoLaunchSection = () => {
  return (
    <LayoutComponent>
      <CustomSection>
        <HeadingTwoComponent>$VIZION</HeadingTwoComponent>
        <HeadingThreeComponent>OFFICIAL IDO LAUNCH</HeadingThreeComponent>
        <div className="column">
          <div className="left-side">
            {LAUNCH.map(({ title, item }, idx) => (
              <ol key={idx}>
                <h5 className="title">{`${idx + 1}.${title}`}</h5>
                <ul>
                  {item.map((list, idx) => (
                    <li key={idx}>{list}</li>
                  ))}
                </ul>
              </ol>
            ))}
          </div>
          <div className="right-side">
            <img
              src="./assets/nfts/61e98f0066343cfc0d98185d_distribution.png"
              alt="atom"
            />
          </div>
        </div>
      </CustomSection>
    </LayoutComponent>
  );
};

const CustomSection = styled.article`
  text-align: center;
  width: 100%;
  .column {
    margin-top: 82px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 16px;
    width: 100%;
    @media screen and (max-width: 768px) {
      display: block;
    }

    @media screen and (max-width: 1024px) {
      display: block;
    }

    .left-side,
    .right-side {
      background-color: var(--sec-black);
      border-radius: 12px;
      @media screen and (max-width: 768px) {
        margin-bottom: 1rem;
      }

      @media screen and (max-width: 1024px) {
        margin-bottom: 1rem;
      }
    }
    .left-side {
      text-align: left;
      padding: 31px 41px;
      .title {
        color: var(--main-red);
        font-family: var(--main-font);
        font-size: 16px;
        margin-bottom: 10px;
        letter-spacing: 4px;
        text-shadow: 0 0 9px #fff;
        line-height: 20px;
        font-weight: 700;
      }
      ul {
        margin-left: 1.1rem;
        li {
          font-family: var(--main-font);
          margin-bottom: 10px;
          letter-spacing: 2px;
          font-size: 14px;
          line-height: 20px;
        }
      }

      ol:first-child {
        margin-bottom: 2rem;
      }
    }
    .right-side {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 50%;
      }
      @media screen and (max-width: 768px) {
        padding: 3rem 0;
      }

      @media screen and (max-width: 1024px) {
        padding: 3rem 0;
      }
    }
  }
`;
