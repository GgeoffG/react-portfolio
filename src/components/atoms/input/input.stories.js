import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import knobData from "./input.knobs.json";
import { Input } from "./input";
const { label, name, type } = knobData;

export const basicInput = () => {
  return (
    <Input
      label={text(label.label, label.default, label.group)}
      name={text(name.label, name.default, name.group)}
      type={text(type.label, type.default, type.group)}
    />
  );
};

export default {
  title: "Atoms/Input",
  component: Input,
  tags: ["autodocs"],
};
