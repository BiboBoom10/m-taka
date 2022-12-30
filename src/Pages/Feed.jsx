import React from 'react';
import FeedComponent from '../components/FeedComponent';
import TopNav from '../components/TopNav';


function Feed() {
  return (
    <div>
        <TopNav children="Feed" />

        <FeedComponent />
        <FeedComponent />
        <FeedComponent />
        <FeedComponent />

    </div>
  )
}

export default Feed;