import React from 'react';

export default function SortDropDown({ onSelect }) {
  const handleChange = (event) => {
    onSelect(event.target.value); // Call the onSelect prop with the selected value
  };

  return (
    <div className="my-3">
      <label htmlFor="sort-options" className="me-2">Sort By:</label>
      <select id="sort-options" onChange={handleChange} style={{ width: '200px' }} className="form-select">
        <option value="default">Default</option>
        <option value="priceHighToLow">Price: High to Low</option>
        <option value="priceLowToHigh">Price: Low to High</option>
        <option value="newest">Newest</option>
      </select>
    </div>
  );
}


