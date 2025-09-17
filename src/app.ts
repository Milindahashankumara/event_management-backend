import type { Request, Response } from 'express';
const express = require('express');
const dotenv = require("dotenv");
const {prisma} = require('./utils/prisma');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/db-health', async (req: Request, res: Response) => {
    try {
        await prisma.$queryRaw`SELECT 1`;
        res.json({ status: 'ok', message: 'Database connected' });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Database connection failed', error: error instanceof Error ? error.message : String(error) });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
