// Create a folder in HubSpot and return the folder ID
async function createFolder(folderName) {
  try {
    const response = await axios.post(
      "https://api.hubapi.com/filemanager/api/v2/folders",
      {
        name: folderName,
        parentFolderId: null, // Use a parent folder ID if needed
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
      "Error creating folder:",
      error.response ? error.response.data : error.message
    );
    throw new Error("Failed to create folder");
  }
}
