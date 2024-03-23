const { Router } = require("express");
const router = Router();
const { Event } = require("../db/index.js");
const mongoose = require('mongoose');

router.get("/getEvents", async(req, res) => {
    console.log("Getting events from backend");

    const events = await Event.find();

    //remapping the _id field to eventID to prevent issues in the frontend.
    const remappedEvents = events.map(event => ({
        eventId: event._id,
        // Spread the rest of the event object properties
        ...event.toObject(),
    }));

    res.status(200).json({
        "events": remappedEvents
    })
})

router.get('/getEventById', async(req, res) => {
    try {
        const eventId = req.query.eventId;

        if(!eventId) {
            return res.status(400).json({message: "No event ID provided."})
        }

        const event = await Event.findById(eventId);

        if(!event) {
            return res.status(404).json({ message: "Event not found" });
        }

        res.status(200).json({
            "event": event
        })
    } catch(error) {
        console.error("Error finding event: ", error);
        res.status(500).json({message: "Error finding event"});
    }
})

router.get("/getUserEvents", async (req, res) => {
    try {
        const { userID } = req.query;

        console.log(userID)

        const userEvents = await Event.find({ organizer: userID });

        console.log(userEvents);

        res.status(200).json({
            "userEvents": userEvents
        });
    } catch(error) {
        console.error("Error fetching user events:", error);
        res.status(500).json({ message: "Error fetching events for user." });
    }
})

router.put("/rsvp", async (req,res) =>{
    console.log("RSVPing a user to an event");

    try {
        let { eventId, userId } = req.body;
        console.log(userId, eventId)

        const updatedEvent = await Event.findByIdAndUpdate(
            eventId,
            {
                $addToSet: {RSVPs: { user: userId } }
            },
            {new: true}
        );
    
        if(updatedEvent) {
            res.status(200).json({ success: true, message: 'RSVP updated', updatedEvent});
        } else {
            res.status(400).json({ success: false, message: 'Server error', error: error.message });
        }
    } catch(error) {
        res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
})


router.get("/rsvpd", async (req, res) => {
    const { userId, eventId } = req.query;

    try {
        if(!userId || !eventId) {
            return res.status(400).send({"message": 'Missing userId or eventId'});
        }
    
        const event = await Event.findById(eventId).exec();
    
        if (!event) {
            return res.status(404).send('Event not found');
        }
        
        let userFound = false;

        for (let i = 0; i < event.RSVPs.length; i++) {
            if(event.RSVPs[i].user == userId) {
                userFound = true;
                break
            }
        }

        const hasRSVPd = userFound;
          
        res.json({ hasRSVPd });
    } catch (error) {
        console.error('Server Error', error);
        res.status(500).send('Internal Server Error');
    }
})

router.post("/addEvent", async (req, res) => {
    console.log("Posting event to backend");

    const payLoad = req.body;

    try {
        await Event.create({
            event_name: payLoad.event_name,
            description: payLoad.description,
            start_time: payLoad.start_time,
            end_time: payLoad.end_time,
            start_date: payLoad.start_date,
            end_date: payLoad.end_date,
            venue: payLoad.venue,
            organizer: payLoad.organizer, // This expects an ObjectId of the User
            status: payLoad.status,
            rsvp_required: payLoad.rsvp_required,
            RSVPs: payLoad.RSVPs.map(rsvp => ({
                user: rsvp.user, // ObjectId of the User
                status: rsvp.status
            })),
            reviews: payLoad.reviews.map(review => ({
                reviewer: review.reviewer, // ObjectId of the User
                review: review.review,
                rating: review.rating
            })),
            image_url: payLoad.image_url,
            organizer_url: payLoad.organizer_url,
            ticket_url: payLoad.ticket_url
        });

        res.status(200).json({
            msg: "Event created successfully"
        });
    } catch (error) {
        console.error("Error adding event:", error);
        res.status(500).json({
            msg: "Failed to create event",
            error: error.message
        });
    }
})



module.exports = router;

