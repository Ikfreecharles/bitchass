import React, { Children, FC, ReactNode } from "react";
import styled from "styled-components";

interface ILayout {
  children: ReactNode;
  classname?: string;
}

export const LayoutComponent: FC<ILayout> = ({ children, classname }) => {
  return <CustomLayout className={classname}>{children}</CustomLayout>;
};

const CustomLayout = styled.section`
  width: 75%;
  max-width: 1500px;
  margin: 0 auto 10rem;
`;
