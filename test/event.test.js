const supertest = require("supertest");
const app = require("../app");

const request = supertest(app);

describe("List user addresses with their associated tickets belonging to a specific event | GET /event-attendees/:eventId", () => {
  it("Should return the event attendees", async () => {
    const eventId = "e0x0";

    const response = await request.get(`/event-attendees/${eventId}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("event", eventId);
    expect(response.body).toHaveProperty("eventResponses");
    expect(response.body.eventResponses).toBeInstanceOf(Array);
  });

  it("Should return that there is no event with that id", async () => {
    const eventId = "invalid-id";

    const response = await request.get(`/event-attendees/${eventId}`);

    expect(response.status).toBe(404);
    expect(response.text).toBe("There is no EVENT with that ID.");
  });
});
