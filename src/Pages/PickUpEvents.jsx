import React from 'react';
import { useState } from 'react';
import classes from './PickUpEvents.module.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiSearchAlt2 } from 'react-icons/bi';
import { data } from './DummyData';
import { GoPrimitiveDot } from 'react-icons/go';
import { AiOutlineRight } from 'react-icons/ai';
import EventCard from '../components/EventCard';

function PickUpEvents() {
    const [isFirst, setIsFirst] = useState(true);
  return (
    
    <div>
        <div className={classes.navigation}>
            <GiHamburgerMenu className={classes['hamburger-menu']} />
            <BiSearchAlt2 className={classes['search-button']} />
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

        <div>
         <EventCard />
         <EventCard />
         <EventCard />
        </div>

    </div>
  )
}

export default PickUpEvents;