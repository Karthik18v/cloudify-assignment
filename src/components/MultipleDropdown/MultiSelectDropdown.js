import React, { useState, useRef } from "react";
import "./MultiSelectDropdown.css";

const MultiSelectDropdown = ({ options }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [multiSelectOptions, setMultiSelectOptions] = useState(options);
  const [newItem, setNewItem] = useState();
  const dropdownRef = useRef(null);

  // Add selected item to the input area
  const handleSelectItem = (item) => {
    if (!selectedItems.includes(item)) {
      setSelectedItems([...selectedItems, item]);
    }
  };

  // Remove selected item
  const handleRemoveItem = (item) => {
    setSelectedItems(selectedItems.filter((selected) => selected !== item));
  };

  // Close the dropdown when clicking outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  const onClickAddNewButton = () => {
    if (newItem !== "") {
      if (!multiSelectOptions.includes(newItem)) {
        setMultiSelectOptions([...multiSelectOptions, newItem]);
        setNewItem("");
      }
    }
  };

  // Attach event listener for clicks outside
  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      {/* Input Area */}
      <div
        className="input-area"
        onClick={() => setDropdownVisible((prev) => !prev)}
      >
        {selectedItems.map((item, index) => (
          <span key={index} className="selected-item">
            {item}
            <button
              className="remove-button"
              onClick={(e) => {
                e.stopPropagation(); // Prevent closing the dropdown when removing
                handleRemoveItem(item);
              }}
            >
              ✖
            </button>
          </span>
        ))}
        <input
          type="text"
          placeholder="Select items..."
          readOnly
          onFocus={() => setDropdownVisible(true)}
        />
      </div>

      {/* Dropdown */}
      {isDropdownVisible && (
        <div className="dropdown">
          <ul className="dropdown-list">
            {multiSelectOptions.map((option, index) => (
              <li
                key={index}
                className={`dropdown-item ${
                  selectedItems.includes(option) ? "selected" : ""
                }`}
                onClick={() => handleSelectItem(option)}
              >
                {option}
              </li>
            ))}
          </ul>
          <div>
            <input
              className="add-input"
              placeholder="Add New Item"
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
            />
            <button onClick={onClickAddNewButton}>+ Add</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
