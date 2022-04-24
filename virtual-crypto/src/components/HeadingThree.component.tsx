import React, { FC } from "react";
import styled from "styled-components";

interface IHeadingTwo {
  children: string;
  classname?: string;
  sentencecase?: boolean;
}

export const HeadingThreeComponent: FC<IHeadingTwo> = ({
  children,
  classname,
  sentencecase,
}) => {
  return (
    <CustomHeading className={classname} sentencecase={sentencecase}>
      {children}
    </CustomHeading>
  );
};

const CustomHeading = styled.h3<{ sentencecase?: boolean }>`
  font-size: 70px;
  font-family: var(--main-font);
  margin: 10px 0 50px;
  text-transform: ${(props) => (props.sentencecase ? "" : "uppercase")};
  text-shadow: 0 0 9px #fff;
  letter-spacing: 2px;
  line-height: 80px;
`;
