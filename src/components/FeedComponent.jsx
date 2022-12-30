import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { FaCommentAlt } from 'react-icons/fa';
import classes from './FeedComponent.module.css';

function FeedComponent() {
  return (
    <div>
        <div className={classes['trash-image-container']}>
            {/* <img className={classes['trash-image']} src={ImageFive} alt="Collecting trash" /> */}
                <p>
                    The 3R Initiative aims to promote the "3Rs" (reduce, reuse and recycle) globally so as to build a sound-material-cycle society ...
                </p>
            <div className={classes['text-icons']}>
                <FaUserAlt /><p>M-Taka</p>
                <AiTwotoneCalendar /><p>12-09-2022</p>
                <FaCommentAlt /><p>3 Comments</p>
            </div>
        </div>
    </div>
  )
}

export default FeedComponent;