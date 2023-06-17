import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import knobData from "./link.knobs.json";
const { innerText } = knobData;

export const basicLink = () => {
  return (
    <a href="#">{text(innerText.label, innerText.default, innerText.group)}</a>
  );
};
export default {
  title: "Atoms/link",
  tags: ["autodocs"],
  decorators: [withKnobs],
};
