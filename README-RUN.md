# How to Run the LMS UI

## Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

## Installation & Running

1. **Install dependencies** (already done):
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to:
   - http://localhost:3000

## Available Pages

Once the server is running, you can access these pages:

- **Landing Page**: http://localhost:3000/
- **Login**: http://localhost:3000/login
- **Magic Link Sent**: http://localhost:3000/magic-link-sent
- **Student Dashboard**: http://localhost:3000/dashboard-student
- **Teacher Dashboard**: http://localhost:3000/dashboard-teacher
- **Course Reader**: http://localhost:3000/course
- **Course Editor**: http://localhost:3000/course-editor
- **404 Error**: http://localhost:3000/any-invalid-page
- **500 Error**: http://localhost:3000/500

## Notes

- The application uses placeholder images that reference `/placeholder1.jpg`, `/placeholder2.jpg`, etc. and `/avatar-placeholder.jpg`
- The banner and square logos reference the actual images in `/docs/resources/`
- All data is hardcoded (no backend integration)
- Navigation between pages works via the links in the UI

## Build for Production

To build the application for production:
```bash
npm run build
npm start
```