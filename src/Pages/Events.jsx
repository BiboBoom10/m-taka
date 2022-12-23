import React from 'react';
import classes from './Events.module.css';
import ImageTop from '../Images/4.jpeg';
import Card from '../components/Card';
import styled from 'styled-components';

function Events() {
  return (
    <div>
        <div className={classes['image-top']} alt="">
            <img src={ImageTop} />
        </div>

        <div className={classes['card']}>
            <div className={classes['card-content']}>
                <Card>
                    <p>Event</p>
                    <p>Nyalenda Cleanup</p>
                </Card>
                
            </div>
        </div>
        
    </div>
  )
}

const CardContent = styled(Card)`
    z-index: 10;
`;



export default Events