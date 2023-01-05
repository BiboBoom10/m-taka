import React from 'react';
import classes from './WeightCard.module.css';

function WeightCard() {
  return (
    <div>
        <div className={classes.card}>
            <div className={classes['weight-content']}>
                <div className={classes['letter-icon']}>
                    <p>S</p>
                </div>
                <div>
                    <p>Record Weight</p>
                </div>
            </div>

            <div className={classes.arrow}>
                <p>></p>
            </div>
        </div>
    </div>
  )
}

export default WeightCard;