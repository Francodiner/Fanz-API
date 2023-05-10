"use strict";

//Configurations
require("dotenv").config();

//Depedencies
const axios = require("axios");
const Web3 = require("web3");
const EthereumAddress = require("ethereum-address");

//Instance
const web3 = new Web3();

//Services
const { ensFetcher, lensFetcher } = require("../services/address");
const getAddressData = async (req, res) => {
  try {
    const address = req.params.address;

    if (!EthereumAddress.isAddress(address)) {
      throw new Error("Invalid address");
    }

    //ENS
    const { ensResponse } = await ensFetcher(address);

    const domain = ensResponse.domains[0];
    const domainName = domain ? domain.name : null;

    //LENS
    const { lensResponse } = await lensFetcher(address);

    const lens = lensResponse.data.data.defaultProfile;
    const lensProfile = lens ? lens : null;

    //MATIC AMOUNT
    axios
      .get(
        process.env.POLYGON_SCAN_URL +
          address +
          process.env.POLYGON_SCAN_FORMAT_API_KEY +
          process.env.POLYGON_SCAN_API_KEY
      )
      .then((response) => {
        const maticAmount = web3.utils.fromWei(response.data.result, "ether");
        const result = {
          domainName: domainName,
          lensProfile: lensProfile,
          maticAmount: maticAmount,
        };
        res.json(result);
      });
  } catch (error) {
    const result = {
      domainName: null,
      lensProfile: null,
      maticAmount: null,
      error: `Error: ${error.message}`,
    };
    res.status(500).json(result);
  }
};
module.exports = {
  getAddressData,
};
