import React from 'react';
import { useState } from 'react';
import TopNav from '../components/TopNav';
import classes from './PendingRequest.module.css';
import { GoPrimitiveDot } from 'react-icons/go';
import SchedulePickupCard from '../components/SchedulePickupCard';
import EmergencyPickup from '../components/EmergencyPickup';
import ImageFive from '../Images/5.jpg';
import BottomNav from '../components/BottomNav';

function PendingRequest() {

    const [isFirst, setIsFirst] = useState(true);

  return (
    <div>
        <TopNav children ="Hi Fixo," />


        <div className={classes.points}>
            <p>You’re on <span className={classes['points-color']}>2345 Kgs!</span></p>
        </div>

        <div className={classes.tabs}>

            <div className={isFirst ? classes['tabs-active'] : classes['tabs-inactive']} onClick={() => setIsFirst(true)}>
                <p>Pending Requests</p>
                <div><GoPrimitiveDot /></div>
            </div>

            <div className={!isFirst ? classes['tabs-active'] : classes['tabs-inactive']} onClick={() => setIsFirst(false)}>
                <p>Accepted Request</p>
                <div><GoPrimitiveDot /></div>
            </div>

        </div>

        <SchedulePickupCard />
        <EmergencyPickup />

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
            <img className={classes['my-image']} src={ ImageFive } />
        </div>

        <BottomNav />

    </div>
  )
}

export default PendingRequest;