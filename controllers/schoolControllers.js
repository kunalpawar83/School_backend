const { addSchool, getAllSchools } = require("../models/schoolModel");
const { calculateDistances } = require("../services/distanceService");

exports.addSchool = async (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  if (!name || !address || !latitude || !longitude) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    await addSchool({ name, address, latitude, longitude });
    res.status(201).json({ message: "School added successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error adding school" });
  }
};

exports.listSchools = async (req, res) => {
  const { latitude, longitude } = req.query;

  if (!latitude || !longitude) {
    return res.status(400).json({ error: "User location is required" });
  }

  try {
    const schools = await getAllSchools();
    const sortedSchools = calculateDistances(schools, { latitude, longitude });
    res.json(sortedSchools);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving schools" });
  }
};
