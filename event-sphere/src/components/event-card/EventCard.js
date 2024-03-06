import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import styles from './event-card.module.css'; // Import the CSS module

function EventCard({ event }) {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleClick = () => {
    // Redirect to the new page using navigate method
    navigate('/browse');
  };

  return (
    <div className={styles.eventCard} onClick={handleClick}> {/* Attach onClick event */}
      {/* <img src={event.image} alt={event.title} /> */}
      <div className={styles.eventInfo}>
        <h2>{event.title}</h2>
        <p>{event.description}</p>
        <p>Date: {event.date}</p>
        <p>Location: {event.location}</p>
      </div>
    </div>
  );
}

export default EventCard;
