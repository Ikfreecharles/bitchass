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
    <CustomSection>
      <VerticalTimeline lineColor="var(--main-red)">
        {ROADMAP_TREE.map(({ title, desc, date, completed }, idx) => (
          <CustomVerticalTimelineElement
            key={idx}
            className="vertical-timeline-element--work"
            date={title}
            dateClassName="timeline-title"
            completed={completed}
          >
            <h4 className="vertical-timeline-element-subtitle">{desc}</h4>
            <p>{date}</p>
          </CustomVerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </CustomSection>
  );
};

const CustomSection = styled.section`
  width: 75%;
  max-width: 1500px;
  margin: 0 auto 10rem;
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
  }
  .timeline-title {
    font-size: 3rem !important;
    font-family: var(--main-font);
    padding: 0 !important;
    text-transform: uppercase;
    line-height: 1;
    color: var(--ter-black);
    margin-top: -15px;
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
