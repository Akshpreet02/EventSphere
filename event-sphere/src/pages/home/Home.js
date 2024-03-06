// Home.js

import React from 'react';
import EventCard from '../../components/event-card/EventCard';
import styles from './home.module.css';

const featuredevents = [
  {
    title: "Event 1",
    image: "event1.jpg",
    date: "08/01/2029",
    location: "Location"
  },
  {
    title: "Event 2",
    image: "event2.jpg",
    date: "05/12/2024",
    location: "Location"
  }
];

function Home() {
  return (
    <div class={styles.home}>
      <h1>Featured Events</h1>
      <div className={styles.eventlist}>
        {featuredevents.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
}

export default Home;
