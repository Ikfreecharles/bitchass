import React from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useAppSelector } from "../redux/Hooks";
import { useDispatch } from "react-redux";
import { setIsOpen } from "../redux/navslice/NavSlice";

export const NavbarComponent = () => {
  const isOpen = useAppSelector((state) => state.nav.isOpen);
  const dispatch = useDispatch();
  return (
    <CustomNav>
      <img
        src="./assets/images/ViZion Protocol Logo.png"
        alt="logo"
        className="logo"
      />
      {isOpen ? (
        <IoClose className="icon" onClick={() => dispatch(setIsOpen(false))} />
      ) : (
        <GiHamburgerMenu
          className="icon"
          onClick={() => dispatch(setIsOpen(true))}
        />
      )}
    </CustomNav>
  );
};

const CustomNav = styled.nav`
  position: fixed;
  padding: 1rem 3rem;
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 20;

  top: 0;
  .logo {
    width: 120px;
  }
  .icon {
    font-size: 4rem;
    cursor: pointer;
  }
`;
