const request = require('supertest');
const app = require('../app'); // Adjust the path according to your app's structure

describe('Events API', () => {
  describe('GET /getEvents', () => {
    it('should return a list of events with status 200', async () => {
      const response = await request(app).get('/getEvents');
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('events');
      expect(Array.isArray(response.body.events)).toBeTruthy();
    });
  });

  describe('GET /getEventById', () => {
    it('should return an event for a valid event ID with status 200', async () => {
      // Assuming there's a known event ID for testing; replace 'validEventId' accordingly
      const validEventId = 'validEventId';
      const response = await request(app).get(`/getEventById?eventId=${validEventId}`);
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('event');
    });

    it('should return 400 if no event ID is provided', async () => {
      const response = await request(app).get('/getEventById');
      expect(response.statusCode).toBe(400);
    });
  });

  describe('POST /addEvent', () => {
    it('should add a new event and return success message with status 200', async () => {
      const newEvent = {
        event_name: 'Sample Event',
        description: 'This is a test event',
        // Add other required fields according to your Event model
      };
      const response = await request(app).post('/addEvent').send(newEvent);
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('msg', 'Event created successfully');
      expect(response.body).toHaveProperty('eventId');
    });
  });

  // Add more tests for other endpoints similarly...
});


  