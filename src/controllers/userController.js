//Standardized response function
const {
  getAllUserService,
  getUserByIdService,
  createUserService,
  updateUserService,
  deleteUserService,
} = require("../models/userModel");
const handleResponse = (res, status, message, data = null) => {
  res.status(status).json({
    status,
    message,
    data,
  });
};

const createUser = async (req, res, next) => {
  const { name, email } = req.body;
  try {
    const newUser = await createUserService(name, email);
    return handleResponse(res, 201, "User created Successfully", newUser);
  } catch (err) {
    next(err);
  }
};
const getAllUsers = async (req, res, next) => {
  try {
    const users = await getAllUserService();
    return handleResponse(res, 200, "Users fetched succesfully", users);
  } catch (err) {
    next(err);
  }
};
const getUserById = async (req, res, next) => {
  try {
    const user = await getUserByIdService(req.params.id);
    if (!user) return handleResponse(res, 404, "User Not Found");
    return handleResponse(res, 200, "User fetched succesfully", user);
  } catch (err) {
    next(err);
  }
};
const updateUser = async (req, res, next) => {
  try {
    const { name, email } = req.body;
    const updatedUser = await updateUserService(req.params.id, name, email);
    if (!updatedUser) return handleResponse(res, 404, "User Not Found");
    return handleResponse(res, 200, "User Updated succesfully", updatedUser);
  } catch (err) {
    next(err);
  }
};
const deleteUser = async (req, res, next) => {
  try {
    const deletedUser = await deleteUserService(req.params.id);
    if (!deletedUser) return handleResponse(res, 404, "User Not Found");
    return handleResponse(res, 200, "User Deleted succesfully", deletedUser);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
