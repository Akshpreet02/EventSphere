import React from 'react';
import styles from './event-card.module.css';

function EventCard({ event }) {
  console.log("in event card")
  return (
    <div className={styles.eventCard}>
      <div className={styles.eventInfo}>
        <h2>{event.title}</h2>
        <p>Start Date: {event.start_date}</p>
        <p>End Date: {event.end_date}</p>
        <p>Location: {event.venue}</p>
        <p></p>
      </div>
    </div>
  );
}

export default EventCard;
