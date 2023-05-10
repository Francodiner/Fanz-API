"use strict";

//Configurations
require("dotenv").config();

//Services
const {
  eventDataFetcher,
  balanceDataFetcher,
  allEventsFetcher,
} = require("../services/event");

/**
 * List an event with its tickets, its balances and the owners of those tickets.
 */
const getEvent = async (req, res) => {
  const eventId = req.params.eventId;

  try {
    const { eventData } = await eventDataFetcher(eventId);

    if (eventData.event != null) {
      const balanceResponses = await Promise.all(
        eventData.event.ticketBalances.map(async (element) => {
          const balanceId = element.id;
          const { balance } = await balanceDataFetcher(balanceId);
          return balance.balance.owner.id;
        })
      );

      const eventResponses = eventData.event.tickets.map((ticket, index) => {
        return {
          ticket: ticket.id,
          owner: balanceResponses[index],
        };
      });

      res.status(200).send({
        event: eventId,
        eventResponses,
      });
    } else {
      res.status(404).send("There is no EVENT with that ID.");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

/**
 * List all events with their respective id.
 * This function was not requested but i did it to get the id of the events and use them to test the other functions.
 */
const getAllEvents = async (req, res) => {
  try {
    const { data } = await allEventsFetcher();
    res.status(200).json(data.events);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching events");
  }
};

module.exports = {
  getEvent,
  getAllEvents,
};
