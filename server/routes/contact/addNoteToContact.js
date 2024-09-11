require("dotenv").config();
const axios = require("axios");

const addNoteToContact = async (contactId, note) => {
  const noteBody = Object.entries(note)
    .map(([key, value]) => `${key}: ${value}`)
    .join("; ");

  const noteData = {
    engagement: {
      type: "NOTE",
    },
    associations: {
      contactIds: [contactId],
    },
    metadata: {
      body: noteBody,
    },
  };

  const noteConfig = {
    method: "post",
    url: "https://api.hubapi.com/engagements/v1/engagements",
    headers: {
      Authorization: `Bearer ${process.env.HUBSPOT_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    data: JSON.stringify(noteData),
  };

  return axios(noteConfig);
};

module.exports = addNoteToContact;
