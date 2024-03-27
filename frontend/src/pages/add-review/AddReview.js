import React, { useState, useEffect } from 'react';
import { UserContext } from "../../UserContext.jsx";
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import styles from './addreview.module.css';

function AddReview() {
    const [reviewText, setReviewText] = useState('');
    const [reviewRating, setReviewRating] = useState('1'); // Default rating
    const navigate = useNavigate(); // Hook to get the navigate function
    const { eventId, userID } = useParams();  //getting eventId from the eventcard.

    const handleSubmitReview = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
    
        // Construct the review payload
        const reviewPayload = {
            eventId: eventId,
            userId: userID,
            reviewText: reviewText,
            rating: reviewRating,
        };
    
        // Define the URL for the review submission
        const reviewUrl = 'http://localhost:3001/event/review';
    
        try {
            // Send the PUT request with the review payload
            const response = await fetch(reviewUrl, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reviewPayload)
            });
    
            // Check if the request was successful
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            // Handle the response data here
            const data = await response.json();
            console.log('Review submitted successfully:', data);
    
            // Optionally reset the form fields
            setReviewText('');
            setReviewRating('1');
            navigate('/myevents')
            // Optionally, navigate to another route or show a success message
        } catch (error) {
            console.error('Error submitting the review:', error);
            // Optionally set an error message in state and display it to the user
        }
    };
    

    return (
        <form onSubmit={handleSubmitReview}>
            <div>
                <label htmlFor="reviewText">Review:</label>
                <textarea
                    id="reviewText"
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="reviewRating">Rating:</label>
                <select
                    id="reviewRating"
                    value={reviewRating}
                    onChange={(e) => setReviewRating(e.target.value)}
                    required
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <button type="submit">Submit Review</button>
        </form>
    )
}

export default AddReview;