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
    <CustomMenu
      variants={variants}
      animate={isOpen ? "open" : "closed"}
      transition={{ duration: 0.8 }}
    >
      <LayoutComponent classname="main-section">
        <div className="menu-items">
          <div className="left-side">
            <h2 className="logo-name">ViZion Protocol</h2>
            <div className="social-media">
              {SOCIAL_MEDIA.map(({ name, Icon, link }, idx) =>
                name && name === "magiceden" ? (
                  <a href={link} key={idx}>
                    <div className="social-icon">
                      <img
                        src="./assets/images/MAGIC_EDEN_LOGO-removebg-preview.png"
                        alt={name}
                        className="magiceden"
                      />
                    </div>
                  </a>
                ) : (
                  <a href={link} key={idx}>
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
                <div className="menu-list" key={idx}>
                  <li className="normal-list">
                    <a href={`#${id}`}>{title}</a>
                  </li>
                  <li className="strikethrough-list">
                    <a href={`#${id}`}>{title}</a>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </LayoutComponent>
    </CustomMenu>
  );
};
const CustomMenu = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(1em);
  background-color: rgba(17, 20, 19, 0);
  z-index: 5;
  display: flex;
  align-items: center;

  .main-section {
    margin-bottom: 0;
  }

  .menu-items {
    width: 100%;
    display: grid;
    grid-template-columns: 45% 45%;
    grid-gap: 10%;
    @media screen and (max-width: 320px) {
      display: block;
    }
    @media screen and (max-width: 480px) {
      display: block;
    }

    .left-side {
      .logo-name {
        letter-spacing: 0;
        font-size: 24px;
        line-height: 34px;
        font-weight: 700;
      }
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
          margin-right: 1rem;
          transition: all 0.4s ease;
          &:hover {
            transform: scale(1.2);
          }
        }
        .magiceden {
          width: 40px;
        }
      }
      .contact {
        font-family: var(--main-font);
        .title {
          letter-spacing: 0;
          font-size: 14px;
        }
        .desc {
          margin-bottom: 1rem;
          a {
            color: var(--main-red);
            text-decoration: none;
            font-size: 14px;
            letter-spacing: 0;
          }
        }
      }
    }
    .menu-list {
      overflow: hidden;
      height: 50px;
      margin: 20px 0;
      cursor: pointer;
      transition: all 0.2s ease;
      &:hover {
        .normal-list {
          transform: translateY(-50px);
        }
        .strikethrough-list {
          transform: translateY(-50px);
        }
      }
    }
    li {
      list-style: none;
      transition: all 0.2s ease;
      a {
        font-family: var(--main-font);
        font-size: 34px;
        line-height: 43px;
        font-weight: 700;
        text-transform: uppercase;
        text-decoration: none;
        position: relative;
      }
    }
    .strikethrough-list {
      a {
        color: var(--main-yellow);
        text-decoration: line-through;
      }
    }
  }
`;
