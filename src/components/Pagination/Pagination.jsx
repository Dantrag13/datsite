import React, { useEffect } from 'react';

function Pagination({ page, setPage, numberOfItems }) {

  const numberOfPages = Math.ceil(numberOfItems / 15);

  let pages = [];
  function pagesCounter(arr) {
    for (let i = 0; i < numberOfPages; i++) {
      arr.push(i + 1);
    }
  }
  pagesCounter(pages);

  function pageHandler(e) {
    if (e.target.classList.contains("pagination__numbver")) {
      setPage(Number(e.target.innerText));
    }
    else if (e.target.classList.contains("prev")) {
      if (page > 1) { setPage((page - 1)) }
    }
    else if (e.target.classList.contains("next")) {
      if ((page < (numberOfItems - 1) && (page !== numberOfPages))) { setPage((page + 1)) }
    }
  }
  useEffect(() => {
    if (page > numberOfPages) {
      setPage(1);
    }
  });


  return (
    <div className="products-store__pagination__container" onClick={pageHandler}>
      <div className="pagination__item prev">&#10094;</div>
      <ul className="pagination__main-list">
        {pages.map(num => {
          return (
            <li
              key={num}
              className={(num === page) ? "pagination__item pagination__numbver active" : "pagination__item pagination__numbver"}>{num}
            </li>
          )
        })}
      </ul>
      <div className="pagination__item next">&#10095;</div>
    </div >
  )
}

export default Pagination;