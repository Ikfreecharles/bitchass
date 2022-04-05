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
              <ol>
                <h5 className="title">{title}</h5>
                <ul>
                  {item.map((list) => (
                    <li>{list}</li>
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
  .column {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 30px;

    .left-side,
    .right-side {
      background-color: var(--sec-black);
      border-radius: 20px;
    }
    .left-side {
      text-align: left;
      padding: 2rem;
      .title {
        color: var(--main-red);
        font-family: var(--main-font);
        font-size: 1.2rem;
      }
      ul {
        margin-left: 1.1rem;
        li {
          font-family: var(--main-font);
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
    }
  }
`;
