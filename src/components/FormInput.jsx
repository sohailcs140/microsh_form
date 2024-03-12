import React from "react";

export default function FormInput(props) {
  return (
    <div className="control">
      <label htmlFor={props.name}>{props.name}</label>
      <input
        type={props.type}
        className="form-control"
        placeholder={props.place}
        required = {props.required}
        onChange={props.onChange}
      />
    </div>
  );
}
