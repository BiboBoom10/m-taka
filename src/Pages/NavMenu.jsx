import React from 'react';
import classes from './NavMenu.module.css';
import ImageOne from '../Images/M-Taka logos/2.png';
import { data } from './DummyData';
import { BiUser } from 'react-icons/bi';
import { FaRegComment } from 'react-icons/fa';
import { BsGraphUp } from 'react-icons/bs';
import { CgDanger } from 'react-icons/cg';
import { FiLogOut } from 'react-icons/fi';
import { BiSearchAlt2 } from 'react-icons/bi';

function NavMenu() {
  return (
    <div>
        <div className={classes['menu-content']}>

            <img className={classes.logo} src={ ImageOne } />

            <div className={classes['user-data']}>
                <p>Hello {data.name},</p>
                <p className={classes['top-points']}>You're on <span className={classes['top-name']}>{data.points} Pts</span></p>
            </div>

            <div className={classes['menu-icons']}>
                <p className={classes['each-icon']}> <BiUser className={classes['icon-spacing']} /> Profile </p>
                <p className={classes['each-icon']}> <FaRegComment className={classes['icon-spacing']} /> Posts </p>
                <p className={classes['each-icon']}> <BsGraphUp className={classes['icon-spacing']} /> Learning </p>
                <p className={classes['each-icon']}> <CgDanger className={classes['icon-spacing']} /> Emergency Requests </p>
                <p className={classes['each-icon']}> <FiLogOut className={classes['icon-spacing']} /> Log Out </p>
            </div>

        </div>

        <div className={classes['search-bar']}>
          <BiSearchAlt2 />
        </div>
      
    </div>
  )
}

export default NavMenu;