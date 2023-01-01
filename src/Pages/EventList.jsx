import React from 'react';
import EventCard from '../components/EventCard';
import TopNav from '../components/TopNav';

function EventList() {
  return (
    <div>
        <TopNav children="Events" />

        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
    </div>
  )
}

export default EventList;