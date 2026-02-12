import { Router, Request, Response } from 'express';
import accountsService from '../services/account.service';

type EventType = 'deposit' | 'withdraw' | 'transfer';

type DepositEvent = { type: 'deposit'; destination: string; amount: number };
type WithdrawEvent = { type: 'withdraw'; origin: string; amount: number };
type TransferEvent = { type: 'transfer'; origin: string; destination: string; amount: number };

type EventPayload = DepositEvent | WithdrawEvent | TransferEvent;

const router = Router();

router.post('/event', (req: Request, res: Response) => {
  const body = req.body;

  if (!body?.type) {
    return res.status(400).type('text').send('0');
  }

  switch (body.type) {
    case 'deposit': {
      const result = accountsService.deposit(body.destination, body.amount);
      return res.status(201).json(result);
    }

    case 'withdraw': {
      const result = accountsService.withdraw(body.origin, body.amount);
      if (!result) return res.status(404).type('text').send('0');
      return res.status(201).json(result);
    }

    case 'transfer': {
      const result = accountsService.transfer(
        body.origin,
        body.destination,
        body.amount
      );

      if (!result) return res.status(404).type('text').send('0');
      return res.status(201).json(result);
    }

    default:
      return res.status(400).type('text').send('0');
  }
});


export default router;
