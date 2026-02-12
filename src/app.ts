import express from 'express';
import balanceRoutes from './routes/balance.routes';
import eventRoutes from './routes/event.routes';
import resetRoutes from './routes/reset.routes';

const app = express();

app.use(express.json());

app.use(resetRoutes);
app.use(balanceRoutes);
app.use(eventRoutes);

export default app;
