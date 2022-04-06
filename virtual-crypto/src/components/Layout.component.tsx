import { motion } from "framer-motion";
import React, { FC, ReactNode } from "react";
import styled from "styled-components";

interface ILayout {
  children: ReactNode;
  classname?: string;
}

export const LayoutComponent: FC<ILayout> = ({ children, classname }) => {
  return (
    <CustomLayout
      className={classname}
      initial={{ opacity: 0, y: "40%" }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </CustomLayout>
  );
};

const CustomLayout = styled(motion.section)`
  width: 75%;
  max-width: 1500px;
  margin: 0 auto 10rem;
`;
