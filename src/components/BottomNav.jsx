import React from 'react';
import classes from './BottomNav.module.css';
import { AiFillHome } from 'react-icons/ai';
import { AiOutlineCalendar } from 'react-icons/ai';
import { TbSpeakerphone } from 'react-icons/tb';
import { FaRegListAlt } from 'react-icons/fa';


function BottomNav() {
  return (
    <div className={classes['nav-position']}>
        <div className={classes['menu-icons']}>
          <AiFillHome className={classes['home-icon']} />
          <FaRegListAlt />
          <AiOutlineCalendar className={classes['cal-bigger']} />
          <TbSpeakerphone className={classes['mic-bigger']} />
        </div>
    </div>
  )
}

export default BottomNav;