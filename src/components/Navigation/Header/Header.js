import React, { useEffect, useRef, useState } from 'react';
import classes from './Header.module.css';
import MenuSearch from './MenuSearch';
import MenuLogo from './MenuLogo';
import MenuNavigation from './MenuNavigation';
import MenuLogin from './MenuLogin';
import SearchButton from './SearchButton';
import MenuContainer from './MenuContainer';
import MenuPhone from './MenuPhone';
import DropDownButton from './DropDownButton';
import MenuHints from './MenuHints';

export default function Header({ onShowSideMenu, searchHints }) {
  const [buttonSearchVisibility, setButtonSearchVisibility] = useState(true);
  const [menuHintsVisibility, setMenuHintsVisibility] = useState(false);
  const headerRef = useRef();
  const headerContainerRef = useRef();

  const handleShowButtonSearch = () => {
    setButtonSearchVisibility(true);
  };

  const handleHideButtonSearch = () => {
    setButtonSearchVisibility(false);
    setMenuHintsVisibility(true);
  };

  useEffect(() => {
    // Header hide & show on page scrolling
    let scrollNumber = 0;
    window.addEventListener('scroll', e => {
      const scrollYnumber = window.scrollY;
      const headerHeight =
        headerContainerRef.current.getBoundingClientRect().height;

      // Hide hints when scrolling
      setMenuHintsVisibility(false);

      // Hide header when scroll down
      if (scrollYnumber > scrollNumber) {
        scrollNumber = scrollYnumber;
        headerRef.current.style.top = `-${headerHeight}px`;
      }

      // Show header when scroll up
      if (scrollYnumber < scrollNumber) {
        scrollNumber = scrollYnumber;
        headerRef.current.style.top = '0px';
      }
    });
  }, [headerContainerRef, headerRef]);

  return (
    <header className={classes.header} ref={headerRef}>
      <div className={classes.header__container} ref={headerContainerRef}>
        <DropDownButton onShowSideMenu={onShowSideMenu} />
        <MenuLogo />
        <MenuContainer className={classes['header__menu--1']}>
          <MenuNavigation />
        </MenuContainer>
        <MenuContainer className={classes['header__menu--2']}>
          <MenuLogin />
          <MenuPhone />
          <SearchButton
            buttonVisibility={buttonSearchVisibility}
            onShow={handleShowButtonSearch}
            onHide={handleHideButtonSearch}
          />
        </MenuContainer>
      </div>
      {buttonSearchVisibility || (
        <MenuSearch>
          {menuHintsVisibility && <MenuHints searchHints={searchHints} />}
        </MenuSearch>
      )}
    </header>
  );
}
