import React from "react";
import { withKnobs, select, array } from "@storybook/addon-knobs";
import Footer from "./footer";
import knobData from "./footer.knobs.json";

const { menus } = knobData;
export const baseFooter = () => {
  return <Footer menus={array(menus.label, menus.default, menus.group)} />;
};

export default {
  component: Footer,
  decorators: [withKnobs],
  title: "Organism/Footer",
  tags: ["autodocs"],
};
