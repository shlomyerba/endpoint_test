import dotenv from 'dotenv';

dotenv.config();

import app from './app';
import { sequelize } from './db';
import './models/user.model';

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await sequelize.sync({ alter: true });
    console.log('✅ DB synced');

    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error('❌ Failed to sync DB:', err);
    process.exit(1);
  }
}

startServer();
