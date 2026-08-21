import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import User from '../models/user.model.js';

// Load environment variables
dotenv.config();

const CONNECTION_STRING = process.env.MONGODB_URI || 'mongodb+srv://athavan21vip_db_user:ay.athavan2005@cluster0.b4wasmg.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Cluster0';

// Admin credentials (hardcoded as per assignment requirement)
const ADMIN_EMAIL = 'admin@portfolio.com';
const ADMIN_PASSWORD = 'admin123';
const ADMIN_NAME = 'Admin User';

async function initAdmin() {
  try {
    // Connect to MongoDB
    await mongoose.connect(CONNECTION_STRING);
    console.log('Connected to MongoDB');

    // Check if admin user already exists
    const existingAdmin = await User.findOne({ email: ADMIN_EMAIL });
    
    if (existingAdmin) {
      // Update existing admin to ensure role is set
      if (existingAdmin.role !== 'admin') {
        existingAdmin.role = 'admin';
        const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, 10);
        existingAdmin.password = hashedPassword;
        await existingAdmin.save();
        console.log('Updated existing user to admin role');
      } else {
        console.log('Admin user already exists');
      }
    } else {
      // Create new admin user
      const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, 10);
      const adminUser = new User({
        name: ADMIN_NAME,
        email: ADMIN_EMAIL,
        password: hashedPassword,
        role: 'admin',
        created: new Date(),
        updated: new Date()
      });
      
      await adminUser.save();
      console.log('Admin user created successfully');
    }
    
    console.log('\n=== Admin Credentials ===');
    console.log('Email:', ADMIN_EMAIL);
    console.log('Password:', ADMIN_PASSWORD);
    console.log('========================\n');
    
    process.exit(0);
  } catch (error) {
    console.error('Error initializing admin:', error);
    process.exit(1);
  }
}

initAdmin();

