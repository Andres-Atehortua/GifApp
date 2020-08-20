import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategories = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => setInputValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    inputValue.trim() !== "" &&
      setCategories((categories) => [inputValue, ...categories]);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleChange} />
    </form>
  );
};

AddCategories.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategories;
