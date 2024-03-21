import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './event.module.css';

function Event() {
  const { eventId } = useParams();
  const eventData = {};

  return (
    <div className={styles.eventContainer}>
      <h1>{eventData.title}</h1>
      <p>Date: {eventData.date}</p>
      <p>Location: {eventData.location}</p>
    </div>
  );
}

export default Event;
