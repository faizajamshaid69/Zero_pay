// Importing core packages
import express from 'express';
import dotenv from 'dotenv';
import paymentRoutes from './Routes/Payments.js';
import connectDB from './config/db.js';
// Config .env
dotenv.config();
// Connect Database
connectDB();

// Create app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Route setup
app.use('/api/payments', paymentRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('GaliPay Backend API is running...');
});

// Port from env or default
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
