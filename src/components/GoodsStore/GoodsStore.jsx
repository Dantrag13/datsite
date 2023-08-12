import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import '../../styles/goodsStore.scss';
import Filters from '../Filters/Filters';
import Pagination from '../Pagination/Pagination';
import StoreProducts from '../StoreProducts/StoreProducts';
import data from '../../storeData/seeds.json';
import PreFooter from '../PreFooter/PreFooter';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';



function GoodsStore() {

  const location = useLocation();
  const pageTitle = (Boolean(location.state)) ? location.state.title : "Наші товари";
  let { sectionId } = useParams();
  console.log(sectionId);

  const [productsList, setProductsList] = useState([]);
  const [isFiltersAvtive, setIsFiltersActive] = useState(false);
  // const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedSort, setSelectedSort] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // console.log(selectedFilters);

  const [searchParams, setSearchParams] = useSearchParams({
    page: 2,
    filters: ['bayer', 'basf', 'nertus', 'gzd'],
    sort: 'name'
  });
  console.log(searchParams);
  // console.log(searchParams.forEach(e => { console.log(e); }));
  console.log(Object.fromEntries([...searchParams]));

  // filters: 'bayer_basf_nertus',

  // console.log("page - ", searchParams.get('page'));
  // console.log("filter - ", searchParams.get('filter'));
  // console.log("sort - ", searchParams.get('sort'));






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


  useEffect(() => {
    setProductsList(data);
  }, []);


  function toggleFilters() {
    setIsFiltersActive(isFiltersAvtive => !isFiltersAvtive);
  }


  // function filtersSelectionHandler({ value, isActive }) {
  //   if (isActive) {
  //     setSelectedFilters((selectedFilters) => [...selectedFilters, value]);
  //   } else {
  //     setSelectedFilters(() => ([...selectedFilters].filter(item => item !== value)));
  //   }
  // }

  function filtersSelectionHandler2({ value, isActive }) {
    const newSearchParams = Object.fromEntries([...searchParams]);
    const getFilters = (newSearchParams.filters) ? (newSearchParams.filters.split("_")) : [];

    // console.log(value, isActive);
    // console.log(newSearchParams);
    // console.log(Boolean(newFilters));
    // console.log(newFilters);
    if (isActive) {
      const newFilters = [...getFilters, value].join("_");
      // console.log(newFilters);
      const updatedSearchParams = { ...newSearchParams, filters: newFilters };
      // console.log("x = ", updatedSearchParams);
      setSearchParams(updatedSearchParams);
    }
    if (isActive === false) {
      const newFilters = [...getFilters].filter(item => item !== value);
      // console.log(newFilters);
      if (newFilters.length > 0) {
        const updatedSearchParams = { ...newSearchParams, filters: (newFilters.join("_")) };
        // console.log(updatedSearchParams);
        setSearchParams(updatedSearchParams);
      } else {
        const { filters, ...updatedSearchParams } = newSearchParams;
        setSearchParams(updatedSearchParams);
      }

      // console.log(newFilters);
    }
  }



  function filteredProductsList() {
    let selectedFilters = (searchParams.get("filters"));
    if (selectedFilters !== null) {
      console.log("Фильтрация в функции", selectedFilters);
      selectedFilters = selectedFilters.split("_");
      return [...productsList].filter((product) => (selectedFilters.includes(product.manufacturer)));
    } else {
      return productsList;
    }
  }

  const filteredProducts = filteredProductsList();


  function sortedProductList() {
    if (Boolean(selectedSort)) {
      if (selectedSort.value === 'name') {
        const x = [...filteredProducts].sort((a, b) => a[selectedSort.value].localeCompare(b[selectedSort.value]));
        return x;
      } else if (selectedSort.value === 'price') {
        const x = [...filteredProducts].sort((a, b) => a[selectedSort.value] - b[selectedSort.value]);
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
      if (index >= ((currentPage - 1) * 15) && index < (currentPage * 15)) {
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
          {/* <button className="my__button" onClick={() => { setSearchParams({ ...searchParams, page: 2 }) }}>Search Params Test</button>
          <button className="my__button" onClick={() => { setSearchParams({ page: 1, filters: 'bayer_basf_nertus', sort: '' }) }}>Search Params Test</button>
          <button className="my__button" onClick={() => { setSearchParams({ sort: "name" }) }}>Search Params Test</button> */}
          <div className="products-store__main-container">
            <Filters filters={filltersList} title={'Виробник'} searchParams={searchParams} toggleFilters={toggleFilters} isActive={isFiltersAvtive} filtersHandler={filtersSelectionHandler2} />
            <div className="products-store__products-container">
              <div className="products-store__select-container">
                <button className="filter__sidebar-toggle-btn" onClick={toggleFilters}>Фільтр</button>
                <div className="products-store__select">
                  <Select options={select__options} onChange={setSelectedSort} styles={select__styles} placeholder={"Сортувати за"} />
                </div>
              </div>
              <StoreProducts products={productsToShow} />
              <Pagination page={currentPage} setPage={setCurrentPage} numberOfItems={sortedfilteredProducts.length} />
            </div>
          </div>
        </div>
      </div>
      <PreFooter />
    </>

  )
}
export default GoodsStore;