import React from "react";
import { bool, string, arrayOf, shape } from "prop-types";
import Input from "../../atoms/input/input";
import "bootstrap/dist/css/bootstrap.css";
import "./inputForm.css";

export const InputForm = ({ fields }) => {
  return (
    <>
      {fields.map((data, index) => (
        <Input
          key={index}
          type={fields.type}
          name={fields.name}
          label={fields.label}
          message={fields.message}
        />
      ))}
      <button className="button-primary">Submit</button>
    </>
  );
};

Input.propTypes = {
  fields: arrayOf(
    shape({
      name: string,
      label: string,
      message: bool,
      type: string.isRequired,
    })
  ),
};
