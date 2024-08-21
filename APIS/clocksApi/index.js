const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs").promises;
const Clock = require("./model"); // Updated to use Clock model
const cors = require("cors");

const app = express();

app.use(cors());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/HomeDecorator")
  .then(async () => {
    console.log("Connected to MongoDB");

    try {
      const existingClocksData = await Clock.find();
      if (existingClocksData.length === 0) {
        const data = await fs.readFile("yourdata.json", "utf8");
        const jsonData = JSON.parse(data);

        const clocks = jsonData.ClocksDB; // Updated to use ClocksDB key

        await Clock.insertMany(clocks);

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

app.get("/clocks/api", async (req, res) => {
  // Updated endpoint to /clocks/api
  try {
    const clocks = await Clock.find();
    res.status(200).json({ ClocksDB: clocks }); // Updated response to ClocksDB
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error processing the request");
  }
});

const PORT = 10000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
