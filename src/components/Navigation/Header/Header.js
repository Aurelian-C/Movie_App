import React, { useEffect, useRef, useState } from 'react';
import classes from './Header.module.css';
import MenuSearch from './MenuSearch';
import MenuLogo from './MenuLogo';
import MenuNavigation from './MenuNavigation';
import MenuLogin from './MenuLogin';
import SearchButton from './SearchButton';
import MenuContainer from './MenuContainer';
import MenuPhone from './MenuPhone';

export default function Header({ onShowSideMenu, searchHints }) {
  const [buttonSearchVisibility, setButtonSearchVisibility] = useState(true);
  const headerRef = useRef();
  const headerContainerRef = useRef();

  const showIconSearchHandler = () => {
    setButtonSearchVisibility(true);
  };

  const hideIconSearchHandler = () => {
    setButtonSearchVisibility(false);
  };

  useEffect(() => {
    // Header hide & show on page scrolling
    let scrollNumber = 0;
    window.addEventListener('scroll', e => {
      const scrollYnumber = window.scrollY;
      const headerHeight =
        headerContainerRef.current.getBoundingClientRect().height;

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
        <div className={classes.header__dropdown}>
          <i
            className={`fa-bars fa-solid ${classes['header__dropdown-icon']}`}
            onClick={onShowSideMenu}
          ></i>
        </div>
        <MenuLogo />
        <MenuContainer className={classes['header__menu--1']}>
          <MenuNavigation />
        </MenuContainer>
        <MenuContainer className={classes['header__menu--2']}>
          <MenuLogin />
          <MenuPhone />
          <SearchButton
            iconVisibility={buttonSearchVisibility}
            onShowIcon={showIconSearchHandler}
            onHideIcon={hideIconSearchHandler}
          />
        </MenuContainer>
      </div>
      {buttonSearchVisibility || <MenuSearch searchHints={searchHints} />}
    </header>
  );
}
