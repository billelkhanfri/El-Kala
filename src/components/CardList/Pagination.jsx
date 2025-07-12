import React from "react";

function Pagination({ pages, currentPage, setCurrentPage }) {
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({
        top:0, 
        behavior:'smooth'
    })
  };
  const previousPage = currentPage -1;
  const nextPage = currentPage + 1;
  const handleNextPage = ()=> {
    if(nextPage > pages.length) return;
    window.scrollTo({
        top:0, 
        behavior:'smooth'
    })
    setCurrentPage(nextPage);
  }
  const handlepreviousPage = () => {
    if(previousPage < 1) return;
    window.scrollTo({
        top:0, 
        behavior:'smooth'
    })
    setCurrentPage(previousPage);
  }
  return (
    <div className="flex justify-center items-center my-12 gap-4">
      <button
        className="px-4 py-2 rounded-md bg-primaryBlue text-white hover:bg-lightGray hover:text-white transition-colors duration-300"
        onClick={handlepreviousPage}
        disabled={currentPage === 1}
      >
        &#60;
      </button>
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
      <button
        onClick={handleNextPage}
        disabled={currentPage === pages.length - 1}
        className="px-4 py-2 rounded-md bg-primaryBlue text-white hover:bg-lightGray hover:text-white transition-colors duration-300"
      >
        &#62;{" "}
      </button>
    </div>
  );
}

export default Pagination;
