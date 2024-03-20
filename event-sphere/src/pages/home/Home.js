// Home.js

import React from 'react';
import EventCard from '../../components/event-card/EventCard';
import styles from './home.module.css';
import { Link } from 'react-router-dom';

const featuredevents = [
  {
    title: "Event 1",
    image: "event1.jpg",
    date: "08/01/2029",
    location: "Location",
    id: "1"
  },
  {
    title: "Event 2",
    image: "event2.jpg",
    date: "05/12/2024",
    location: "Location",
    id: "2"
  }
];

function Home() {
  return (
    <div class={styles.home}>
      <h1>Featured Events</h1>
      <div className={styles.eventlist}>
      {featuredevents.map((event, index) => (
          <Link key={index} to={`/event/${event.id}`} className={styles.eventLink}>
            <EventCard event={event} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
