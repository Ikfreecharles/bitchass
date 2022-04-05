import React, { FC } from "react";
import styled from "styled-components";

interface IHeadingTwo {
  children: string;
  classname?: string;
}

export const HeadingTwoComponent: FC<IHeadingTwo> = ({
  children,
  classname,
}) => {
  return <CustomHeading className={classname}>{children}</CustomHeading>;
};

const CustomHeading = styled.h2`
  font-size: 1.1rem;
  text-transform: uppercase;
  color: var(--main-red);
  text-shadow: 0 0 9px #fff;
`;
