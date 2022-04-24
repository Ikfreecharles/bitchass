import { ReactNode } from "react";

export interface ITabs {
  id: string;
  title: string;
  avatars: IAvatar[];
}
export interface IAvatar {
  id: string;
  name: string;
  image: string;
  rarity: string;
}
export interface IFeatures {
  id: string;
  image: string;
  title: string;
  desc: string;
}
export interface ILaunch {
  title: string;
  item: string[];
}
export interface ITokenShare {
  share: string;
  owner: string;
}
export interface IMint {
  icon: string;
  title: string;
  desc: string;
}
export interface IRoadmap {
  title: string;
  desc: string;
  date: string;
  completed: boolean;
}
export interface IFaq {
  question: string;
  answer: string;
}
export interface ITeam {
  image: string;
  name: string;
  role: string;
}
export interface IMenu {
  title: string;
  id: string;
}
export interface ISocial {
  Icon: any;
  name: string;
  link: string;
}
export interface IContact {
  title: string;
  desc: string;
  type: "mail" | "link";
  link: string;
}
export interface IImages {
  classname: string;
  img: string;
}
export interface IBitchAssCards {
  img: string;
  classname: string;
  x: string;
  initial: {
    x: string;
    scale: string;
  };
  transition: {
    duration: number;
    ease: string;
    delay: number;
  };
}
