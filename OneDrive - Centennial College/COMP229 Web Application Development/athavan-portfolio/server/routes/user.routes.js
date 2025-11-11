import express from 'express';
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  deleteAllUsers
} from '../controllers/user.controller.js';
import { verifyToken } from '../middleware/auth.middleware.js';

const router = express.Router();

// GET api/users - get all users (protected)
router.get('/', verifyToken, getAllUsers);

// GET api/users/:id - get user by id (protected)
router.get('/:id', verifyToken, getUserById);

// POST api/users - add new user
router.post('/', createUser);

// PUT api/users/:id - update user by id (protected)
router.put('/:id', verifyToken, updateUser);

// DELETE api/users - remove all users (protected, must be before /:id route)
router.delete('/', verifyToken, deleteAllUsers);

// DELETE api/users/:id - remove user by id (protected)
router.delete('/:id', verifyToken, deleteUser);

export default router;

