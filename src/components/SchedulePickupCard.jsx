import React from 'react';
import classes from './SchedulePickupCard.module.css';
import { AiOutlineRight } from 'react-icons/ai';
import { data } from '../Pages/DummyData';

function SchedulePickupCard() {
  return (
    <div>
        <div className={classes['schedule-box']}>

            <div className={classes.box}>
                <p>S</p>
            </div>

            <div>
                <p> <span className={classes['scheduled-pickup']}> Scheduled Pickup </span> <br></br> <span className={classes.date}>{data.pickup}</span></p>
            </div>

            <div>
                <AiOutlineRight />
            </div>

        </div>
    </div>
  )
}

export default SchedulePickupCard;