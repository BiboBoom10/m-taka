import React from 'react';
import classes from './EmergencyPickup.module.css';
import { AiOutlineRight } from 'react-icons/ai';
import { data } from '../Pages/DummyData';

function EmergencyPickup() {
  return (
    <div>

        <div className={classes['schedule-box']}>

        <div className={classes.box}>
            <p>E</p>
        </div>

        <div>
            <p> <span className={classes['scheduled-pickup']}> Emergency Pickup </span> <br></br> <span className={classes.date}>{data.pickup}</span></p>
        </div>

        <div>
            <AiOutlineRight />
        </div>

        </div>

    </div>
  )
}

export default EmergencyPickup;