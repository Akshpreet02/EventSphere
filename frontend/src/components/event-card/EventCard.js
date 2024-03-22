import React from 'react';
import styles from './event-card.module.css';

function EventCard({ event }) {
  console.log("in event card");

  function formatDate(dateString) {
    // Check if dateString is in 'DDMMYYYY' format
    if (/^\d{8}$/.test(dateString)) {
      // Parse the string
      const day = dateString.substring(0, 2);
      const month = dateString.substring(2, 4);
      const year = dateString.substring(4, 8);
      
      // Construct a new Date object
      const date = new Date(`${year}-${month}-${day}T00:00:00Z`);
      
      // Options for the output
      const options = { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
      
      // Convert the Date object to a readable string
      return date.toLocaleDateString(undefined, options);
    } else {
      return 'Invalid Date';
    }
  }  
  
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
