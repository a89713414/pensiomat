require("dotenv").config();
const axios = require("axios");

const updateContact = async (contactId, properties) => {
  const config = {
    method: "patch",
    url: `https://api.hubapi.com/crm/v3/objects/contacts/${contactId}`,
    headers: {
      Authorization: `Bearer pat-eu1-32c4294e-1080-4aae-a403-a53c6dcc963b`,
      "Content-Type": "application/json",
    },
    data: JSON.stringify({ properties }),
  };

  return axios(config);
};

module.exports = updateContact;
