"use strict";

require("dotenv").config();

//Depedencies
const { request } = require("graphql-request");

//Querys
const { eventQuery, eventsIdQuery, balanceQuery } = require("../querys/event");

const eventDataFetcher = async (eventId) => {
  const eventData = await request(process.env.THE_GRAPH_FANZ_URL, eventQuery, {
    eventId,
  });

  return {
    eventData,
  };
};

const balanceDataFetcher = async (balanceId) => {
  const balance = await request(process.env.THE_GRAPH_FANZ_URL, balanceQuery, {
    balanceId,
  });

  return {
    balance,
  };
};

const allEventsFetcher = async () => {
  const data = await request(process.env.THE_GRAPH_FANZ_URL, eventsIdQuery);

  return {
    data,
  };
};

module.exports = {
  eventDataFetcher,
  balanceDataFetcher,
  allEventsFetcher,
};
