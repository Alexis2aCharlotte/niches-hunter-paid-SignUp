import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { validateEnv, config } from './config/env';
import { webhookRouter } from './routes/webhook';

// Load environment variables
dotenv.config();

// Validate environment
validateEnv();

const app = express();
const PORT = config.port;

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    service: 'Niches Hunter Paid SignUp',
    description: 'Welcome email service for paid customers',
    timestamp: new Date().toISOString()
  });
});

// Webhook routes
app.use('/webhook', webhookRouter);

// Start server
app.listen(PORT, () => {
  console.log(`\n🚀 Niches Hunter Paid SignUp Service`);
  console.log(`═══════════════════════════════════════`);
  console.log(`📍 Port: ${PORT}`);
  console.log(`📍 Health: http://localhost:${PORT}/health`);
  console.log(`📍 Webhook: POST http://localhost:${PORT}/webhook/new-customer`);
  console.log(`═══════════════════════════════════════\n`);
});
