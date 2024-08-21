const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs").promises;
const Curtain = require("./model"); // Ensure you have the Curtain model in the correct path
const cors = require("cors");

const app = express();

app.use(cors());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/HomeDecorator")
  .then(async () => {
    console.log("Connected to MongoDB");

    try {
      const existingCurtainsData = await Curtain.find();
      if (existingCurtainsData.length === 0) {
        const data = await fs.readFile("yourdata.json", "utf8");
        const jsonData = JSON.parse(data);

        const curtains = jsonData.CurtainsDB; // Ensure yourdata.json contains valid CurtainsDB entries

        await Curtain.insertMany(curtains);

        console.log("Data inserted into MongoDB");
      } else {
        console.log("Data already exists in MongoDB, no insertion needed.");
      }
    } catch (err) {
      console.error("Error during data insertion:", err);
    }
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

app.get("/curtains/api", async (req, res) => {
  // Updated endpoint to /curtains/api
  try {
    const curtains = await Curtain.find();
    res.status(200).json({ CurtainsDB: curtains }); // Updated response to CurtainsDB
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error processing the request");
  }
});

const PORT = 11001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
