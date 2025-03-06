import React from "react";

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  return (
    <div className="flex justify-center mt-4 space-x-2">
      <button 
        onClick={() => setCurrentPage(1)} 
        disabled={currentPage === 1} 
        className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
      >
        First
      </button>
      <button 
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} 
        disabled={currentPage === 1} 
        className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
      >
        Previous
      </button>
      <span className="px-4 py-2">{currentPage} / {totalPages}</span>
      <button 
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} 
        disabled={currentPage === totalPages} 
        className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
      >
        Next
      </button>
      <button 
        onClick={() => setCurrentPage(totalPages)} 
        disabled={currentPage === totalPages} 
        className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
      >
        Last
      </button>
    </div>
  );
};

export default Pagination;
