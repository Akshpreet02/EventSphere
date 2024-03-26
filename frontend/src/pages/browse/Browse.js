import React from 'react';
import styles from './browse.module.css';
import EventCard from '../../components/event-card/EventCard';
import { Link } from 'react-router-dom';



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
          <Link key={index} to={`/event/${event.id}`} className={styles.eventLink}>
            <EventCard event={event} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Browse;
