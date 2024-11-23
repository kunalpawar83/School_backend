const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.addSchool = async (schoolData) => {
  return prisma.school.create({ data: schoolData });
};

exports.getAllSchools = async () => {
  return prisma.school.findMany();
};
