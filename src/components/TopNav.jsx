import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiSearchAlt2 } from 'react-icons/bi';
import classes from './TopNav.module.css';

function TopNav(props) {

  return (
    <div>
      <div className={classes['nav-position']}>
          <div className={classes.navigation}>
              <GiHamburgerMenu className={classes['hamburger-menu']} />
              <BiSearchAlt2 className={classes['search-button']} />
          </div>

      </div>
      <div className={classes['text-position']}>
        <div className={classes['top-name']}>
          <p> {props.children} </p>
          {/* <p className={classes.points}> {props.points} </p> */}
        </div>
      </div>
    </div>
  )
}

export default TopNav;