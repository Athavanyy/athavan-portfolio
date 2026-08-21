# Athavan's Portfolio Website

A modern, responsive portfolio website built with React showcasing my projects, skills, and professional journey.

## Features

- **6 Complete Pages**: Home, About, Projects, Education, Services, and Contact
- **Custom Logo**: Hexagonal logo with initials (AP) in the navigation bar
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Contact Form**: Captures user information and redirects to home page
- **Modern UI/UX**: Clean, professional design with smooth animations
- **React Router**: Single-page application with client-side routing

## Pages Overview

### 1. Home Page
- Welcome message and mission statement
- Call-to-action buttons linking to About and Projects pages
- Quick statistics showcase
- Gradient background with modern styling

### 2. About Page
- Professional profile image
- Legal name and personal description
- Downloadable resume link (PDF)
- Technical skills showcase
- Clean, employer-friendly layout

### 3. Projects Page
- 3+ featured projects with images
- Detailed project descriptions
- Role and outcome information
- Technology tags for each project
- Interactive project cards

### 4. Education Page
- Complete educational timeline
- Degree information with dates
- Institution details
- Additional certifications
- Professional qualifications

### 5. Services Page
- 4 main service offerings
- Service descriptions with key features
- Visual service cards with images
- Call-to-action section
- Professional service presentation

### 6. Contact Page
- Contact information panel
- Interactive contact form
- Form validation and submission
- Professional contact details
- Available hours information

## Technical Implementation

### Technologies Used
- **Frontend:**
  - React 18.3.1: Modern React with hooks
  - React Router DOM 6.30.1: Client-side routing
  - Vite: Fast build tool and dev server
  - CSS3: Custom styling with Flexbox and Grid
- **Backend:**
  - Node.js: JavaScript runtime
  - Express 4.18.2: Web framework
  - MongoDB: NoSQL database
  - Mongoose 8.0.3: MongoDB object modeling
  - CORS: Cross-origin resource sharing
  - dotenv: Environment variable management

### Key Features
- **State Management**: React hooks for form handling
- **Local Storage**: Contact form submissions stored locally
- **Responsive Design**: Mobile-first approach
- **Accessibility**: Semantic HTML and proper contrast
- **Performance**: Optimized images and efficient CSS

### File Structure
```
src/
├── App.jsx          # Main app component with routing
├── main.jsx         # Entry point with React Router setup
├── NavBar.jsx       # Navigation component with custom logo
├── Home.jsx         # Home page component
├── About.jsx        # About page component
├── Projects.jsx     # Projects showcase component
├── Education.jsx    # Education timeline component
├── Services.jsx     # Services offering component
├── Contact.jsx      # Contact form component
├── index.css        # Global styles and responsive design
└── App.css          # Additional component styles
```

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager
- MongoDB Atlas account (for backend functionality)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Athavanyy/athavan-portfolio.git
   cd athavan-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
    - Copy `env.template` to `.env`:
     ```bash
       cp env.template .env
     ```
   - Edit `.env` and add your MongoDB Atlas connection string:
     ```env
     MONGODB_URI=your-mongodb-connection-string-here
     PORT=5000
     ```
   - Get your MongoDB connection string from [MongoDB Atlas](https://cloud.mongodb.com/)

4. Start the development server (runs both frontend and backend):
   ```bash
   npm run dev
   ```

5. Open your browser:
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:3000`

## Vercel Deployment

Import the repository into Vercel with the default build settings. Set `MONGODB_URI` and `JWT_SECRET` in the Vercel project environment variables. The frontend uses same-origin `/api` requests in production.

## Backend API Endpoints

The application includes a complete REST API with the following endpoints:

### Contacts API (`/api/contacts`)
- `GET /api/contacts` - Get all contacts
- `GET /api/contacts/:id` - Get contact by id
- `POST /api/contacts` - Create new contact
- `PUT /api/contacts/:id` - Update contact
- `DELETE /api/contacts/:id` - Delete contact by id
- `DELETE /api/contacts` - Delete all contacts

### Projects API (`/api/projects`)
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get project by id
- `POST /api/projects` - Create new project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project by id
- `DELETE /api/projects` - Delete all projects

### Qualifications/Educations API (`/api/qualifications` or `/api/educations`)
- `GET /api/qualifications` - Get all qualifications
- `GET /api/qualifications/:id` - Get qualification by id
- `POST /api/qualifications` - Create new qualification
- `PUT /api/qualifications/:id` - Update qualification
- `DELETE /api/qualifications/:id` - Delete qualification by id
- `DELETE /api/qualifications` - Delete all qualifications

### Users API (`/api/users`)
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by id
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user by id
- `DELETE /api/users` - Delete all users

## Assignment Requirements Met

### Content Requirements (65 Marks)
✅ **Navigation Bar**: Custom navigation with all 6 pages  
✅ **Custom Logo**: Hexagonal logo with initials "AP"  
✅ **Home Page**: Welcome message, mission statement, navigation buttons  
✅ **About Page**: Legal name, profile image, description, resume link  
✅ **Projects Page**: 3+ projects with images, descriptions, roles, outcomes  
✅ **Education Page**: Qualifications, dates, degrees, certifications  
✅ **Services Page**: Service offerings with images and descriptions  
✅ **Contact Page**: Contact info panel and interactive form  
✅ **Form Functionality**: Captures data and redirects to home page  
✅ **Error-free Code**: All JavaScript, CSS, and assets functional  

### Internal Documentation (5 Marks)
✅ **Code Comments**: Comprehensive comments throughout all components  
✅ **Contextual Variables**: Human-readable variable names and function names  

### Version Control & Deployment (10 Marks)
✅ **GitHub Repository**: Well-structured repository with proper commits  
✅ **Cloud Deployment**: Ready for deployment to Vercel, Netlify, or similar  

## Deployment

This project is ready for deployment to various cloud platforms:

### Vercel
1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Render
1. Connect your GitHub repository to Render
2. Set build command: `npm run build`
3. Set start command: `npm run preview`

## Customization

To customize this portfolio for your own use:

1. **Personal Information**: Update the About page with your details
2. **Projects**: Replace the sample projects with your own work
3. **Education**: Update the education timeline with your qualifications
4. **Services**: Modify the services to match your offerings
5. **Contact**: Update contact information and form handling
6. **Styling**: Customize colors, fonts, and layout in `index.css`

## License

This project is open source and available under the [MIT License](LICENSE).

//How to Run

1. **Fix MongoDB Connection:**
   ```bash
   # Update connection string in server.js or create .env file
   ```

2. **Initialize Admin User:**
   ```bash
   npm run init-admin
   ```

3. **Start Development Server:**
   ```bash
   npm run dev
   ```

4. **Build for Production:**
   ```bash
   npm run build


To log in as admin
First, fix MongoDB connection (update password in server.js)
Run: npm run init-admin
Sign in with:
Email: admin@portfolio.com
Password: admin123

## Testing Strategy (Part I)

| Test Type | Command | What it Covers | Evidence to Capture |
| --- | --- | --- | --- |
| Unit (Vitest) | `npm run test` | Interactive calculator logic, keyboard/delete/clear flows | Screenshot of terminal output showing `2 passed` |
| E2E (Cypress) | `npm run test:e2e` | Full navigation Home → Projects → Contact, mocked contact submission, redirect to Home | AI Cypress video is generated at `cypress/videos/portfolio.cy.js.mp4`. Take a screenshot of the Cypress summary table |

Additional tips:
- The Cypress run already records a video; upload it alongside the Word document if AI Cypress requires a recording.
- To capture the requested snapshot of the Cypress test page, run `npm run cy:open`, execute the suite, and use the built-in screenshot button.
- If you need to re-run only the unit suite interactively, use `npm run test:watch`.

## Performance Optimization (Part II)

The following changes were implemented to improve perceived performance and bundle size:

1. **Route-Level Code Splitting** – `App.jsx` now lazy-loads all non-home pages behind a `<Suspense>` boundary, trimming the initial JavaScript shipped to first-time visitors.
2. **Shared Project Data Module** – `Projects.jsx` and `ProjectDetail.jsx` pull from a single `src/data/projects.js`, removing duplicated JSON blobs and reducing parsing work.
3. **Client-Side Navigation for Project Cards** – Replaced external anchors with React Router `Link` components, preventing full page reloads when moving to individual projects.
4. **Lightweight Loading State** – Added an accessible `.page-loading` placeholder that keeps layout stable while lazily loaded routes stream in.

How to validate:
1. Build and preview the site locally:  
   ```
   npm run build
   npm run preview
   ```
2. Run Lighthouse (Chrome DevTools → Lighthouse) against `http://localhost:4173` and verify the Performance score improvement compared to the pre-change baseline.
3. Optionally run `npm run lint` to ensure no regressions in best practices.

## Deployment Guide (Part III)

1. **Build Artifacts**
   ```bash
   npm run build
   ```
   The optimized assets live in `dist/`.

2. **Recommended Hosting: Vercel**
   - Create a new project from the GitHub repo `Athavanyy/athavan-portfolio`.
   - Build command: `npm run build`
   - Output directory: `dist`
   - Add environment variables if needed (e.g., `VITE_API_BASE_URL` later, currently hard-coded to `http://localhost:3000/api`).

3. **Alternative Hosting: Netlify**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Enable automatic deploys from `main`.

4. **Backend Hosting**
   - Provision a free Render or Railway Node service.
   - Set `PORT=3000` (or update `src/utils/api.js` + deployment instructions if you change it).
   - Add `MONGODB_URI` from MongoDB Atlas (user/password in `.env` rather than checked into `server.js`).

5. **Submission Links** *(update the placeholders once deployed)*
   - Frontend URL: `https://<your-vercel-subdomain>.vercel.app`
   - Backend URL: `https://<your-render-instance>.onrender.com`

After deployment, refresh the live URL to verify the CI/CD step and take “before vs. after” screenshots for Part IV.

## CI/CD Walkthrough (Part IV)

1. Create a feature branch: `git checkout -b chore/update-home-copy`.
2. Add a short paragraph to any page (e.g., update `Home.jsx` mission statement).
3. Run the automated checks locally:
   ```bash
   npm run lint
   npm run test
   npm run test:e2e   # optional but recommended before merging
   ```
4. Commit and push: `git commit -am "chore: refresh mission copy"` followed by `git push origin chore/update-home-copy`.
5. Open a Pull Request targeting `main`, review, and merge.
6. Wait for your hosting provider to redeploy, then refresh the live URL to confirm the change.
7. Capture **two** screenshots for the Word document: one before the change (cached or staging link) and one after the merged deployment.

## Submission Checklist

1. ✅ Link to deployed frontend (Part III)  
2. ✅ Link to GitHub repository (`https://github.com/Athavanyy/athavan-portfolio`)  
3. ✅ Word document that includes:
   - Unit test CLI screenshot
   - E2E test screenshot + Cypress recording link
   - Performance notes (e.g., Lighthouse report)
   - Deployment before/after screenshots demonstrating CI/CD refresh

Fill in the placeholders above once you have the final deployed URLs and screenshots.