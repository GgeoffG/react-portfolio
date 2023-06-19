import React from "react";
import { withKnobs, select, array } from "@storybook/addon-knobs";
import WorkDisplay from "./workDisplay";
import knobData from "./workDisplay.knobs.json";

const { works } = knobData;
export const baseWorkDisplay = () => {
  return <WorkDisplay works={array(works.label, works.default, works.group)} />;
};

export default {
  component: WorkDisplay,
  decorators: [withKnobs],
  title: "Organism/WorkDisplay",
  tags: ["autodocs"],
};
