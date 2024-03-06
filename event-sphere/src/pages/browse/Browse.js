// Browse.js
import React from 'react';
import styles from './browse.module.css';
import EventCard from '../../components/event-card/EventCard';

const allevents = [
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

function Browse() {
  return (
    <div className={styles.browse}>
      <div className={styles.topRow}>
        <h1>All Events</h1>
        <div className={styles.filter}>        
          <label htmlFor="searchInput" className={styles.label}>Search:</label>
          <input type="text" id="searchInput" placeholder="..." className={styles.input}></input>
        </div>

      </div>
      <div className={styles.eventlist}>
        {allevents.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
}


export default Browse;
