import React from 'react';
import TopNav from '../components/TopNav';
import WeightCard from '../components/WeightCard';
import classes from './RecordWeight.module.css';
import { GoPrimitiveDot } from 'react-icons/go';
import { useState } from 'react';
import FeedComponent from '../components/FeedComponent';
import BottomNav from '../components/BottomNav';

function RecordWeight() {

    const [isFirst, setIsFirst] = useState(true);

  return (
    <div>
        <TopNav children = "Hi Wuod," />

        <div className={classes.points}>
            <p>You’re on <span className={classes['points-color']}>2345 Kgs!</span></p>
        </div>

        <WeightCard />

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
            <FeedComponent />
        </div>

        <p className={classes['view-items']}>View All ></p>

        <BottomNav />

    </div>

  )
}

export default RecordWeight;