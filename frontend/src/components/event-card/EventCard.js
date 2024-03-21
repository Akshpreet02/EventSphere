import React from 'react';
import styles from './event-card.module.css';

function EventCard({ event }) {
  return (
    <div className={styles.eventCard}>
      <div className={styles.eventInfo}>
        <h2>{event.title}</h2>
        <p>Date: {event.date}</p>
        <p>Location: {event.location}</p>
      </div>
    </div>
  );
}

export default EventCard;
