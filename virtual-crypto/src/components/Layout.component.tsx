import { motion } from "framer-motion";
import React, { FC, ReactNode } from "react";
import styled from "styled-components";

interface ILayout {
  children: ReactNode;
  classname?: string;
  style?: object;
}

export const LayoutComponent: FC<ILayout> = ({
  children,
  classname,
  style,
}) => {
  return (
    <CustomLayout
      className={classname}
      initial={{ opacity: 0, y: "40%" }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={style}
    >
      {children}
    </CustomLayout>
  );
};

const CustomLayout = styled(motion.section)`
  width: 80vw;
  max-width: 1500px;
  margin: 0 auto 10rem;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
  @media screen and (max-width: 1024px) {
    width: 90%;
  }
  @media screen and (max-width: 320px) {
    width: 94%;
  }
  @media screen and (max-width: 480px) {
    width: 94%;
  }
`;
