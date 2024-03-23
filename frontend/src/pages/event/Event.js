import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './event.module.css';


function Event() {
  const { eventId } = useParams();
  const [eventData, setEventData] = useState(null);

  console.log("In event")
  
  useEffect(() => {
    const fetchEventData = async () => {
      try {
        console.log("hitting the event backend")
        const url = new URL("http://localhost:3001/event/getEventById");
        url.searchParams.append('eventId', eventId);
  
        const response = await fetch(url);
        console.log(eventId);
  
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
        const data = await response.json();
        console.log(data)
        setEventData(data);
      } catch (error) {
        console.error("Couldnt fetch event data", error);
      }
    }

    if(eventId) {
      fetchEventData();
    }
  }, [eventId])

  if(!eventData) {
    return <div>
      Loading...
    </div>
  }

  return (
    <div className={styles.eventContainer}>
      <h1>{eventData.event_name}</h1>
      <p>Description: {eventData.event.description}</p>
      <p>Location: {eventData.event.venue}</p>
      {eventData.event.image_url && (
        <div className={styles.eventImage}>
          <img src={eventData.event.image_url} alt={eventData.event.event_name} />
        </div>
      )}
    </div>
  );
}

export default Event;
