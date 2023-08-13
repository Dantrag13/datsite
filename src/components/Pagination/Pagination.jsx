import React, { useEffect } from 'react';

function Pagination({ searchParams, currentPage, setPage, numberOfItems }) {

  const numberOfPages = Math.ceil(numberOfItems / 15);

  function smoothScrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  let pages = [];
  function pagesCounter(arr) {
    for (let i = 0; i < numberOfPages; i++) {
      arr.push(i + 1);
    }
  }
  pagesCounter(pages);

  const searchObject = Object.fromEntries([...searchParams]);
  const page = Number(currentPage);

  function pageHandler(e) {
    if (e.target.classList.contains("pagination__numbver")) {
      const newPage = Number(e.target.innerText);
      setPage({ ...searchObject, page: newPage });
      smoothScrollTop();
    }
    else if (e.target.classList.contains("prev")) {
      if (page > 1) {
        setPage({ ...searchObject, page: page - 1 });
        smoothScrollTop();
      }
    }
    else if (e.target.classList.contains("next")) {
      if ((page < (numberOfItems - 1) && (page !== numberOfPages))) {
        setPage({ ...searchObject, page: page + 1 });
        smoothScrollTop();
      }
    }
  }
  useEffect(() => {
    setPage({ ...searchObject, page: page });
  }, []);

  useEffect(() => {
    if (page > numberOfPages || (Object.keys(searchObject).length) === 0) {
      setPage({ ...searchObject, page: 1 });
      smoothScrollTop();
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
          );
        })}
      </ul>
      <div className="pagination__item next">&#10095;</div>
    </div >
  );
}

export default Pagination;