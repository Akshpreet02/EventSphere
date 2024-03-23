import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './event.module.css';
import { UserContext } from "../../UserContext.jsx";
import { useContext } from 'react';


function Event() {
  const { eventId } = useParams();
  const { userRole, userId } = useContext(UserContext);
  const [eventData, setEventData] = useState(null);

  console.log("In event")
  

  //getting the event data
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

  const handleRSVP = async () => {
    try {
      //add logic for no multiple rsvps from same user, button should be greyed out for specific events
      const url = 'http://localhost:3001/event/rsvp'; // Adjust URL to your needs
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ eventId, userId }), // Send eventId and userId to backend
      });

      if (!response.ok) {
        throw new Error('Failed to RSVP');
      }

      // Handle successful RSVP logic here, like updating state to show user's RSVP status
      //user should recieve email in the backend

    } catch (error) {
      console.error('Could not RSVP', error);
      // Handle RSVP error here
    }
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
      {userRole === 'attendee' && (
        <button onClick={handleRSVP}>RSVP</button>
      )}
    </div>
  );
}

export default Event;
