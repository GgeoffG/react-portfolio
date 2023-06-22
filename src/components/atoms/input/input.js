import React from "react";
import { bool, string } from "prop-types";
import "bootstrap/dist/css/bootstrap.css";
import "./input.css";

export const Input = ({ label, type, name, message }) => {
  return (
    <>
      <label for={label}>{label}</label>:
      {!message ? (
        <input
          className={["form-input"].join(" ")}
          type={type}
          name={name}
          placeholder={label}
        ></input>
      ) : (
        <textarea
          className={["form-input"].join(" ")}
          type={type}
          name={name}
          placeholder={label}
        ></textarea>
      )}
    </>
  );
};

Input.propTypes = {
  lable: string,
  type: string.isRequired,
  name: string,
  message: bool,
};

Input.defaultProps = {
  lable: "Email",
  type: "text",
  name: "Email",
};
