import React from 'react';
import '../../styles/header.scss';
import HeaderMarketsbar from '../HeaderMarketsbar/HeaderMarketsbar';
import HeaderNavbar from '../HeaderNavbar/HeaderNavbar';
import HeaderSearchbar from '../HeaderSearchbar/HeaderSearchbar';

function Header() {

  return (
    <header id='header' className="header">
      <HeaderNavbar></HeaderNavbar>
      <HeaderSearchbar></HeaderSearchbar>
      <HeaderMarketsbar></HeaderMarketsbar>
    </header >
  );
}

export default Header;