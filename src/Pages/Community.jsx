import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiSearchAlt2 } from 'react-icons/bi';
import { AiOutlineRight } from 'react-icons/ai';
import { GoPrimitiveDot } from 'react-icons/go';
import { FaUserAlt } from 'react-icons/fa';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { FaCommentAlt } from 'react-icons/fa';
import classes from './Community.module.css';
import { data } from './DummyData';
import { useState } from 'react';
import ImageFive from '../Images/5.jpg';

function Community() {
    const [isFirst, setIsFirst] = useState(true);
  return (
    <div>
        {/* <div className={classes.navigation}>
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

        </div> */}

        <div className={classes['trash-image-container']}>
            <img className={classes['trash-image']} src={ImageFive} alt="Collecting trash" />
                <p>
                    The 3R Initiative aims to promote the "3Rs" (reduce, reuse and recycle) globally so as to build a sound-material-cycle society ...
                </p>
            <div className={classes['text-icons']}>
                <FaUserAlt /><p>M-Taka</p>
                <AiTwotoneCalendar /><p>12-09-2022</p>
                <FaCommentAlt /><p>3 Comments</p>
            </div>
        </div>

        <div className={classes['emergency-tab']} >
            <p className={classes['view-text']} >View All </p>
            <p className={classes['emergency-button']}>Emergency Pick Up</p>
        </div>

        
        
    </div>
  )
}

export default Community;