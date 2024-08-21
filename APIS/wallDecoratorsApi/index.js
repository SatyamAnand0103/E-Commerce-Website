const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs").promises;
const WallDecor = require("./model"); // Updated to WallDecor model
const cors = require("cors");

const app = express();

app.use(cors());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/HomeDecorator")
  .then(async () => {
    console.log("Connected to MongoDB");

    try {
      const existingWallDecorData = await WallDecor.find();
      if (existingWallDecorData.length === 0) {
        const data = await fs.readFile("yourdata.json", "utf8");
        const jsonData = JSON.parse(data);

        const wallDecorators = jsonData.WallDecoratorsDB; // Ensure yourdata.json contains valid WallDecoratorsDB entries

        await WallDecor.insertMany(wallDecorators);

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

app.get("/wallDecor/api", async (req, res) => {
  // Updated endpoint to /wallDecor/api
  try {
    const wallDecorators = await WallDecor.find();
    res.status(200).json({ WallDecoratorsDB: wallDecorators }); // Updated response to WallDecoratorsDB
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error processing the request");
  }
});

const PORT = 14000; // Updated to port 14000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
