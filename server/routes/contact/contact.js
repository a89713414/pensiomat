const express = require("express");
const router = express.Router();
const createContact = require("./createContact");
const updateContact = require("./updateContact");

router.post("/", async (req, res) => {
  const { email, name, phone, idnumebr } = req.body;
  const nameArray = name ? name.split(" ") : [];
  const firstName = nameArray[0] || "";
  const lastName = nameArray.slice(1).join(" ") || "";

  const contactData = {
    properties: {
      email: email,
      firstname: firstName || "",
      lastname: lastName || "",
      phone: phone,
      hs_lead_status: "NEW",
      idnumebr: idnumebr,
    },
  };

  try {
    const contactResponse = await createContact(contactData);
    res.status(200).json(contactResponse.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/survey", async (req, res) => {
  const { contactId, surveyData } = req.body;

  const properties = {
    legal_status: surveyData.legal_status,
    employment_duration: surveyData.employment_duration,
    withdrawal_history: surveyData.withdrawal_history,
  };

  try {
    const updateResponse = await updateContact(contactId, properties);
    res.status(200).json(updateResponse.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
