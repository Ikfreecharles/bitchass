import React from "react";
import styled from "styled-components";
import { LayoutComponent } from "../components/Layout.component";

export const Footer = () => {
  return (
    <LayoutComponent>
      <CustomSection>
        <div className="footer">
          <p>@ 2022 Bitch Ass The Movie. All Rights Reserved.</p>
          <p>
            Site Developed by{" "}
            <span>
              <a href="https://vizionprotocol.io/">ViZion Protocol</a>
            </span>
          </p>
        </div>
      </CustomSection>
    </LayoutComponent>
  );
};
const CustomSection = styled.article`
  height: 700px;
  background: url("./assets/images/bitchAss Footer.jpeg") no-repeat center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  text-align: center;
  .footer {
    width: 100%;
    position: absolute;
    bottom: 0;
    margin: 0 auto;
    a {
      color: var(--main-yellow);
    }
  }
`;
