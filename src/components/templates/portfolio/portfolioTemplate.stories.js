import React from "react";
import { withKnobs, select, array, object } from "@storybook/addon-knobs";
import PortfolioTemplate from "./portfolioTemplate";
import knobData from "./portfolioTemplate.knobs.json";

const { header, footer, display } = knobData;
export const basePortfolioTemplate = () => {
  return (
    <PortfolioTemplate
      header={object(header.label, header.default, header.group)}
      footer={object(footer.label, footer.default, footer.group)}
      display={object(display.label, display.default, display.group)}
    />
  );
};

export default {
  component: PortfolioTemplate,
  decorators: [withKnobs],
  title: "Templates/PortfolioTemplate",
  tags: ["autodocs"],
};
