import React, { FC, ReactNode } from "react";
import styled from "styled-components";

interface IButton {
  children: ReactNode | string;
  link?: string;
  noshadow?: boolean;
}

export const ButtonComponent: FC<IButton> = ({ children, link, noshadow }) => {
  return (
    <CustomButton noshadow={noshadow}>
      {link ? <a href={link}>{children}</a> : children}
    </CustomButton>
  );
};

const CustomButton = styled.button<{ noshadow?: boolean }>`
  padding: 14px 32px;
  border: none;
  background-color: var(--main-red);
  color: var(--main-white);
  border-radius: 8px;
  font-family: Oswald, san-serif;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  box-shadow: ${(props) => (props.noshadow ? "" : "1px 1px 20px 0 #fbbe35 ")};
  letter-spacing: 4px;
  transition: all 0.2s ease;
  a {
    text-decoration: none;
  }
  &:hover {
    background-color: var(--sec-red);
  }
`;
