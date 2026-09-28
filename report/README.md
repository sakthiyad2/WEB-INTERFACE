# Student Report Card Portal

A responsive React app for student semester results and administrator-managed sample records. It uses React Router, React state/effects, and localStorage. The data is for demonstration only.

## Run locally

Open Command Prompt in the folder containing this README and run:

```bat
npm install
npm run dev
```

To install the app dependencies directly, use `npm install react-router-dom lucide-react`. Build and lint with `npm run build` and `npm run lint`.

## Demo accounts

- Admin: `admin` / `admin123`
- Student: `411625243044` / `19/12/2007`
- Additional sample student: `23AD001` / `15-08-2006`

The first student record uses the supplied register number and date of birth, is set to 2nd Year, and contains the Semester 1 and Semester 2 credit/grade rows supplied in the screenshots. The screenshots do not include marks, percentage, or CGPA, so those values are shown as unavailable. `Student User` is a placeholder name; edit it in `src/data/students.js` if needed.

## Routes and access

React Router maps `/login`, `/admin`, `/admin/students`, `/admin/student/:registerNumber`, `/student`, `/student/semester/1`, `/student/semester/2`, and `/student/report`. `ProtectedRoute` checks the authenticated role. Student pages always look up the student using the register number saved in the signed-in session, so changing a URL cannot select a different student. Admins can search, add, edit, delete, inspect records, and update marks.

`useState` controls form, search, loading, session, and student data. `useEffect` restores the session and saved records at startup and persists record changes. The data store is in `src/data/students.js`; admin subject marks are edited as JSON arrays in the student editor.

## Files

- `src/App.jsx`: route declarations and role-protected route groups.
- `src/context/AuthContext.jsx`: login, logout, sample data state, and localStorage persistence.
- `src/components/`: navigation, route guard, report card, student table, and loading state.
- `src/pages/`: login, admin dashboard and student management, student dashboard, and semester/report pages.
- `src/data/students.js`: sample students, grade rows, and result calculations.
- `src/App.css` and `src/index.css`: responsive portal styles and global defaults.

## Production security and database

This is a frontend-only demo. Credentials, session values, and student records in localStorage are visible and editable by the browser user; client-side route guards are not security boundaries. Do not use real student data with this version. A production system must use a backend with securely hashed credentials, server-side authentication (preferably secure, HTTP-only cookies), and authorization on every API request. Student report APIs must derive/validate the student identity on the server, while admin endpoints must enforce the admin role. Replace the sample context operations with authenticated API calls and store records in a protected database.
