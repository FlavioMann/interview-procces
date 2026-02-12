import { Router, Request, Response } from 'express';
import { resetStore } from '../storage/memory.store';

const router = Router();

router.post('/reset', (_req: Request, res: Response) => {
  resetStore();
  return res.status(200).send('OK');
});

export default router;
