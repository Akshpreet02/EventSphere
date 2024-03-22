// Create.js
import React, { useState } from 'react';
import styles from './create.module.css';

function Create() {
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [status, setStatus] = useState('planning'); // Default status
  const [requireRSVP, setRequireRSVP] = useState(false);
  const [imageFile, setImageFile] = useState();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Temporary
    console.log('Form submitted:', { eventName, eventLocation, startTime, endTime, eventDescription, requireRSVP, imageFile });

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
          <label htmlFor="eventDescription">Event Description:</label>
          <textarea id="eventDescription" name="eventDescription" value={eventDescription} onChange={(e) => setEventDescription(e.target.value)} required></textarea>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="startTime">Start Time:</label>
          <input type="time" id="startTime" value={startTime} onChange={(e) => setStartTime(e.target.value)} required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="endTime">End Time:</label>
          <input type="time" id="endTime" value={endTime} onChange={(e) => setEndTime(e.target.value)} required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="startDate">Start Date:</label>
          <input type="date" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="endDate">End Date:</label>
          <input type="date" id="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="location">Venue:</label>
          <input type="text" id="location" value={eventLocation} onChange={(e) => setEventLocation(e.target.value)} required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="status">Status:</label>
          <select id="status" value={status} onChange={(e) => setStatus(e.target.value)} required>
            <option value="planning">Planning</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div className={styles.checkboxGroup}>
          <label>
            Require RSVP:
            <input type="checkbox" checked={requireRSVP} onChange={() => setRequireRSVP(!requireRSVP)} />
          </label>
        </div>

        {/* <div className={styles.formGroup}>
          <label htmlFor="imageFile">Upload Image:</label>
          <input type="file" id="imageFile" name="imageFile" accept="image/*" onChange={handleFileChange} required />
        </div> */}

        <button type="submit" className={styles.createButton}>Create Event</button>
        
      </form>
    </div>
  );
}

export default Create;
