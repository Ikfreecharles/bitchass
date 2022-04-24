import React from "react";
import styled from "styled-components";
import { HeadingThreeComponent } from "../components/HeadingThree.component";
import { HeadingTwoComponent } from "../components/HeadingTwo.component";
import { LayoutComponent } from "../components/Layout.component";
// import {
//   Accordion,
//   AccordionItem,
//   AccordionItemHeading,
//   AccordionItemButton,
//   AccordionItemPanel,
// } from "react-accessible-accordion";
// import "react-accessible-accordion/dist/fancy-example.css";
import { FAQ } from "../consts/constants";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";

export const FaqSection = () => {
  return (
    <LayoutComponent>
      <CustomSection>
        <img
          src="./assets/images/ViZion Protocol Logo.png"
          alt="logo"
          className="logo"
        />
        <HeadingTwoComponent sentencecase>ViZion Protocol</HeadingTwoComponent>
        <HeadingThreeComponent>FAQ</HeadingThreeComponent>

        {FAQ.map(({ question, answer }, idx) => (
          <CustomAccordion key={idx} disableGutters square>
            <AccordionSummary
              expandIcon={
                <KeyboardArrowDownRoundedIcon
                  sx={{ color: "var(--main-white)", fontSize: "2.5rem" }}
                />
              }
            >
              <div className="accordion-title">{question}</div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="accordion-text">{answer}</div>
            </AccordionDetails>
          </CustomAccordion>
        ))}

        {/* <Accordion allowZeroExpanded allowMultipleExpanded>
          {FAQ.map(({ question, answer }, idx) => (
            < AccordionItem key={idx}>
              <AccordionItemHeading>
                <AccordionItemButton>{question}</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>{answer}</p>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion> */}
      </CustomSection>
    </LayoutComponent>
  );
};
const CustomSection = styled.article`
  text-align: center;
  width: 70%;
  margin: 0 auto;
  .logo {
    width: 200px;
  }
  .accordion {
    text-align: left;
    .accordion__item {
      transition: all 0.4s ease;
    }
    .accordion__button {
      background-color: transparent;
      color: var(--main-white);
      border-top: 2px solid var(--main-red);
      padding: 24px 0;
      font-family: var(--main-font);
      font-size: 24px;
      line-height: 30px;
      font-weight: 700;
    }
    .accordion__panel {
      padding-top: 0;
      p {
        color: #e4e4e4;
        font-size: 14px;
        line-height: 20px;
      }
    }
    &:last-child {
      border-bottom: 2px solid var(--main-red);
    }
  }
`;

const CustomAccordion = styled(Accordion)`
  background-color: transparent !important;
  box-shadow: none !important;
  text-align: left !important;
  padding: 24px 0;
  border-top: 2px solid var(--main-red);
  &:last-child {
    border-bottom: 2px solid var(--main-red);
  }
  div {
    margin: 0;
    min-height: 0;
    padding: 0;
  }
  .accordion-title {
    font-family: var(--main-font);
    font-size: 24px;
    line-height: 30px;
    font-weight: 700;
  }
  .accordion-text {
    font-size: 14px;
    line-height: 20px;
    margin-top: 24px;
  }
`;
