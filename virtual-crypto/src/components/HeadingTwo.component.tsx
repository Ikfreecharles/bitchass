import React, { FC } from "react";
import styled from "styled-components";

interface IHeadingTwo {
  children: string;
  classname?: string;
  sentencecase?: boolean;
}

export const HeadingTwoComponent: FC<IHeadingTwo> = ({
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

const CustomHeading = styled.h2<{ sentencecase?: boolean }>`
  font-size: 14px;
  font-weight: 700;
  font-family: Oswald, sans-serif;
  text-transform: ${(props) => (props.sentencecase ? "" : "uppercase")};
  color: var(--main-red);
  text-shadow: 0 0 9px #fff;
  letter-spacing: 4px;
`;
