import React, { Component } from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      name="query"
      className="form-control my-3"
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
      placeholder="Search..."
    />
  );
};

export default SearchBox;
