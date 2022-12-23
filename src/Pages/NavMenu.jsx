import React from 'react';
import classes from './NavMenu.module.css';
import ImageOne from '../Images/M-Taka logos/2.png';
import { data } from './DummyData';
import { FaUserAlt } from 'react-icons/fa';
import { FaComment } from 'react-icons/fa';

function NavMenu() {
  return (
    <div>
        <div className={classes['menu-content']}>
            <img className={classes.logo} src={ ImageOne } />

            <div className={classes['user-data']}>
                <p>Hello {data.name},</p>
                <p className={classes['top-points']}>You're on <span className={classes['top-name']}>{data.points} Pts</span></p>
            </div>

            <div>
                <FaUserAlt /> Profile
                <FaComment /> Posts
            </div>

        </div>
    </div>
  )
}

export default NavMenu;