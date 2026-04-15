# Personal Expense Tracker 💰

A full-stack expense tracking application built with **React**, **Node.js**, **Express**, and **MongoDB**. Manage your income and expenses efficiently with real-time data visualization, authentication, and secure password management.

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Frontend Features](#frontend-features)
- [Usage Guide](#usage-guide)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

### Core Features
- ✅ **User Authentication** - Secure registration and login with JWT tokens
- ✅ **Expense Management** - Add, view, and delete personal expenses
- ✅ **Income Tracking** - Monitor and manage income sources
- ✅ **Dashboard** - Beautiful overview with statistics and charts
- ✅ **Data Visualization** - Charts for expense trends and category breakdown
- ✅ **Export Data** - Download expense/income details as Excel files
- ✅ **Profile Management** - Update profile picture and name

### Security Features
- ✅ **Forgot Password** - Self-service password reset functionality
- ✅ **Secure Logout** - Clear session and authentication tokens
- ✅ **Password Hashing** - bcryptjs for secure password storage
- ✅ **JWT Authentication** - Token-based secure API access
- ✅ **Protected Routes** - Authentication middleware for API endpoints

### User Experience
- ✅ **Responsive Design** - Works seamlessly on desktop and mobile
- ✅ **Real-time Feedback** - Toast notifications for all actions
- ✅ **Dark-friendly UI** - Modern, clean interface with Tailwind CSS
- ✅ **Smooth Animations** - Engaging user interactions
- ✅ **Confirmation Dialogs** - Prevent accidental data deletion

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool & dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Recharts** - Data visualization & charts
- **React Icons** - Icon library
- **Axios** - HTTP client
- **React Hot Toast** - Notifications

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **Multer** - File upload handling
- **dotenv** - Environment configuration

### Tools & Services
- **Git** - Version control
- **GitHub** - Repository hosting
- **Postman** - API testing (optional)

---

## 📁 Project Structure

```
Expense Tracker/
├── backend/
│   ├── config/
│   │   └── db.js                 # Database connection
│   ├── controllers/
│   │   ├── authController.js     # Auth logic (login, register, password reset)
│   │   ├── dashboardController.js
│   │   ├── expenseController.js
│   │   └── incomeController.js
│   ├── middleware/
│   │   ├── authMiddleware.js     # JWT verification
│   │   └── uploadMiddleware.js   # File upload handling
│   ├── models/
│   │   ├── User.js
│   │   ├── Expense.js
│   │   └── Income.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── dashboardRoutes.js
│   │   ├── expenseRoutes.js
│   │   └── incomeRoutes.js
│   ├── uploads/                  # Uploaded profile images
│   ├── .env                       # Environment variables
│   ├── package.json
│   └── server.js                 # Entry point
│
└── frontend/
    └── expense-tracker/
        ├── src/
        │   ├── components/
        │   │   ├── Cards/
        │   │   ├── Charts/
        │   │   ├── Dashboard/
        │   │   ├── Expense/
        │   │   ├── Income/
        │   │   ├── Inputs/
        │   │   └── layouts/     # Navbar, Sidebar, AuthLayout
        │   ├── context/
        │   │   └── UserContext.jsx  # Global user state
        │   ├── hooks/
        │   │   └── useUserAuth.jsx
        │   ├── pages/
        │   │   ├── Auth/         # Login, SignUp, ForgotPassword, Logout
        │   │   └── Dashboard/    # Home, Expense, Income
        │   ├── utils/
        │   │   ├── apiPaths.js   # API endpoints
        │   │   ├── axiosInstance.js
        │   │   ├── helper.js
        │   │   └── data.js
        │   ├── App.jsx
        │   ├── main.jsx
        │   └── index.css
        ├── public/
        ├── package.json
        ├── vite.config.js
        └── index.html
```

---

## 🚀 Installation

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (local or cloud instance)
- **Git**

### Step 1: Clone the Repository

```bash
git clone https://github.com/Sukhpreet7975/Personal-Expense-Tracker.git
cd Personal-Expense-Tracker
```

### Step 2: Backend Setup

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Create .env file (see Configuration section)
# Copy the .env template and fill in your values

# Start the backend server
npm start
```

### Step 3: Frontend Setup

```bash
# Navigate to frontend folder
cd ../frontend/expense-tracker

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## ⚙️ Configuration

### Backend .env File

Create a `.env` file in the `backend/` folder:

```env
# Server Configuration
PORT=8000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/expense-tracker
# Or use MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/expense-tracker

# JWT Configuration
JWT_SECRET=your_jwt_secret_key_here_make_it_strong

# Other Configuration
UPLOAD_DIR=./uploads
```

### Frontend Configuration

The frontend is pre-configured to connect to `http://localhost:8000`. Modify `src/utils/apiPaths.js` if your backend runs on a different URL:

```javascript
export const BASE_URL = 'http://localhost:8000'; // Change this if needed
```

---

## ▶️ Running the Application

### Development Mode (Recommended)

**Terminal 1 - Backend:**
```bash
cd backend
npm start
# Server runs on http://localhost:8000
```

**Terminal 2 - Frontend:**
```bash
cd frontend/expense-tracker
npm run dev
# App runs on http://localhost:5173
```

### Production Mode

**Backend:**
```bash
cd backend
npm run build  # If applicable
npm start
```

**Frontend:**
```bash
cd frontend/expense-tracker
npm run build
npm run preview  # For preview or deploy the dist folder
```

---

## 📡 API Documentation

### Authentication Endpoints

#### Register User
```
POST /api/v1/auth/register
Content-Type: application/json

{
  "fullName": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Login User
```
POST /api/v1/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Get User Info (Protected)
```
GET /api/v1/auth/getUser
Authorization: Bearer <JWT_TOKEN>
```

#### Forgot Password
```
POST /api/v1/auth/forgot-password
Content-Type: application/json

{
  "email": "john@example.com",
  "newPassword": "newpassword123"
}
```

#### Upload Profile Image
```
POST /api/v1/auth/upload-image
Authorization: Bearer <JWT_TOKEN>
Content-Type: multipart/form-data

FormData: { image: <file> }
```

### Expense Endpoints

#### Add Expense
```
POST /api/v1/expense/add
Authorization: Bearer <JWT_TOKEN>

{
  "category": "Food",
  "amount": 50,
  "date": "2024-04-15",
  "icon": "🍔"
}
```

#### Get All Expenses
```
GET /api/v1/expense/get
Authorization: Bearer <JWT_TOKEN>
```

#### Delete Expense
```
DELETE /api/v1/expense/:expenseId
Authorization: Bearer <JWT_TOKEN>
```

#### Download Expenses (Excel)
```
GET /api/v1/expense/downloadexcel
Authorization: Bearer <JWT_TOKEN>
```

### Income Endpoints

Similar structure to Expense endpoints:
- `POST /api/v1/income/add` - Add income
- `GET /api/v1/income/get` - Get all income
- `DELETE /api/v1/income/:incomeId` - Delete income
- `GET /api/v1/income/downloadexcel` - Download as Excel

### Dashboard Endpoint

#### Get Dashboard Data
```
GET /api/v1/dashboard
Authorization: Bearer <JWT_TOKEN>

Response includes:
{
  "totalIncome": 5000,
  "totalExpense": 1500,
  "balance": 3500,
  "transactions": [...],
  ...other analytics
}
```

---

## 🎨 Frontend Features

### Pages

1. **Login Page** (`/login`)
   - Email and password login
   - Link to SignUp and Forgot Password
   - Form validation and error handling

2. **Sign Up Page** (`/signup`)
   - New user registration
   - Profile image upload during signup
   - Email validation

3. **Forgot Password Page** (`/forgot-password`)
   - Self-service password reset
   - Email verification and new password entry
   - Success confirmation with redirect

4. **Dashboard Page** (`/dashboard`)
   - Overview of income and expenses
   - Financial summary cards
   - Recent transactions list
   - Last 30 days expense chart
   - Recent income details

5. **Income Page** (`/income`)
   - List of all income entries
   - Add new income
   - Delete income records
   - Download income report

6. **Expense Page** (`/expense`)
   - List of all expense entries
   - Add new expense with category
   - Delete expense records
   - Download expense report

7. **Logout Page** (`/logout`)
   - Confirmation dialog before logout
   - Animated success state
   - Auto-redirect to login

### Components

- **Navbar** - Navigation bar with user info and logout
- **SideMenu** - Navigation menu with all routes
- **Cards** - Info cards, transaction cards, character avatars
- **Charts** - Line chart, bar chart, pie chart, custom tooltips
- **Forms** - Add expense, add income with validation
- **Modal** - Reusable modal component for dialogs
- **Input** - Custom input component with labels

---

## 📖 Usage Guide

### Adding an Expense

1. Log in to your account
2. Click on "Expense" in the sidebar
3. Click "Add Expense" button
4. Fill in:
   - Category (e.g., Food, Transport, Shopping)
   - Amount
   - Date
   - Optional emoji/icon
5. Click "Add" to save

### Viewing Dashboard

1. After login, you're automatically on the Dashboard
2. See your total income, expenses, and balance
3. View recent transactions
4. Check the 30-day expense trend

### Resetting Password

1. On the login page, click "Forgot Password?"
2. Enter your registered email
3. Enter and confirm your new password
4. Click "Reset Password"
5. You'll be redirected to login with your new password

### Exporting Data

1. Go to Expense or Income page
2. Click the "Download" button
3. An Excel file will be generated with all your data

---

## 🔒 Security Considerations

- Passwords are hashed using **bcryptjs** (10 salt rounds)
- JWT tokens expire after **1 hour**
- API endpoints are protected with authentication middleware
- File uploads are validated and stored securely
- Environment variables store sensitive data (not in code)
- Input validation on both frontend and backend

---

## 🐛 Troubleshooting

### Backend won't start
- Ensure MongoDB is running
- Check if port 8000 is available
- Verify `.env` file is properly configured
- Run `npm install` again if dependencies are missing

### Frontend won't start
- Delete `node_modules` and `package-lock.json`, then run `npm install`
- Check if port 5173 is available
- Ensure backend is running before testing API calls

### Can't login
- Verify your email and password are correct
- Check if backend is running on `http://localhost:8000`
- Look for error messages in browser console

### Expenses/Income not loading
- Ensure you're logged in with valid JWT token
- Check MongoDB connection
- Verify data exists in the database

---

## 📝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - see the LICENSE file for details.

---

## 👤 Author

**Sukhpreet Singh**

- GitHub: [@Sukhpreet7975](https://github.com/Sukhpreet7975)
- Repository: [Personal-Expense-Tracker](https://github.com/Sukhpreet7975/Personal-Expense-Tracker)

---

## 🙏 Acknowledgments

- React and Vite communities for excellent tools
- Tailwind CSS for styling framework
- Recharts for beautiful chart components
- MongoDB for database solution

---

## 📞 Support

For support, email: sukhpreet7975@example.com or open an issue on GitHub.

---

**Happy Expense Tracking! 💸**
