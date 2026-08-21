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

if (process.env.VERCEL !== '1') {
  app.listen(PORT, () => {
    console.log(`\n✅ Server is running on port ${PORT}`);
    console.log(`✅ Visit http://localhost:${PORT} to see the API\n`);
  });
}

const CONNECTION_STRING = process.env.MONGODB_URI;

if (CONNECTION_STRING) {
  mongoose.connect(CONNECTION_STRING, {
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
  })
    .then(() => {
      console.log('✅ MongoDB database connection established successfully');
    })
    .catch((error) => {
      console.error('\n⚠️  MongoDB connection error:', error.message);
      console.error('⚠️  Server is running but database operations will fail.\n');
    });
} else {
  console.warn('MONGODB_URI is not configured; database features are unavailable.');
}

export default app;

