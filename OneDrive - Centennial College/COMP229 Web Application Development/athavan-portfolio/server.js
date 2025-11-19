import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import contactRoutes from './server/routes/contact.routes.js';
import projectRoutes from './server/routes/project.routes.js';
import qualificationRoutes from './server/routes/qualification.routes.js';
import userRoutes from './server/routes/user.routes.js';
import authRoutes from './server/routes/auth.routes.js';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from public directory
app.use(express.static(join(__dirname, 'public')));

// Routes (setup before MongoDB connection)
app.use('/api/contacts', contactRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/qualifications', qualificationRoutes);
app.use('/api/educations', qualificationRoutes); // Alias for qualifications (assignment mentions "educations or qualifications")
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to Athavan Portfolio API',
    version: '1.0.0',
    endpoints: {
      contacts: '/api/contacts',
      projects: '/api/projects',
      qualifications: '/api/qualifications',
      educations: '/api/educations',
      users: '/api/users',
      auth: '/api/auth'
    }
  });
});

// Start server immediately (don't wait for MongoDB)
app.listen(PORT, () => {
  console.log(`\n✅ Server is running on port ${PORT}`);
  console.log(`✅ Visit http://localhost:${PORT} to see the API\n`);
});

// MongoDB Connection (after server starts)
// Password: ay.athavan2005
// If connection fails, check: 1) Password is correct in MongoDB Atlas, 2) IP is whitelisted, 3) Database user exists
const CONNECTION_STRING = process.env.MONGODB_URI || 'mongodb+srv://athavan21vip_db_user:ay.athavan2005@cluster0.b4wasmg.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB (non-blocking - server already started)
// Use connection options to prevent hanging
mongoose.connect(CONNECTION_STRING, {
  serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
  socketTimeoutMS: 45000,
})
  .then(() => {
    console.log('✅ MongoDB database connection established successfully');
  })
  .catch((error) => {
    console.error('\n⚠️  MongoDB connection error:', error.message);
    if (error.code === 8000) {
      console.error('\n=== MongoDB Authentication Failed ===');
      console.error('Possible issues:');
      console.error('1. Check if the username and password are correct');
      console.error('2. Verify the database user exists in MongoDB Atlas');
      console.error('3. Check if your IP address is whitelisted in MongoDB Atlas');
      console.error('4. If password contains special characters, it may need URL encoding');
      console.error('5. Verify the connection string in your .env file or server.js');
      console.error('\n⚠️  Server is running but database operations will fail.');
      console.error('⚠️  Please fix the MongoDB connection to enable full functionality.');
      console.error('=====================================\n');
    } else {
      console.error('⚠️  Server is running but database operations will fail.');
      console.error('⚠️  Please check your MongoDB connection string.\n');
    }
    // Don't exit - server is already running
    // Database operations will fail gracefully with error messages
  });

export default app;

