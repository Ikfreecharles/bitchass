import React from "react";
import styled from "styled-components";
import { HeadingTwoComponent } from "../components/HeadingTwo.component";
import { LayoutComponent } from "../components/Layout.component";
import { BITCHASS_CARDS } from "../consts/constants";

export const AboutProjectSection = () => {
  return (
    <LayoutComponent>
      <CustomAbout>
        <h2 className="title">1000</h2>
        <HeadingTwoComponent classname="subtitle">
          Bitch Ass The Movie NFT's
        </HeadingTwoComponent>
        <p>
          Customized and Uniquely designed to include some of the best utility
          in the NFT space. Bitch Ass NFTs are the first ever NFT project that
          provides unparalleled utility, several red carpet VIP experiences, IDO
          allocation, Staking, Metaverse access to our Movie Premier and more
          dynamic perks in the Film, Music, Art and Entertainment Industry.
        </p>
        {/* <div className="card-list">
          {BITCHASS_CARDS.map(({ img, classname }, idx) => (
            <img
              key={idx}
              src={img}
              alt={classname}
              className={`cards ${classname}`}
            />
          ))}
        </div> */}
      </CustomAbout>
    </LayoutComponent>
  );
};

const CustomAbout = styled.article`
  padding: 0 10rem;
  text-align: center;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
  @media screen and (max-width: 1024px) {
    padding: 0;
  }

  .title {
    font-family: var(--main-font);
    color: var(--main-red);
    font-size: 4.8rem;
    line-height: 1.2;
    text-shadow: 0 0 9px #fff;
  }
  .subtitle {
    color: var(--main-red);
    font-family: var(--main-font);
    margin: 1rem 0;
  }
  .card-list {
    display: flex;
    position: relative;
    width: 100%;
    margin-top: 3rem;
    .cards {
      height: 300px;
      z-index: 3;
      vertical-align: middle;
      position: relative;
      display: inline-block;
      margin-left: -10px;
    }

    .img1 {
      transform: scale3d(0.8, 0.8, 1) translate3d(0px, 0px, 0px);
      transform-style: preserve-3d;
      z-index: 1;
    }
    .img2 {
      transform: scale3d(0.9, 0.9, 1) translate3d(-80px, 0px, 0px);
      transform-style: preserve-3d;
      z-index: 2;
    }
    .img3 {
      transform: translate3d(-100px, 0px, 0px);
      transform-style: preserve-3d;
      z-index: 3;
    }

    .img4 {
      transform: scale3d(0.9, 0.9, 1) translate3d(-160px, 0px, 0px);
      transform-style: preserve-3d;
      z-index: 2;
    }
    .img5 {
      transform: scale3d(0.8, 0.8, 1) translate3d(-250px, 0px, 0px);
      transform-style: preserve-3d;
      z-index: 1;
    }
  }
`;
