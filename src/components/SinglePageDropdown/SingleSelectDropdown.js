import React from "react";

const SingleSelectDropdown = ({ options, selected, onChange }) => {
  return (
    <select value={selected} onChange={(e) => onChange(e.target.value)}>
      <option value="">Select Option</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SingleSelectDropdown;
