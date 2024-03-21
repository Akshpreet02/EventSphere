import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './event.module.css';

function Event() {
  //State management for this component
  const[events, setEvents] = useState([])
  const [error, setError] = useState(null);
  const { eventId } = useParams();
  // const eventData = {};

  //fetching of data from the backend
  useEffect(() => { //Fetch todos on mount
    getEvents();
  }, []);

  const getEvents = async () => {
    setError(null);
    try {
      const response = await fetch("http://localhost:3000/event/getEvents");
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const json = await response.json();
      setEvents(json.events);
    } catch (err) {
      setError(err.message);
    }
  };
  
  return (
    <div className={styles.eventContainer}>
      <h1>{eventData.title}</h1>
      <p>Date: {eventData.date}</p>
      <p>Location: {eventData.location}</p>
    </div>
  );
}

export default Event;
