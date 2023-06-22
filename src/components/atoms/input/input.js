import React from "react";
import { string } from "prop-types";
import "bootstrap/dist/css/bootstrap.css";
import "./input.css";

export const Input = ({ label, type, name, placeholder }) => {
  return (
    <>
      <label for={label}>{label}</label>:
      <input
        className="Input , form-input"
        type={type}
        name={name}
        placeholder={label}
      ></input>
    </>
  );
};

Input.propTypes = {
  lable: string,
  type: string.isRequired,
  name: string,
};

Input.defaultProps = {
  lable: "Email",
  type: "text",
  name: "Email",
};
