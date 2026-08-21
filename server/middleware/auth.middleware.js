import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

// Verify JWT token
export const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1] || req.headers['x-access-token'];
  
  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    req.userId = decoded.id;
    
    // Get user to attach to request
    const user = await User.findById(decoded.id).select('-password');
    if (user) {
      req.user = user;
    }
    
    next();
  } catch (error) {
    console.error('verifyToken middleware error:', error);
    return res.status(401).json({ message: 'Unauthorized: Invalid token', error: error.message });
  }
};

// Check if user is admin
export const requireAdmin = async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(403).json({ message: 'Authentication required' });
    }
    
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Admin access required' });
    }
    
    next();
  } catch (error) {
    console.error('requireAdmin middleware error:', error);
    return res.status(500).json({ message: error.message });
  }
};

// Check if user is authenticated (for read operations - users can read, admin can do everything)
export const requireAuth = async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(403).json({ message: 'Authentication required' });
    }
    next();
  } catch (error) {
    console.error('requireAuth middleware error:', error);
    return res.status(500).json({ message: error.message });
  }
};





