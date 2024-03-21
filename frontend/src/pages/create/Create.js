// Create.js
import React, { useState } from 'react';
import styles from './create.module.css';

function Create() {
  const [eventName, setEventName] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [requireRSVP, setRequireRSVP] = useState(false);
  const [receiveNotification, setReceiveNotification] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Temporary
    console.log('Form submitted:', { eventName, eventLocation, eventTime, eventDescription, requireRSVP, receiveNotification, imageFile });

  };

  return (
    <div className={styles.create}>
      <h1>Create Event</h1>
      <form onSubmit={handleSubmit}>

        <div className={styles.formGroup}>
          <label htmlFor="eventName">Event Name:</label>
          <input type="text" id="eventName" name="eventName" value={eventName} onChange={(e) => setEventName(e.target.value)} required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="eventLocation">Event Location:</label>
          <input type="text" id="eventLocation" name="eventLocation" value={eventLocation} onChange={(e) => setEventLocation(e.target.value)} required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="eventTime">Event Time:</label>
          <input type="datetime-local" id="eventTime" name="eventTime" value={eventTime} onChange={(e) => setEventTime(e.target.value)} required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="eventDescription">Event Description:</label>
          <textarea id="eventDescription" name="eventDescription" value={eventDescription} onChange={(e) => setEventDescription(e.target.value)} required></textarea>
        </div>

        <div className={styles.checkboxGroup}>
          <label>
            Require RSVP:
            <input type="checkbox" checked={requireRSVP} onChange={() => setRequireRSVP(!requireRSVP)} />
          </label>
        </div>

        <div className={styles.checkboxGroup}>
          <label>
            Receive Notification:
            <input type="checkbox" checked={receiveNotification} onChange={() => setReceiveNotification(!receiveNotification)} />
          </label>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="imageFile">Upload Image:</label>
          <input type="file" id="imageFile" name="imageFile" accept="image/*" onChange={handleFileChange} required />
        </div>

        <button type="submit" className={styles.createButton}>Create Event</button>
        
      </form>
    </div>
  );
}

export default Create;
