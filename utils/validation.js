exports.validateSchoolData = (data) => {
  const { name, address, latitude, longitude } = data;
  if (!name || !address || !latitude || !longitude) {
    return false;
  }
  return true;
};
