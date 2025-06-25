import express from 'express';
import { exampleHandler } from '../controllers/example.controller';

const router = express.Router();

router.get('/', exampleHandler);

export default router;
