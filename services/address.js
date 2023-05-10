"use strict";

require("dotenv").config();

//Depedencies
const axios = require("axios");
const { request } = require("graphql-request");

//Querys
const { ensQuery, lensProfileQuery } = require("../querys/address");

const ensFetcher = async (address) => {
  const ensResponse = await request(process.env.THE_GRAPH_ENS_URL, ensQuery, {
    address,
  });

  return {
    ensResponse,
  };
};

const lensFetcher = async (address) => {
  const lensResponse = await axios.post(process.env.LENS_PROFILE_URL, {
    query: lensProfileQuery(address),
  });

  return {
    lensResponse,
  };
};

module.exports = {
  ensFetcher,
  lensFetcher,
};
