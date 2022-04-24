import React, { useState } from "react";
import styled from "styled-components";
import { HeadingTwoComponent } from "../components/HeadingTwo.component";
import { LayoutComponent } from "../components/Layout.component";
import { IMAGES } from "../consts/constants";

export const AboutSection = () => {
  const [flipped, setFlipped] = useState<boolean>(false);

  const flip = () => {
    setFlipped((flipped) => !flipped);
  };
  return (
    <LayoutComponent>
      <CustomArticle>
        <div className="left-side">
          <HeadingTwoComponent>About</HeadingTwoComponent>

          <img
            src="./assets/images/bitchass.png"
            alt="bitch ass logo"
            className="img"
          />
          <p>
            <span> Bitch Ass The Movie is a Feature Film </span> that is having
            it's WORLD PREMIER at SXSW (South By Southwest) from March 11th -
            March 20th. This is the first ever masked blask serial killer in
            cinemas history! This WILL BE an iconic film and our team would love
            for you to be there to celebrate these moments with the cast and
            crew during our international film festival run. Here is the summary
            of the movie below. <br /> <br /> The year is 1980. Young Cecil is
            bullied by kids in the 6th Street gang for being fat, shy, and
            always playing board games. They all pick on him and call him Bitch
            Ass. On a gang initiation night they jump him and leave him for
            dead. <br />
            <br />
            Fast forward to 1999. No one has seen or heard from Bitch Ass since,
            and he has become an urban legend. Now, a new crop of 6th Street
            recruits are gearing up for another initiation night. They get
            tasked with robbing a house, but little do they know they're walking
            into Bitch Ass' house, and he has been plotting his revenge by
            building deadly versions of the childhood games they bullied him for
            playing. Let the games begin!
          </p>
        </div>
        <div className="right-side">
          <div
            className={`images ${flipped ? "flipped" : ""}`}
            onMouseEnter={flip}
            onMouseLeave={flip}
          >
            {IMAGES.map(({ classname, img }, idx) => (
              <img
                key={idx}
                src={img}
                alt="bitchposter"
                className={classname}
              />
            ))}
          </div>
        </div>
      </CustomArticle>
    </LayoutComponent>
  );
};

const CustomArticle = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 100px;
  padding: 0 3rem;
  @media screen and (max-width: 768px) {
    display: block;
  }

  @media screen and (max-width: 1024px) {
    display: block;
  }
  .left-side {
    span {
      color: var(--main-red);
    }
  }
  .front,
  .back,
  .img {
    width: 250px;
    margin: 1rem 0;
    margin-left: -2rem;
  }

  .right-side {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 5rem;
    .images {
      height: 350px;
      margin: 0;
      padding: 0;
      top: 20px;
      width: 250px;

      position: relative;
      transform-style: preserve-3d;
      box-sizing: border-box;
      .front,
      .back {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        display: block;
        background: $new-white;
        padding: 10px;
        position: absolute;
        border-radius: 10px;
        backface-visibility: hidden;
        transform-style: preserve-3d;
        transition: -webkit-transform ease 500ms;
        transition: transform ease 500ms;
      }
      .front {
        z-index: 2;
        transform: rotateY(0deg);
      }
      .back {
        background: $new-white;
        transform: rotateY(-180deg);
        padding: 20px;
        font-size: 20px;
      }
      &.flipped {
        .front {
          transform: rotateY(180deg);
        }
        .back {
          transform: rotateY(0deg);
        }
      }
    }
  }
`;
