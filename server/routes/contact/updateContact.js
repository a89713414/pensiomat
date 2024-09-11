require("dotenv").config();
const axios = require("axios");

const updateContact = async (contactId, properties) => {
  const config = {
    method: "patch",
    url: `https://api.hubapi.com/crm/v3/objects/contacts/${contactId}`,
    headers: {
      Authorization: `Bearer ${process.env.HUBSPOT_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    data: JSON.stringify({ properties }),
  };

  return axios(config);
};

module.exports = updateContact;
