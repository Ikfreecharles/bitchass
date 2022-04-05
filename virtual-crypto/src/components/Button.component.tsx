import React, { FC, ReactNode } from "react";
import styled from "styled-components";

interface IButton {
  children: ReactNode | string;
}

export const ButtonComponent: FC<IButton> = ({ children }) => {
  return <CustomButton>{children}</CustomButton>;
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
`;
