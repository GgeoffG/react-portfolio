import React from "react";
import { withKnobs, select, array, text } from "@storybook/addon-knobs";
import Banner from "./banner";
import knobData from "./banner.knobs.json";

const { image, main, link, name } = knobData;
export const baseBanner = () => {
  return (
    <Banner
      image={text(image.label, image.default, image.group)}
      main={select(main.label, main.options, main.default, main.group)}
      link={text(link.label, link.default, link.group)}
      name={text(name.label, name.default, name.group)}
      // alt={alt.default}
    />
  );
};

export default {
  component: Banner,
  decorators: [withKnobs],
  title: "Molecules/Banner",
  tags: ["autodocs"],
};
