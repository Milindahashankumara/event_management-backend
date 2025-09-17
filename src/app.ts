import type { Request, Response } from 'express';
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/test', (req: Request, res: Response) => {
  res.json({ message: 'Success' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
