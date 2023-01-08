import React, { useState } from 'react';
import SchedulePickupCard from '../components/SchedulePickupCard';
import TopNav from '../components/TopNav';
import VoucherCard from '../components/VoucherCard';
import classes from './UpComingPickup.module.css';
import { GoPrimitiveDot } from 'react-icons/go';

function UpComingPickup() {

    const [isFirst, setIsFirst] = useState(true);

  return (
    <div>

        <TopNav children="Hi Gene," />

        <div className={classes.points}>
            <p>You’re on <span className={classes['points-color']}>2345 Pts!</span></p>
        </div>

        <div className={classes['pickup-text']}>
            <p>Upcoming Pickup</p>
        </div>

        <SchedulePickupCard />
        <VoucherCard />

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

    </div>
  )
}

export default UpComingPickup;