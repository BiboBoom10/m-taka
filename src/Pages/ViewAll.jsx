import React from 'react';
import TopNav from '../components/TopNav';
import classes from './ViewAll.module.css';
import ImageFour from '../Images/4.jpeg';
import { HiUserCircle } from 'react-icons/hi';
import { BiLike } from 'react-icons/bi';
import BottomNav from '../components/BottomNav';

function ViewAll() {
  return (
    <div>
        <TopNav />

        <img className={classes['my-image']} src={ImageFour} alt="two women" />    

        <div className={classes['my-icons']}>
            <p> <HiUserCircle className={classes['icon-size']} /> By M-Taka </p>
            <p> <BiLike className={classes['icon-size']} /> 3450 </p>
        </div>

        <div className={classes.content}>
            <div className={classes.heading}>
                <p>The 3R Initiative aims to promote the "3Rs"</p>
            </div>

            <div className={classes.text}>
                <p>The 3R Initiative aims to promote the "3Rs". Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, modi quos doloremque, voluptas cupiditate soluta sapiente neque earum delectus at minus exercitationem et. Fugiat voluptatem repellat, placeat odio consectetur libero!</p>
            </div>
        </div>

        <BottomNav />

    </div>
  )
}

export default ViewAll;