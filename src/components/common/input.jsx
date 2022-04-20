import React, { Component } from "react";

const Input = ({ name, value, type, label, error, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        autoFocus
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        type={type}
        className="form-contorl"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
