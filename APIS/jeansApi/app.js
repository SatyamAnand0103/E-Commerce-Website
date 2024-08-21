const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs").promises; // Promises for file operations
const Lower = require("./model"); // Import the Mongoose model
const cors = require("cors");

const app = express();

app.use(cors());

// Shirt = Lower and Shirts = Jeans

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/Mens")
  .then(async () => {
    console.log("Connected to MongoDB");

    // Check if data already exists

    // ------------
    const existingData = await Lower.find();
    if (existingData.length === 0) {
      // Insert data only if the collection is empty

      const data = await fs.readFile("yourdata.json", "utf8");
      const jsonData = JSON.parse(data);

      // Ensure we are accessing the correct key
      const Jeans = jsonData.jeansDB;

      // Insert data into MongoDB
      await Lower.insertMany(Jeans);

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
app.get("/jeans/api", async (req, res) => {
  try {
    // Retrieve data from MongoDB
    const jeans = await Lower.find();

    // Send the data as a response
    res.status(200).json({ jeansDB: jeans });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error processing the request");
  }
});

// Set the port to 4000
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
