const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs").promises;
const Rings = require("./model"); // Updated to use Rings model
const cors = require("cors");

const app = express();

app.use(cors());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/Rings")
  .then(async () => {
    console.log("Connected to MongoDB");

    try {
      const existingRingsData = await Rings.find();
      if (existingRingsData.length === 0) {
        const data = await fs.readFile("yourdata.json", "utf8");
        const jsonData = JSON.parse(data);

        const rings = jsonData.RingsDB; // Updated to use RingsDB key

        await Rings.insertMany(rings);

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

app.get("/rings/api", async (req, res) => {
  // Updated endpoint to /rings/api
  try {
    const rings = await Rings.find();
    res.status(200).json({ RingsDB: rings }); // Updated response to RingsDB
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error processing the request");
  }
});

const PORT = 13000; // Changed port to 13000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
