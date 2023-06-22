import React from "react";
import { withKnobs, text, array } from "@storybook/addon-knobs";
import knobData from "./inputForm.knobs.json";
import { InputForm } from "./inputForm";
const { fields } = knobData;

export const basicInputForm = () => {
  return (
    <InputForm fields={array(fields.label, fields.default, fields.group)} />
  );
};

export default {
  title: "Molecules/InputForm",
  component: InputForm,
  tags: ["autodocs"],
};
