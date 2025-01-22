import React, { useState } from "react";

import SingleSelectDropdown from "../SinglePageDropdown/SingleSelectDropdown";
import MultiSelectDropdown from "../MultipleDropdown/MultiSelectDropdown";
import "./Table.css";

const options1 = ["Option 1", "Option 2", "Option 3"];
const initialMultiSelectOptions = [
  "Option 1",
  "Option 2",
  "Option 3",
  "Option 4",
];

const Table = () => {
  const [rows, setRows] = useState([{ singleSelect: "", multiSelect: [] }]);
  const [multiSelectOptions, setMultiSelectOptions] = useState(
    initialMultiSelectOptions
  );

  const handleAddRow = () => {
    setRows([...rows, { singleSelect: "", multiSelect: [] }]);
  };

  const handleSingleSelectChange = (index, selected) => {
    const updatedRows = [...rows];
    updatedRows[index].singleSelect = selected;
    setRows(updatedRows);
  };

  const handleMultiSelectChange = (index, selectedOptions) => {
    const updatedRows = [...rows];
    updatedRows[index].multiSelect = selectedOptions;
    setRows(updatedRows);
  };

  const handleAddNewMultiSelectOption = (newOption) => {
    if (newOption && !multiSelectOptions.includes(newOption)) {
      setMultiSelectOptions([...multiSelectOptions, newOption]);
    }
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Label 1</th>
            <th>Label 2</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td className="single-table-data">
                <SingleSelectDropdown
                  options={options1.filter((option) =>
                    rows.every(
                      (r, i) => i === index || r.singleSelect !== option
                    )
                  )}
                  selected={row.singleSelect}
                  onChange={(selected) =>
                    handleSingleSelectChange(index, selected)
                  }
                />
              </td>
              <td className="multiple-table-data">
                <MultiSelectDropdown
                  options={multiSelectOptions}
                  selected={row.multiSelect}
                  onChange={(selectedOptions) =>
                    handleMultiSelectChange(index, selectedOptions)
                  }
                  onAddNewOption={handleAddNewMultiSelectOption}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddRow}>+ Add New Row</button>
    </div>
  );
};

export default Table;
