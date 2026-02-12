import { Router, Request, Response } from 'express';
import accountsService from '../services/account.service';

const router = Router();

router.get('/balance', (req: Request, res: Response) => {
  const accountId = String(req.query.account_id ?? '');

  const balance = accountsService.getBalance(accountId);
  if (balance === null) {
    return res.status(404).type('text').send('0');
  }
  return res.status(200).type('text').send(String(balance));
});

export default router;
