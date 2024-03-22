const { Router } = require("express");
const router = Router();
const { Event } = require("../db/index.js");

router.get("/getEvents", async(req, res) => {
    console.log("Getting events from backend");

    const events = await Event.find();

    res.status(200).json({
        "events": events
    })
})

router.get("/getUserEvents", async (req, res) => {
    try {
        const { userID } = req.query;

        console.log(userID)

        const userEvents = await Event.find({ organizer: userID });

        res.status(200).json({
            "userEvents": userEvents
        });
    } catch(error) {
        console.error("Error fetching user events:", error);
        res.status(500).json({ message: "Error fetching events for user." });
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
            invitations: payLoad.invitations, // Array of User ObjectId
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
            image_url: payLoad.image
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
});


module.exports = router;

