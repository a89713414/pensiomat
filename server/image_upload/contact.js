require("dotenv").config();
const express = require("express");
const fs = require("fs");
const path = require("path");
const FormData = require("form-data");
const axios = require("axios").default;
const multer = require("../../config/multer");

const router = express.Router();

router.post("/", multer.single("imageFile"), async (req, res) => {
  const folderName = "My Uploads Folder";
  const { name, phone } = req.body;

  const nameArray = name ? name.split(" ") : [];
  const firstName = nameArray[0] || "";
  const lastName = nameArray.slice(1).join(" ") || "";

  try {
    const folderResponse = await createFolder(folderName);
    const folderId = folderResponse.id;

    // File path from multer upload
    const filePath = req.file.path;

    // Upload the file
    const uploadResponse = await uploadFile(filePath, folderId);

    // Prepare contact properties
    const contactProperties = {
      firstname: firstName,
      lastname: lastName,
      phone: phone,
      hs_lead_status: "NEW",
      id_image: uploadResponse.url,
    };

    // Create a new contact in HubSpot
    const contactResponse = await createContact(contactProperties);

    // Cleanup uploaded file (optional)
    fs.unlinkSync(filePath);

    // Respond with the created contact
    res.status(200).json(contactResponse);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

