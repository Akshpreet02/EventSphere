import React, { useState, useEffect } from 'react';
import styles from './myevents.module.css';
import EventCard from '../../components/event-card/EventCard';

function MyEvents() {
  console.log("in the events component");

  // Corrected state management for this component
  const [events, setEvents] = useState([]); // Corrected setter function name
  const [error, setError] = useState(null);

  // Fetching of data from the backend
  useEffect(() => { // Fetch events on mount
    getMyEvents();
  }, []);

  const getMyEvents = async () => {
    setError(null);
    try {
      const response = await fetch("http://localhost:3001/event/getEvents");
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const json = await response.json();
      setEvents(json.events); // Now correctly refers to the setEvents function
    } catch (err) {
      setError(err.message);
      console.error("Failed to fetch events:", err);
    }
  };

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
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
      {/* Error handling display */}
      {error && <div style={{ color: "red" }}>Error: {error}</div>}
    </div>
  );
}

export default MyEvents;
