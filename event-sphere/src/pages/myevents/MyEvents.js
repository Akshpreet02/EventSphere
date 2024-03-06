// MyEvents.js
import React from 'react';
import styles from './myevents.module.css';
import EventCard from '../../components/event-card/EventCard';

const myevents = [
  {
    title: "Event 1",
    image: "event1.jpg",
    date: "08/05/2025",
    location: "Location"
  },
  {
    title: "Event 2",
    image: "event2.jpg",
    date: "09/12/2034",
    location: "Location 2"
  },
  {
    title: "Event 3",
    image: "event3.jpg",
    date: "01/10/2024",
    location: "Location 3"
  }
];

function MyEvents() {
  return (
    <div className={styles.myevents}>
      <div className={styles.topRow}>
        <h1>My Events</h1>
        <div className={styles.filter}>        
          <label htmlFor="searchInput" className={styles.label}>Search:</label>
          <input type="text" id="searchInput" placeholder="..." className={styles.input}></input>
        </div>

      </div>
      <div className={styles.eventlist}>
        {myevents.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
}


export default MyEvents;
