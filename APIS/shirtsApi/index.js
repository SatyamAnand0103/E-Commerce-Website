const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs").promises; // Promises for file operations
const Shirt = require("./model"); // Import the Mongoose model
const cors = require("cors");

const index = express();

index.use(cors());

// Shirt = Lower and Shirts = Jeans shirts = jeans

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/Mens")
  .then(async () => {
    console.log("Connected to MongoDB");

    // Check if data already exists

    // ------------
    const existingData = await Shirt.find();
    if (existingData.length === 0) {
      // Insert data only if the collection is empty

      const data = await fs.readFile("yourdata.json", "utf8");
      const jsonData = JSON.parse(data);

      // Ensure we are accessing the correct key
      const Shirts = jsonData.shirtsDB;

      // Insert data into MongoDB
      await Shirt.insertMany(Shirts);

      console.log("Data inserted into MongoDB");
    } else {
      console.log("Data already exists in MongoDB, no insertion needed.");
    }
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });
// ---------------------
// API endpoint to retrieve data from MongoDB and display it
index.get("/shirt/api", async (req, res) => {
  try {
    // Retrieve data from MongoDB
    const shirts = await Shirt.find();

    // Send the data as a response
    res.status(200).json({ shirtsDB: shirts });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error processing the request");
  }
});

// Set the port to 5000
const PORT = 5000;
index.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
