import React from 'react';
import classes from './Points.module.css';
import TopNav from '../components/TopNav';
import Request from '../components/Request';
import BottomNav from '../components/BottomNav';

function Points() {
  return (
    <div>
        <div>
            <TopNav children="Points Earned"/>
        </div>
        <div className={classes.points}>
            <p>You’re on <span className={classes['points-color']}>2345 Points!</span></p>
        </div>

        <Request />
        <Request />
        <Request />

        <BottomNav />
    </div>
  )
}

export default Points;