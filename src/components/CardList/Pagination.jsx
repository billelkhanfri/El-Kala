import React from "react";

function Pagination({ pages, currentPage, setCurrentPage }) {
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({
        top:0, 
        behavior:'smooth'
    })
  };
  return (
    <div className="flex justify-center items-center mt-8 gap-4">
      {pages.map((page, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(page)}
          className={`px-4 py-2 rounded-md  ${
            page === currentPage
              ? "bg-lightGray text-white"
              : "bg-lightWhite text-coal hover:bg-lightGray hover:text-white transition-colors duration-300"
          } `}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
