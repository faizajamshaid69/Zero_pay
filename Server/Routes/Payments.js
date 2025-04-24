
import express from 'express';
import { sendPayment } from '../Controllers/PaymentController.js';

const router = express.Router();

// Route: POST /api/payments/send
router.post('/send', sendPayment);

export default router;
