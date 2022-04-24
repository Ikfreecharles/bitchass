import React from "react";
import styled from "styled-components";
import { HeadingTwoComponent } from "../components/HeadingTwo.component";
import { LayoutComponent } from "../components/Layout.component";
import { BITCHASS_CARDS } from "../consts/constants";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";

export const AboutProjectSection = () => {
  const visibilityRef: React.LegacyRef<HTMLDivElement> | undefined =
    React.createRef();
  return (
    <LayoutComponent>
      <CustomAbout>
        <VisibilitySensor>
          {({ isVisible }) => (
            <div style={{ height: 100 }} ref={visibilityRef}>
              {isVisible ? (
                <CountUp start={0} end={1000} duration={1} delay={0}>
                  {({ countUpRef, start }) => (
                    <div>
                      <span className="title" ref={countUpRef} />
                    </div>
                  )}
                </CountUp>
              ) : null}
            </div>
          )}
        </VisibilitySensor>

        <HeadingTwoComponent classname="subtitle" sentencecase>
          Bitch Ass The Movie NFT's
        </HeadingTwoComponent>
        <p className="about-desc">
          Customized and Uniquely designed to include some of the best utility
          in the NFT space. Bitch Ass NFTs are the first ever NFT project that
          provides unparalleled utility, several red carpet VIP experiences, IDO
          allocation, Staking, Metaverse access to our Movie Premier and more
          dynamic perks in the Film, Music, Art and Entertainment Industry.
        </p>
        <div className="card-list">
          <div className="card-container">
            {BITCHASS_CARDS.map(
              ({ img, classname, x, initial, transition }, idx) => (
                <motion.img
                  key={idx}
                  src={img}
                  alt={classname}
                  className={`cards ${classname}`}
                  whileInView={{ x }}
                  initial={initial}
                  transition={transition}
                />
              )
            )}
          </div>
        </div>
      </CustomAbout>
    </LayoutComponent>
  );
};

const CustomAbout = styled.article`
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
    font-size: 70px;
    line-height: 80px;
    letter-spacing: 2px;
    text-shadow: 0 0 9px #fff;
  }
  .subtitle {
    color: var(--main-red);
    font-family: var(--main-font);
    margin: 1rem 0;
  }
  .about-desc {
    width: 65%;
    margin: 0 auto;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 1.5px;
  }
  .card-list {
    width: 100%;
    margin-top: 3rem;
    .card-container {
      width: fit-content;
      margin: 0 auto;
      display: flex;
      position: relative;
    }
    .cards {
      height: 320px;
      z-index: 3;
      vertical-align: middle;
      position: relative;
      display: inline-block;
      margin-left: -10px;
    }

    .img1 {
      z-index: 1;
    }
    .img2 {
      z-index: 2;
    }
    .img3 {
      z-index: 3;
    }

    .img4 {
      z-index: 2;
    }
    .img5 {
      z-index: 1;
    }
  }
`;
