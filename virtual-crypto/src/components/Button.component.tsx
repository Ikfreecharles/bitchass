import React, { FC, ReactNode } from "react";
import styled from "styled-components";

interface IButton {
  children: ReactNode | string;
  link?: string;
}

export const ButtonComponent: FC<IButton> = ({ children, link }) => {
  return (
    <CustomButton>
      {link ? <a href={link}>{children}</a> : children}
    </CustomButton>
  );
};

const CustomButton = styled.button`
  padding: 0.6rem 1.8rem;
  border: none;
  background-color: var(--main-red);
  color: var(--main-white);
  border-radius: 5px;
  font-family: var(--main-font);
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 1px 1px 20px 0 #fbbe35;
  transition: all 0.2s ease;
  a {
    text-decoration: none;
  }
  &:hover {
    background-color: var(--sec-red);
  }
`;
