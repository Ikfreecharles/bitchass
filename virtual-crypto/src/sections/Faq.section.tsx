import React from "react";
import styled from "styled-components";
import { HeadingThreeComponent } from "../components/HeadingThree.component";
import { HeadingTwoComponent } from "../components/HeadingTwo.component";
import { LayoutComponent } from "../components/Layout.component";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { FAQ } from "../consts/constants";

export const FaqSection = () => {
  return (
    <LayoutComponent>
      <CustomSection>
        <img
          src="./assets/images/ViZion Protocol Logo.png"
          alt="logo"
          className="logo"
        />
        <HeadingTwoComponent>ViZion Protocol</HeadingTwoComponent>
        <HeadingThreeComponent>FAQ</HeadingThreeComponent>
        <Accordion allowZeroExpanded allowMultipleExpanded>
          {FAQ.map(({ question, answer }, idx) => (
            <AccordionItem key={idx}>
              <AccordionItemHeading>
                <AccordionItemButton>{question}</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>{answer}</p>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </CustomSection>
    </LayoutComponent>
  );
};
const CustomSection = styled.article`
  text-align: center;
  .logo {
    width: 200px;
  }
  .accordion {
    text-align: left;
    .accordion__button {
      background-color: transparent;
      color: var(--main-white);
      border-top: 2px solid var(--main-red);
      padding-left: 0;
      padding-right: 0;
      font-family: var(--main-font);
      font-size: 1.4rem;
    }
    .accordion__panel {
      padding-top: 0;
    }
    &:last-child {
      border-bottom: 2px solid var(--main-red);
    }
  }
`;
