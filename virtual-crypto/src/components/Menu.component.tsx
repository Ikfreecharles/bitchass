import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { variants } from "../consts/animation";
import { CONTACT, MENU_ITEMS, SOCIAL_MEDIA } from "../consts/constants";
import { useAppSelector } from "../redux/Hooks";
import { LayoutComponent } from "./Layout.component";

export const MenuComponent = () => {
  const isOpen = useAppSelector((state) => state.nav.isOpen);
  return (
    <CustomMenu variants={variants} animate={isOpen ? "open" : "closed"}>
      <LayoutComponent classname="main-section">
        <div className="menu-items">
          <div className="left-side">
            <h2>ViZion Protocol</h2>
            <div className="social-media">
              {SOCIAL_MEDIA.map(({ name, Icon, link }) =>
                name && name === "magiceden" ? (
                  <a href={link}>
                    <div className="social-icon">
                      <img
                        src="./assets/images/MAGIC_EDEN_LOGO-removebg-preview.png"
                        alt={name}
                        className="magiceden"
                      />
                    </div>
                  </a>
                ) : (
                  <a href={link}>
                    <div className="social-icon">
                      <Icon />
                    </div>
                  </a>
                )
              )}
            </div>
            {CONTACT.map(({ title, desc, type, link }, idx) => (
              <div key={idx} className="contact">
                <p className="title">{title}</p>
                <p className="desc">
                  {type === "mail" ? (
                    <a href={`mailto:${link}`}>{desc}</a>
                  ) : (
                    <a href={link}>{desc}</a>
                  )}
                </p>
              </div>
            ))}
          </div>
          <div className="right-side">
            <ul>
              {MENU_ITEMS.map(({ title, id }, idx) => (
                <li key={idx}>
                  <a href={`#${id}`}>{title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </LayoutComponent>
    </CustomMenu>
  );
};
const CustomMenu = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;

  .main-section {
    margin-bottom: 0;
  }

  background-color: rgba(0, 0, 0, 0.7);
  z-index: 5;
  display: flex;
  align-items: center;

  .menu-items {
    width: 100%;
    display: grid;
    grid-template-columns: 45% 45%;
    grid-gap: 10%;

    .left-side {
      .social-media {
        display: flex;
        align-items: center;
        margin: 2rem 0;

        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          min-width: 40px;
          border-radius: 50%;
          background-color: var(--main-white);
          color: var(--main-black);
          font-size: 1.4rem;
          margin-right: 0.5rem;
        }
        .magiceden {
          width: 40px;
        }
      }
      .contact {
        font-family: var(--main-font);
        .desc {
          margin-bottom: 1rem;
          a {
            color: var(--main-red);
            text-decoration: none;
          }
        }
      }
    }
    li {
      list-style: none;
      padding: 1rem 0;

      a {
        font-family: var(--main-font);
        font-size: 2rem;
        font-weight: 800;
        text-transform: uppercase;
        text-decoration: none;
        transition: all 0.2s ease;
        &:hover {
          color: var(--main-yellow);
          text-decoration: line-through;
        }
      }
    }
  }
`;
