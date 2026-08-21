import express from 'express';
import { signIn, signOut, verifyToken } from '../controllers/auth.controller.js';

const router = express.Router();

// POST api/auth/signin - sign in user
router.post('/signin', signIn);

// GET api/auth/signout - sign out user (as per assignment requirement)
router.get('/signout', signOut);

// GET api/auth/verify - verify token
router.get('/verify', verifyToken);

export default router;





