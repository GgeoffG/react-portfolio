import React from "react";
import { func, string, arrayOf, shape, boolean } from "prop-types";
import "./banner.css";
import cooksCompanionImage from "../../../../Assets/cooks_companion.png";
const Banner = ({ image, main, link, alt }) => (
  <a
    href={link}
    className={["banner", `main--${main}`]}
    id="refactor"
    style={{ backgroundImage: `url(${image})` }}
  >
    <div>
      <h4>Code Refactor</h4>
    </div>
  </a>
);

Banner.propTypes = {
  image: string,
  main: boolean,
  link: string,
  alt: string,
};

Banner.defaultProps = {
  main: false,
  image: cooksCompanionImage,
};

export default Banner;
