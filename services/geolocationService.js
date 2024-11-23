const axios = require("axios");

exports.verifyCoordinates = async (latitude, longitude) => {
  const apiKey = process.env.OPENCAGE_API_KEY;
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    if (
      response.data &&
      response.data.results &&
      response.data.results.length > 0
    ) {
      return true;
    }
    return false;
  } catch (error) {
    console.error("Error verifying coordinates:", error);
    throw new Error("Unable to verify coordinates. Please try again later.");
  }
};
