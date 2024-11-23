exports.calculateDistances = (schools, userLocation) => {
  const { latitude: userLat, longitude: userLon } = userLocation;

  return schools
    .map((school) => {
      const distance = getDistanceFromLatLonInKm(
        userLat,
        userLon,
        school.latitude,
        school.longitude
      );
      return { ...school, distance };
    })
    .sort((a, b) => a.distance - b.distance);
};

const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
  const R = 6371;
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

const deg2rad = (deg) => deg * (Math.PI / 180);
