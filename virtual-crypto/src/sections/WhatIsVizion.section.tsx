import React from "react";
import styled from "styled-components";
import { HeadingTwoComponent } from "../components/HeadingTwo.component";
import { LayoutComponent } from "../components/Layout.component";
import { WHATIS } from "../consts/constants";

export const WhatIsVizionSection = () => {
  return (
    <LayoutComponent>
      <CustomWhatIs>
        <div className="left-side">
          <video width="400" height="450" autoPlay muted loop className="video">
            <source
              src="./assets/images/Bitch Ass NFT Animation.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="right-side">
          <HeadingTwoComponent sentencecase>
            What Is ViZion Protocol and Why The Bitch Ass NFT Matters...
          </HeadingTwoComponent>
          <img
            src="./assets/images/bitchass.png"
            alt="bitch ass logo"
            className="img"
          />
          {WHATIS.map((item, idx) => (
            <p key={idx} className="what-is-body">
              {item}
            </p>
          ))}
        </div>
      </CustomWhatIs>
    </LayoutComponent>
  );
};

const CustomWhatIs = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 100px;
  padding: 0 4rem;
  @media screen and (max-width: 768px) {
    display: block;
  }
  @media screen and (max-width: 1024px) {
    display: block;
  }
  .left-side {
    .video {
      margin-top: 13rem;
      @media screen and (max-width: 320px) {
        width: 100%;
      }
      @media screen and (max-width: 480px) {
        width: 100%;
      }
    }
  }
  .img {
    width: 250px;
    margin: 1rem 0;
    margin-left: -2rem;
  }
  .what-is-body {
    margin-bottom: 1rem;
  }
`;
