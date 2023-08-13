import React, { useState } from 'react';
import Select from 'react-select';
import '../../styles/goodsStore.scss';
import Filters from '../Filters/Filters';
import Pagination from '../Pagination/Pagination';
import StoreProducts from '../StoreProducts/StoreProducts';
import data from '../../storeData/seeds.json';
import PreFooter from '../PreFooter/PreFooter';
import { useParams, useSearchParams } from 'react-router-dom';



function GoodsStore() {
  const [searchParams, setSearchParams] = useSearchParams({
    page: 1,
  });
  const searchToObhect = Object.fromEntries([...searchParams]);

  const [productsList] = useState(() => { return data; });
  const [isFiltersAvtive, setIsFiltersActive] = useState(false);
  const [selectedSort, setSelectedSort] = useState(() => {
    return (Object.fromEntries([...searchParams]).sort !== undefined) ?
      (Object.fromEntries([...searchParams]).sort) :
      '';
  });

  const filltersList = [
    { name: 'manufacturer', value: 'nertus', children: 'Нертус' },
    { name: 'manufacturer', value: 'basf', children: 'Басф' },
    { name: 'manufacturer', value: 'adama-ukraine', children: 'Адама Україна' },
    { name: 'manufacturer', value: 'bayer', children: 'Байєр' },
    { name: 'manufacturer', value: 'gzd', children: 'ГЗД' },
    { name: 'manufacturer', value: 'shtefs', children: 'Штефес' },
  ];

  const select__options = [
    { value: 'none', label: 'Сортувати за', isDisabled: true, isFixed: true },
    { value: 'name', label: 'За назвою' },
    { value: 'price', label: 'За ціною' },
  ];

  const select__styles = {
    control: (styles, state) => ({
      ...styles,
      borderRadius: "50px",
      width: "auto",
      height: "40px",
      outline: "#84C551",
      color: "#84C551",
      boxShadow: "none",
      'active': {
        borderColor: "#84C551",
        outline: "none",
      },
      '&:hover': { borderColor: "#84C551" },

    }),
    valueContainer: (provided, state) => ({
      ...provided,
      padding: "2px 16px",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#84C551" : '',
      '&:hover': { backgroundColor: "#b5e58f" },
      '&:active': { backgroundColor: "#84C551" },

    })
  }

  const { sectionId } = useParams();

  const titleMatch = {
    "seed": "Насіння",
    "plant-protection": "Засоби захисту рослин",
    "fertilizers": "Добрива",
    "feed-group": "Кормова група",
    "agro-to-help": "Агроному в поміч",
  }

  const pageTitle = (sectionId !== undefined) ? titleMatch[sectionId] : "Наші товари";


  function sortSelectionHandler(e) {
    setSelectedSort(e.value);
    setSearchParams({ ...searchToObhect, sort: e.value });
  }

  function initialSelectedSort() {
    let indexNumber = 0;
    select__options.forEach((elem, index) => {
      if ((searchToObhect.sort !== undefined) && (elem.value === searchToObhect.sort)) {
        indexNumber = index;
      }
    });
    return indexNumber;
  }


  function toggleFilters() {
    setIsFiltersActive(isFiltersAvtive => !isFiltersAvtive);
  }

  function filtersSelectionHandler2({ value, isActive }) {
    const newSearchParams = Object.fromEntries([...searchParams]);
    const getFilters = (newSearchParams.filters) ? (newSearchParams.filters.split(",")) : [];
    if (isActive) {
      const newFilters = [...getFilters, value].join(",");
      const updatedSearchParams = { ...newSearchParams, filters: newFilters };
      setSearchParams(updatedSearchParams);
    }
    if (isActive === false) {
      const newFilters = [...getFilters].filter(item => item !== value);
      if (newFilters.length > 0) {
        const updatedSearchParams = { ...newSearchParams, filters: (newFilters.join(",")) };
        setSearchParams(updatedSearchParams);
      } else {
        const { filters, ...updatedSearchParams } = newSearchParams;
        setSearchParams(updatedSearchParams);
      }
    }
  }



  function filteredProductsList() {
    let selectedFilters = (searchParams.get("filters"));
    if (selectedFilters !== null) {
      selectedFilters = selectedFilters.split(",");
      return [...productsList].filter((product) => (selectedFilters.includes(product.manufacturer)));
    } else {
      return productsList;
    }
  }

  const filteredProducts = filteredProductsList();



  function sortedProductList() {
    if (Boolean(selectedSort)) {
      if (selectedSort === 'name') {
        const x = [...filteredProducts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
        return x;
      } else if (selectedSort === 'price') {
        const x = [...filteredProducts].sort((a, b) => a[selectedSort] - b[selectedSort]);
        return x;
      }
    } else {
      return filteredProducts;
    }
  }

  const sortedfilteredProducts = sortedProductList();


  function curentProductsPageToShow() {
    let arr = [];
    [...sortedfilteredProducts].forEach((elem, index) => {
      if (index >= ((searchParams.get("page") - 1) * 15) && index < (searchParams.get("page") * 15)) {
        return (arr = [...arr, elem]);
      }
    });
    return arr;
  }

  const productsToShow = curentProductsPageToShow();

  return (
    <>
      <div className="products-store__wrapper">
        <div className="wrapper-main products-store__wrapper">
          <h2 className="products-store__title title__2leaves">{pageTitle}</h2>
          <div className="products-store__main-container">
            <Filters filters={filltersList} title={'Виробник'} searchParams={searchParams} toggleFilters={toggleFilters} isActive={isFiltersAvtive} filtersHandler={filtersSelectionHandler2} />
            <div className="products-store__products-container">
              <div className="products-store__select-container">
                <button className="filter__sidebar-toggle-btn" onClick={toggleFilters}>Фільтр</button>
                <div className="products-store__select">
                  <Select options={select__options} defaultValue={select__options[initialSelectedSort()]} onChange={sortSelectionHandler} styles={select__styles} placeholder={"Сортувати за"} />
                </div>
              </div>
              <StoreProducts products={productsToShow} />
              <Pagination searchParams={searchParams} currentPage={searchParams.get("page")} setPage={setSearchParams} numberOfItems={sortedfilteredProducts.length} />
            </div>
          </div>
        </div>
      </div>
      <PreFooter />
    </>
  );
}
export default GoodsStore;