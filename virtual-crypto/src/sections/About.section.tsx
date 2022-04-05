import React from "react";
import styled from "styled-components";
import { HeadingTwoComponent } from "../components/HeadingTwo.component";
import { LayoutComponent } from "../components/Layout.component";
import { IMAGES } from "../consts/constants";

export const AboutSection = () => {
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
          <div className="images">
            {IMAGES.map((image, idx) => (
              <img key={idx} src={image} alt="bitchposter" className="img" />
            ))}
          </div>
        </div>
      </CustomArticle>
    </LayoutComponent>
  );
};

const CustomArticle = styled.article`
  display: grid;
  grid-template-columns: 45% 45%;
  grid-gap: 10%;
  .left-side {
    span {
      color: var(--main-red);
    }
  }
  .img {
    width: 250px;
    margin: 1rem 0;
    margin-left: -2rem;
  }
  .right-side {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
