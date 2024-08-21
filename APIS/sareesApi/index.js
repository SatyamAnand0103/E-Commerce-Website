const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs").promises;
const Saree = require("./model");
const cors = require("cors");

const app = express();

app.use(cors());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/Womens")
  .then(async () => {
    console.log("Connected to MongoDB");

    try {
      const existingSareesData = await Saree.find();
      if (existingSareesData.length === 0) {
        const data = await fs.readFile("yourdata.json", "utf8");
        const jsonData = JSON.parse(data);

        const sarees = jsonData.sareesDB;

        await Saree.insertMany(sarees);

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

app.get("/sarees/api", async (req, res) => {
  try {
    const sarees = await Saree.find();
    res.status(200).json({ sareesDB: sarees });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error processing the request");
  }
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
