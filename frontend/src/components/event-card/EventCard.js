import React from 'react';
import styles from './event-card.module.css';

function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

function EventCard({ event }) {
  console.log("in event card");
  return (
    <div className={styles.eventCard}>
      <div className={styles.eventInfo}>
        <h2>{event.event_name}</h2>
        <p>Start Date: {formatDate(event.start_date)}</p>
        <p>End Date: {formatDate(event.end_date)}</p>
        <p>Location: {event.venue}</p>
      </div>
    </div>
  );
}

export default EventCard;
