import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineRight } from 'react-icons/ai';
import classes from './PickUp.module.css';
import { data } from './DummyData';

function PickUp() {
  return (
    <div>
        <div className={classes.navigation}>
            <GiHamburgerMenu />
            <BsSearch />
        </div>

        <div className={classes['top-navigation']}>
            <p className={classes['top-name']}>Hi {data.name}</p>
            <p className={classes['top-points']}>You're On {data.points} Pts!</p>

            <p className={classes['pickup-text']}>Upcoming Pickup</p>

        </div>


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

export default PickUp;