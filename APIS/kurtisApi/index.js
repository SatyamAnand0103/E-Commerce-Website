const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs").promises; // Promises for file operations
const Kurti = require("./model"); // Import the Mongoose model
const cors = require("cors");

const app = express();

app.use(cors());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/Womens", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Connected to MongoDB");

    // Check if data already exists
    const existingData = await Kurti.find();
    if (existingData.length === 0) {
      // Insert data only if the collection is empty

      const data = await fs.readFile("yourdata.json", "utf8"); // Ensure the correct filename is used
      const jsonData = JSON.parse(data);

      // Access the kurtisDB key
      const clothes_K = jsonData.kurtisDB;

      // Insert data into MongoDB
      await Kurti.insertMany(clothes_K);

      console.log("Data inserted into MongoDB");
    } else {
      console.log("Data already exists in MongoDB, no insertion needed.");
    }
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

// API endpoint to retrieve data from MongoDB and display it
app.get("/kurtis/api", async (req, res) => {
  try {
    // Retrieve data from MongoDB
    const kurtis = await Kurti.find();

    // Send the data as a response
    res.status(200).json({ kurtisDB: kurtis });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error processing the request");
  }
});

// Set the port to 1000
const PORT = 1000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
