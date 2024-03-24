import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './event.module.css';
import { UserContext } from "../../UserContext.jsx";
import { useContext } from 'react';


function Event() {
  const { eventId } = useParams();
  const { userRole, userID, isLoggedIn } = useContext(UserContext);
  const [eventData, setEventData] = useState(null);
  const [hasRSVPd, setHasRSVPd] = useState(false);

  console.log("In event")
  

  //getting the event data
  useEffect(() => {
    const fetchEventData = async () => {
      try {
        //getting specific event details:
        console.log("hitting the event backend")
        const url = new URL("http://localhost:3001/event/getEventById");
        url.searchParams.append('eventId', eventId);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
        const data = await response.json();
        setEventData(data);
      } catch (error) {
        console.error("Couldnt fetch event data", error);
      }
    }

    if(eventId) {
      fetchEventData();
    }
  }, [eventId])

  //useeffect to check whether or not the attendee has already rsvped.
  useEffect(() => {
    const checkUserRSVP = async () => {
      try {
        const url = new URL(`http://localhost:3001/event/rsvpd`);
        url.searchParams.append('userId', userID); // Append userID as a query parameter
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

    if (isLoggedIn && userID && eventId) {
      checkUserRSVP();
    }
  }, [eventId, userID, isLoggedIn])


  //for user experience
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
      "userId": userID
    }

    try {
      //add logic for no multiple rsvps from same user, button should be greyed out for specific events
      const url = 'http://localhost:3001/event/rsvp'; // Adjust URL to your needs
      const response = await fetch(url, {
        method: 'PUT',
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
      setHasRSVPd(true);
    } catch (error) {
      console.error('Could not RSVP', error);
    }
  }

  // Move to separate js file for modularity
  function formatDate(dateString) {
    if (/^\d{8}$/.test(dateString)) {
      const day = dateString.substring(0, 2);
      const month = dateString.substring(2, 4);
      const year = dateString.substring(4, 8);
      
      const date = new Date(`${year}-${month}-${day}T00:00:00Z`);
      
      const options = { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
      
      return date.toLocaleDateString(undefined, options);
    } else {
      return 'Invalid Date';
    }
  }  

  return (
    <div className={styles.eventContainer}>
      <h1>{eventData.event.event_name}</h1>
      {eventData.event.image_url && (
        <img className={styles.eventImage} src={eventData.event.image_url} alt={eventData.event.event_name} />
      )}
      <p>Description: {eventData.event.description}</p>
      <p>Location: {eventData.event.venue}</p>
      <p>
        {/*If dates are the same, only display one. Otherwise display the start and end date. */}
        {eventData.event.start_date === eventData.event.end_date 
          ? `Date: ${formatDate(eventData.event.start_date)}` 
          : `Runs From: ${formatDate(eventData.event.start_date)} to ${formatDate(eventData.event.end_date)}`}
      </p>

      {userRole === 'attendee' && eventData.event.rsvp_required && isLoggedIn && hasRSVPd === false && userID && (   //checks for displaying the rsvp button.
        <button onClick={handleRSVP}>AARSVP for this event.</button>
      )}
    </div>
  );
}

export default Event;
