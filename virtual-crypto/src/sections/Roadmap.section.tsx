import React from "react";
import styled from "styled-components";
import { HeadingThreeComponent } from "../components/HeadingThree.component";
import { HeadingTwoComponent } from "../components/HeadingTwo.component";
import { LayoutComponent } from "../components/Layout.component";
import { ROADMAP, ROADMAP_TREE } from "../consts/constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export const RoadmapSection = () => {
  return (
    <LayoutComponent>
      <CustomSection>
        <div className="top">
          <img src="./assets/images/bitchass.png" alt="logo" className="logo" />
          <HeadingTwoComponent>
            The Official "Bitch Ass" NFT Collection
          </HeadingTwoComponent>
          <HeadingThreeComponent>Roadmap</HeadingThreeComponent>
          {ROADMAP.map((item, idx) => (
            <p key={idx} className="roadmap">
              {item}
            </p>
          ))}
        </div>
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
    </LayoutComponent>
  );
};

const CustomSection = styled.article`
  .top {
    text-align: center;
    padding: 0 10rem;
    .logo {
      width: 300px;
    }
    .roadmap {
      margin-bottom: 1rem;
    }
    margin-bottom: 10rem;
  }
  .vertical-timeline-element--work {
    margin-bottom: 10rem;
    .bounce-in {
      background: transparent;
      box-shadow: none;
      padding-top: 0;
      padding-bottom: 0;
    }
    .vertical-timeline-element-icon {
      width: 30px;
      height: 30px;
      min-width: 30px;
      background-color: var(--main-white);
      border: 4px solid var(--main-black);
      box-shadow: none;
      margin-left: -15px;
    }
    .vertical-timeline-element-subtitle {
    }
    .timeline-title {
      font-size: 3rem !important;
      font-family: var(--main-font);
      padding: 0;
      text-transform: uppercase;
      line-height: 1;
      color: var(--ter-black);
      margin-top: -15px;
    }
  }
`;

const CustomVerticalTimelineElement = styled(VerticalTimelineElement)<{
  completed?: boolean;
}>`
  .timeline-title {
    text-decoration: ${(props) => (props.completed ? "line-through" : "")};
  }
`;
