import React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled from "styled-components";
import { ROADMAP_TREE } from "../consts/constants";

export const RoadmapTreeSection = () => {
  return (
    <CustomSection style={{ position: "relative" }}>
      <VerticalTimeline lineColor="var(--main-red)">
        {ROADMAP_TREE.map(({ title, desc, date, completed }, idx) => (
          <CustomVerticalTimelineElement
            key={idx}
            className="vertical-timeline-element--work"
            date={title}
            dateClassName="timeline-title"
            completed={completed}
            position="right"
          >
            <h4 className="vertical-timeline-element-subtitle">{desc}</h4>
            <p>{date}</p>
          </CustomVerticalTimelineElement>
        ))}
        <div className="fade-bottom"></div>
      </VerticalTimeline>
      <div className="fixed-wrapper">
        <div className="grey-overlay"></div>
        <div className="overlay-opacity"></div>
      </div>

      <div className="fade-top"></div>
    </CustomSection>
  );
};

const CustomSection = styled.section`
  width: 80vw;
  max-width: 1500px;
  margin: 0 auto 10rem;
  position: relative;
  z-index: 0;
  .vertical-timeline {
    padding: 8em 0 0; position: relative;
  }
  .fixed-wrapper {
    position: sticky;
    bottom: 0;
    height: 60vh;
    width: 100%;
  }
  .grey-overlay {
    position: sticky;
    bottom: 0;
    height: 100%;
    width: 100%;
    backdrop-filter: grayscale(100%);
    z-index: -3;
  }
  .overlay-opacity {
    position: sticky;
    bottom: 0;
    height: 100%;
    width: 100%;

    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.8) 80%
    );
    z-index: -5;
  }
  .fade-bottom {
    position: absolute;
    left: 0%;
    top: auto;
    right: 0%;
    bottom: 0%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: 15vh;
    background-image: -webkit-gradient(
      linear,
      left bottom,
      left top,
      from(#010101),
      to(rgba(10, 10, 10, 0))
    );
    background-image: linear-gradient(0deg, #010101, rgba(10, 10, 10, 0));
    color: #030303;
  }
  .fade-top {
    position: absolute;
    left: 0%;
    top: 0%;
    right: 0%;
    bottom: auto;
    height: 15vh;
    background-image: -webkit-gradient(linear, left top, left bottom, from(#010101), to(rgba(10, 10, 10, 0)));
    background-image: linear-gradient(180deg, #010101, rgba(10, 10, 10, 0));
}

  }
`;
const CustomVerticalTimelineElement = styled(VerticalTimelineElement)<{
  completed?: boolean;
}>`
  margin-bottom: 10rem !important;

  .bounce-in {
    background: transparent;
    box-shadow: none;
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .vertical-timeline-element-icon {
    width: 30px !important;
    height: 30px !important;
    min-width: 30px !important;
    background-color: var(--main-white);
    border: 4px solid var(--main-black);
    box-shadow: none;
    margin-left: -15px !important;
  }
  .vertical-timeline-element-subtitle {
    line-height: 1.3;
    font-weight: 500;
    font-size: 17px;
    letter-spacing: 0;
    font-family: Montserrat, sans-serif;
  }
  .timeline-title {
    font-size: 48px !important;
    font-family: var(--main-font);
    padding: 0 !important;
    text-transform: uppercase;
    line-height: 1;
    margin-top: -15px;
    letter-spacing: -0.03em;
    font-weight: 800;
    opacity: 1;
    @media screen and (max-width: 320px) {
      font-size: 2.2rem !important;
    }
    @media screen and (max-width: 480px) {
      font-size: 2.2rem !important;
    }
  }

  .timeline-title {
    text-decoration: ${(props) => (props.completed ? "line-through" : "")};
  }
`;
