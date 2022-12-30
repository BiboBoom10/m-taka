import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiSearchAlt2 } from 'react-icons/bi';
import classes from './TopNav.module.css';

function TopNav(props) {

  return (
    <div>
         <div className={classes.navigation}>
            <GiHamburgerMenu className={classes['hamburger-menu']} />
            <BiSearchAlt2 className={classes['search-button']} />
        </div>

        <div className={classes['top-name']}>
          <p> {props.children} </p>
        </div>
    </div>
  )
}

export default TopNav;