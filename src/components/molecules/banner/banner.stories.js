import React from "react";
import { withKnobs, select, array } from "@storybook/addon-knobs";
import Banner from "./banner";
import knobData from "./banner.knobs.json";

const { image, main, link, alt } = knobData;
export const baseBanner = () => {
  return (
    <Banner
      image={image.default}
      main={main.default}
      link={link.default}
      alt={alt.default}
    />
  );
};

export default {
  component: Banner,
  decorators: [withKnobs],
  title: "Molecules/Banner",
  tags: ["autodocs"],
};
