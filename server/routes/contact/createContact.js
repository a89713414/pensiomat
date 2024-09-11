const axios = require("axios");

const createContact = async (contactData) => {
  const config = {
    method: "post",
    url: "https://api.hubapi.com/crm/v3/objects/contacts",
    headers: {
      Authorization: "Bearer pat-eu1-32c4294e-1080-4aae-a403-a53c6dcc963b",
      "Content-Type": "application/json",
    },
    data: JSON.stringify(contactData),
  };

  return axios(config);
};

module.exports = createContact;
