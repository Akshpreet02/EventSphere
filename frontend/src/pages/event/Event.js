import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './event.module.css';
import { UserContext } from "../../UserContext.jsx";
import { useContext } from 'react';


function Event() {
  const { eventId } = useParams();
  const { userRole, userId, isLoggedIn } = useContext(UserContext);
  const [eventData, setEventData] = useState(null);
  const [hasRSVPd, setHasRSVPd] = useState(false);

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

  //function being called inside the useEffect below
  const checkUserRSVP = async () => {
    try {
      const url = new URL(`http://localhost:3001/event/rsvpd`);
      url.searchParams.append('userID', userId); // Append userID as a query parameter
      url.searchParams.append('eventId', eventId);

      const response = await fetch(url);

      if(!response.ok) {
        throw new Error('Failed to check RSVP status');
      }

      const { hasRSVPd } = await response.json();
      setHasRSVPd(hasRSVPd);
      } catch(error) {
        console.error('Error during RSVP status check', error);
      }
  }

  //useeffect to check whether or not the attendee has already rsvped.
  useEffect(() => {
    if (isLoggedIn && userId && eventId) {
      checkUserRSVP();
    }
  }, [eventId, userId, isLoggedIn])

  if(!eventData) {
    return <div>
      Loading...
    </div>
  }

  //RSVPing the user to the event here
  const handleRSVP = async () => {
    if(!isLoggedIn) {
      console.error("User must be logged in to RSVP");
      return;
    }

    const credentials = {
      "eventId": eventId,
      "userId": userId
    }

    try {
      //add logic for no multiple rsvps from same user, button should be greyed out for specific events
      const url = 'http://localhost:3001/event/rsvp'; // Adjust URL to your needs
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials), // Send eventId and userId to backend
      });

      if (!response.ok) {
        throw new Error('Failed to RSVP');
      }

      // Handle successful RSVP logic here, like updating state to show user's RSVP status
      //user should recieve email in the backend

    } catch (error) {
      console.error('Could not RSVP', error);
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
      {userRole === 'attendee' && eventData.event.rsvp_required && isLoggedIn &&(   //checks for displaying the rsvp button.
        <button onClick={handleRSVP}>RSVP for this event.</button>
      )}
    </div>
  );
}

export default Event;
