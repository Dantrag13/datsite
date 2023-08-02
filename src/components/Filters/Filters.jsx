import React from 'react'

function Filters({ filters, title, isActive, toggleFilters, filtersHandler }) {

  const body = document.querySelector('body');

  isActive ? body.classList.add('lock') : body.classList.remove('lock');

  function closeFiltersHandler(e) {
    e.preventDefault();
    if (window.innerWidth < 881) {
      toggleFilters();
    }
  }

  function checkHandler(e) {
    e.stopPropagation();
    if (e.target.tagName === 'INPUT') {
      const selectedFilter = { value: e.target.value, isActive: e.target.checked }
      filtersHandler(selectedFilter);
      // console.log(selectedFilter);
    }
  }

  return (
    <div className={isActive ? "blure__filter-bg active" : "blure__filter-bg"} onClick={closeFiltersHandler}>
      <div className={isActive ? "products-store__filters-container active" : "products-store__filters-container"}>
        <div className="products__filters-header">
          <button className="filters-header__arrow" onClick={closeFiltersHandler}></button> Фільтр
        </div>
        <div className="filers__inner__container" onClick={checkHandler}>
          <h6 className="filter__title">{title}</h6>

          {filters.map(filter => {
            return (
              <label key={filter.value} className="form-control product__filter__label">
                <input className="product__filter__checkbox" type="checkbox" name={filter.name} value={filter.value} />
                {filter.children}
              </label>
            )
          })}

        </div>
      </div>
    </div >
  )
}

export default Filters