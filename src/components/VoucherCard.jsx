import React from 'react';
import classes from './VoucherCard.module.css';

function VoucherCard() {
  return (
    <div className={classes.card}>

        <div className={classes.content}>
            <div className={classes['letter-icon']}>
                <p>V</p>
            </div>
            <div className={classes['validate-text']}>
                <p>Validate Number</p>
            </div>
        </div>

        <div className={classes['arrow']}>
            <p>></p>
        </div>

    </div>
  )
}

export default VoucherCard;