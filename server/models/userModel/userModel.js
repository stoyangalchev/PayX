const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createUser = async (data) => {
  return await prisma.user.create({ data });
};

const getAllUsers = async () => {
  return await prisma.user.findMany();
};

const getUserById = async (id) => {
  return await prisma.user.findUnique({ where: { id } });
};

const getUserByEmail = async (email) => {
  return await prisma.user.findUnique({ where: { email } });
};

const updateUser = async (id, data) => {
  return await prisma.user.update({ where: { id }, data });
};

const deleteUser = async (id) => {
  return await prisma.user.delete({ where: { id } });
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  getUserByEmail,
  updateUser,
  deleteUser,
};
