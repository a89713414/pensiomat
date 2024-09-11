require("dotenv").config();
const axios = require("axios");

const createContact = async (contactData) => {
  const config = {
    method: "post",
    url: "https://api.hubapi.com/crm/v3/objects/contacts",
    headers: {
      Authorization: `Bearer ${process.env.HUBSPOT_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    data: JSON.stringify(contactData),
  };

  return axios(config);
};

module.exports = createContact;
