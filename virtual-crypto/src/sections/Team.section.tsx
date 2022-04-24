import React from "react";
import styled from "styled-components";
import { HeadingThreeComponent } from "../components/HeadingThree.component";
import { HeadingTwoComponent } from "../components/HeadingTwo.component";
import { LayoutComponent } from "../components/Layout.component";
import { TEAM } from "../consts/constants";

export const TeamSection = () => {
  return (
    <LayoutComponent style={{ marginBottom: 0 }}>
      <CustomSection>
        <div className="team-desc">
          <img
            src="./assets/images/ViZion Protocol Logo.png"
            alt="logo"
            className="logo"
          />
          <HeadingTwoComponent sentencecase classname="team-subtitle">
            Bitch Asss Official NFT Launch
          </HeadingTwoComponent>
          <HeadingThreeComponent sentencecase classname="team-title">
            Meet the Team
          </HeadingThreeComponent>
          <p className="team-desc">
            The Official Bitch Ass NFT Launch is headed by none other than one
            of the Co-Founders of ViZion Protocol and the Director of the Film,
            Bill Posley. As mentioned before, another Co-Founder of ViZion
            Protocol, Tunde Laleye, is starring as Bitch Ass himself! ViZion
            Protocol has over 12 members on it's team, which can be found here
            on{" "}
            <a href="https://vizionprotocol.io/" className="link">
              Our Website
            </a>
            . These are the ViZion Protocol team members who helped put Bitch
            Ass together and will help execute this launch.
          </p>
        </div>

        <div className="team-members">
          {TEAM.map(({ image, name, role }, idx) => (
            <div className="member" key={idx}>
              <div className="profile-image">
                <img src={image} alt={name} className="member-img" />
              </div>

              <p className="name">{name}</p>
              <p className="role">{role}</p>
            </div>
          ))}
        </div>
      </CustomSection>
    </LayoutComponent>
  );
};
const CustomSection = styled.article`
  .team-desc {
    text-align: center;
    max-width: 640px;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
      padding: 0;
    }
    @media screen and (max-width: 1024px) {
      padding: 0;
    }
    .logo {
      width: 200px;
    }
    .team-subtitle {
      margin: 0;
    }
    .team-title {
      margin: 10px 0 40px;
    }
    .team-desc {
      width: 80%;
    }
    .link {
      color: var(--main-red);
    }
  }

  .team-members {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 150px;
    margin-top: 6rem;
    text-align: center;
    width: 100%;
    @media screen and (max-width: 320px) {
      display: block;
    }
    @media screen and (max-width: 480px) {
      display: block;
    }
    .profile-image {
      height: 400px;
      width: 100%;
      .member-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .name {
      font-family: var(--main-font);
      font-size: 24px;
      margin: 20px 0;
    }
    .role {
      color: var(--ter-black);
    }
  }
`;
