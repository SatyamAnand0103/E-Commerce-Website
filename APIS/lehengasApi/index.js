const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs").promises;
const Lehengas = require("./model"); // Ensure you have the Lehengas model in the correct path
const cors = require("cors");

const app = express();

app.use(cors());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/HomeDecorator")
  .then(async () => {
    console.log("Connected to MongoDB");

    try {
      const existingLehengasData = await Lehengas.find();
      if (existingLehengasData.length === 0) {
        const data = await fs.readFile("yourdata.json", "utf8"); // Using the correct JSON file name
        const jsonData = JSON.parse(data);

        const lehengas = jsonData.lehengasDB;

        await Lehengas.insertMany(lehengas);

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

app.get("/lehengas/api", async (req, res) => {
  try {
    const lehengas = await Lehengas.find();
    res.status(200).json({ lehengasDB: lehengas });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error processing the request");
  }
});

const PORT = 9000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
