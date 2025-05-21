import { Router } from 'express';
import { processChat } from '../controllers/aiController';

const router = Router();

router.post('/', processChat);

export { router as aiRoutes };