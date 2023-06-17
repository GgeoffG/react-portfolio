import React from "react";
import { withKnobs, select, array } from "@storybook/addon-knobs";
import NavBar from "./navBar";
import knobData from "./navbar.knobs.json";

const { direction, items, location } = knobData;
export const headerNavBar = () => {
  return (
    <NavBar
      location={select(
        location.label,
        location.options,
        location.default,
        location.group
      )}
      direction={select(
        direction.label,
        direction.options,
        direction.default,
        direction.group
      )}
      items={items.default}
    />
  );
};

export const footerNavBar = () => {
  return (
    <NavBar
      location={select(
        location.label,
        location.options,
        "footer",
        location.group
      )}
      direction={select(
        direction.label,
        direction.options,
        direction.default,
        direction.group
      )}
      items={array(items.label, items.default, items.group)}
    />
  );
};

export default {
  component: NavBar,
  decorators: [withKnobs],
  title: "Molecules/NavBar",
  tags: ["autodocs"],
};
