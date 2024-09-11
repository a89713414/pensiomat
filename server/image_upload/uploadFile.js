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
          Authorization: `Bearer pat-eu1-a5293894-cd97-47dd-b590-6f46f09de1cc`,
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

