import React from 'react';
import classes from './EventCard.module.css';
import { AiOutlineRight } from 'react-icons/ai';
import { data } from '../Pages/DummyData';
import ImageSix from '../Images/6.jpg';

function EventCard() {
  return (
    <div>
         <div className={classes['event-box']}>
                    <div className={classes.box}>
                        <img className={classes.environment} src={ImageSix} />
                    </div>

    	            <div className={classes['event-detail']}>
                        <div>
                            <p> <span className={classes['scheduled-event']}> Climate Strike </span> <br></br> 
                                <span className={classes['scheduled-area']}>Sept. 20 at 11a.m</span><br />
                                <span className={classes['scheduled-area']}>Kondole Rnd About</span>
                            </p>
                        </div>
                    </div>
                        <div>
                            <AiOutlineRight />
                        </div>
                    

            </div>
    </div>
  )
}

export default EventCard;