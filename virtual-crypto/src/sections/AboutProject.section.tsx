import React from "react";
import styled from "styled-components";
import { HeadingTwoComponent } from "../components/HeadingTwo.component";
import { LayoutComponent } from "../components/Layout.component";

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
      </CustomAbout>
    </LayoutComponent>
  );
};

const CustomAbout = styled.article`
  padding: 0 10rem;
  text-align: center;
  height: 700px;
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
`;
