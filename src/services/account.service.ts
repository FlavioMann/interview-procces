import { accounts, Account } from '../storage/memory.store';

type DepositResult = { destination: Account };
type WithdrawResult = { origin: Account };
type TransferResult = { origin: Account; destination: Account };

class AccountsService {
  getBalance(accountId: string): number | null {
    const acc = accounts[accountId];
    return acc ? acc.balance : null;
  }

  private getOrCreate(accountId: string): Account {
    const existing = accounts[accountId];
    if (existing) return existing;
    const created: Account = { id: accountId, balance: 0 };
    accounts[accountId] = created;
    return created;
  }

  deposit(destinationId: string, amount: number): DepositResult {
    const dest = this.getOrCreate(destinationId);
    dest.balance += amount;
    return { destination: { id: dest.id, balance: dest.balance } };
  }

  withdraw(originId: string, amount: number): WithdrawResult | null {
    const origin = accounts[originId];
    if (!origin) return null;

    origin.balance -= amount;
    return { origin: { id: origin.id, balance: origin.balance } };
  }

  transfer(originId: string, destinationId: string, amount: number): TransferResult | null {
    const origin = accounts[originId];
    if (!origin) return null;

    const dest = this.getOrCreate(destinationId);

    origin.balance -= amount;
    dest.balance += amount;

    return {
      origin: { id: origin.id, balance: origin.balance },
      destination: { id: dest.id, balance: dest.balance },
    };
  }
}

export default new AccountsService();
