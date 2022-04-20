import React, { Component } from "react";

const Select = ({ name, value, options, label, error, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        autoFocus
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        className="form-contorl"
      >
        <option value=""></option>
        {options.map((option) => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Select;
