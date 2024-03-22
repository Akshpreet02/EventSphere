// Create.js
import React, { useState } from 'react';
import styles from './create.module.css';
import axios from 'axios';

function Create() {
  const [eventName, setEventName] = useState('');
  const [error, setError] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [status, setStatus] = useState('planning'); // Default status
  const [requireRSVP, setRequireRSVP] = useState(false);
  // const [imageFile, setImageFile] = useState();
  const [file, setFile] = useState()

  const handleUpload = (e) => {
    const formdata = new FormData();
    formdata.append('file', file)
    axios.post('http://localhost:3001/upload', formdata)
    .then(res => {console.log(res)})
    .catch(err => {console.log(err)})
  }

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   setImageFile(file);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Temporary
    console.log('Form submitted:', { eventName, eventDescription, startTime, endTime, startDate, endDate, eventLocation, status, requireRSVP }); 

    const newEvent = {
      event_name: eventName,
      description: eventDescription,
      start_time: startTime,
      end_time: endTime,
      start_date: startDate.split('-').reverse().join(''), // Adjust date format if necessary
      end_date: endDate.split('-').reverse().join(''), // Adjust date format if necessary
      venue: eventLocation,
      organizer: '65fb86bd147225803d1db49b', // Replace with actual organizer ID
      status: status,
      time_zone: 'UTC', // If you have a timezone state, use that
      invitations: [], // Replace with actual invitations array if applicable
      rsvp_required: requireRSVP,
      RSVPs: [], // Initialize as empty or with actual data if available
      reviews: [] // Initialize as empty or with actual data if available
    };

    try {
      console.log("trying to hit backend", newEvent)
      const response = await fetch("http://localhost:3001/event/addEvent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEvent),
      });

      if (!response.ok) {
        throw new Error('Error adding todo');
      }
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className={styles.create}>
      <h1>Create Event</h1>
      <form onSubmit={handleSubmit}>

        <div className={styles.formGroup}>
          <label htmlFor="eventName">Event Name:</label>
          <input type="text" id="eventName" name="eventName" value={eventName} onChange={(e) => setEventName(e.target.value)} />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="eventDescription">Event Description:</label>
          <textarea id="eventDescription" name="eventDescription" value={eventDescription} onChange={(e) => setEventDescription(e.target.value)} ></textarea>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="startTime">Start Time:</label>
          <input type="time" id="startTime" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="endTime">End Time:</label>
          <input type="time" id="endTime" value={endTime} onChange={(e) => setEndTime(e.target.value)}  />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="startDate">Start Date:</label>
          <input type="date" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="endDate">End Date:</label>
          <input type="date" id="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="location">Venue:</label>
          <input type="text" id="location" value={eventLocation} onChange={(e) => setEventLocation(e.target.value)}  />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="status">Status:</label>
          <select id="status" value={status} onChange={(e) => setStatus(e.target.value)} >
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

        <div className={styles.formGroup}>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          <button onClick={handleUpload}>Upload Image</button>
        </div>

        <button type="submit" className={styles.createButton}>Create Event</button>
        
      </form>
    </div>
  );
}

export default Create;
