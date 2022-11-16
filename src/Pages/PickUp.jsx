import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineRight } from 'react-icons/ai';
import { GoPrimitiveDot } from 'react-icons/go';
import classes from './PickUp.module.css';
import { data } from './DummyData';
import { useState } from 'react';

function PickUp() {
    const [isFirst, setIsFirst] = useState(true);
  return (
    <div>
        <div className={classes.navigation}>
            <GiHamburgerMenu className={classes['hamburger-menu']} />
            <BsSearch className={classes['search-button']} />
        </div>

        <div className={classes['top-navigation']}>
            <p className={classes['top-name']}>Hi {data.name}</p>
            <p className={classes['top-points']}>You're On <span className={classes.points}> {data.points} Pts!</span> </p>

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

        <div className={classes.tabs}>

            <div className={isFirst ? classes['tabs-active'] : classes['tabs-inactive']} onClick={() => setIsFirst(true)}>
                <p>Latest On Community</p>
                <div><GoPrimitiveDot /></div>
            </div>

            <div className={!isFirst ? classes['tabs-active'] : classes['tabs-inactive']} onClick={() => setIsFirst(false)}>
                <p>Events</p>
                <div><GoPrimitiveDot /></div>
            </div>

        </div>

        
        
    </div>
  )
}

export default PickUp;