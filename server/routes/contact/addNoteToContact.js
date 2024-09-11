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
      Authorization: "Bearer pat-eu1-32c4294e-1080-4aae-a403-a53c6dcc963b",
      "Content-Type": "application/json",
    },
    data: JSON.stringify(noteData),
  };

  return axios(noteConfig);
};

module.exports = addNoteToContact;
