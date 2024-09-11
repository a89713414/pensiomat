// Create a contact in HubSpot
async function createContact(contactProperties) {
  try {
    const response = await axios.post(
      "https://api.hubapi.com/crm/v3/objects/contacts",
      {
        properties: contactProperties,
      },
      {
        headers: {
          Authorization: `Bearer `,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error creating contact:",
      error.response ? error.response.data : error.message
    );
    throw new Error("Failed to create contact");
  }
}

