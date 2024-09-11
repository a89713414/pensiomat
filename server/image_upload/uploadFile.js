// Upload a file to HubSpot
async function uploadFile(filePath, folderId) {
  const formData = new FormData();
  formData.append("file", fs.createReadStream(filePath), {
    filename: path.basename(filePath),
  });
  formData.append(
    "options",
    JSON.stringify({
      access: "PUBLIC_NOT_INDEXABLE",
      overwrite: false,
    })
  );
  formData.append("folderId", folderId);

  try {
    const response = await axios.post(
      "https://api.hubapi.com/files/v3/files",
      formData,
      {
        headers: {
          ...formData.getHeaders(),
          Authorization: `Bearer `,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error uploading file:",
      error.response ? error.response.data : error.message
    );
    throw new Error("Failed to upload file");
  }
}

