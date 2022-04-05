import React, { FC } from "react";
import styled from "styled-components";

interface IHeadingTwo {
  children: string;
  classname?: string;
}

export const HeadingThreeComponent: FC<IHeadingTwo> = ({
  children,
  classname,
}) => {
  return <CustomHeading className={classname}>{children}</CustomHeading>;
};

const CustomHeading = styled.h3`
  font-size: 4rem;
  font-family: var(--main-font);
  margin-bottom: 3rem;
  text-transform: uppercase;
  text-shadow: 0 0 9px #fff;
`;
