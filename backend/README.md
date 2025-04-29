# Finance Website Backend

This is the backend server for the finance website. It handles form submissions and stores data in MongoDB.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with the following variables:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/finance-website
```

3. Make sure MongoDB is running on your system

4. Start the server:
```bash
npm run dev
```

## API Endpoints

### POST /api/form
Submit a new form with the following fields:
- name: String
- email: String
- phone: String
- loanType: String
- amount: Number
- message: String

### GET /api/form
Retrieve all submitted forms

## Database
The application uses MongoDB to store form submissions. Make sure MongoDB is installed and running on your system. 