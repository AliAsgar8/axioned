import React, { useState } from "react";

const SearchFilter = ({ products, setFilteredProducts }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredProducts(
      products.filter(
        (product) =>
          product.title.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
      )
    );
  };

  return (
    <div className="flex justify-between mb-4">
      <input
        type="text"
        placeholder="Search by Title or Description"
        value={searchQuery}
        onChange={handleSearch}
        className="border p-2 w-full rounded"
      />
    </div>
  );
};

export default SearchFilter;
