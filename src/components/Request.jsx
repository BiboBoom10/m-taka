import React from 'react';
import classes from './Request.module.css';
import { AiOutlineRight } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';

function Request() {
  return (
    <div className={classes.collection}>
        <div className={classes['letter-icon']}>
            <p>E</p>
        </div>

        <div className={classes['content']}>
            <p className={classes['heading']}>Wuod Aminer</p>
            <p className={classes['date']}>Sep 28 at 11:00 AM</p>
            <p className={classes['location-detail']}><MdLocationOn className={classes['location-icon']} /> <span className={classes['location-text']}>Kondele Rnd About</span> </p>
        </div>

        <div className={classes['arrow']}>
            <AiOutlineRight />
        </div>
    </div>
  )
}

export default Request;