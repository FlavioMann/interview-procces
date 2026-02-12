export interface Account {
  id: string;
  balance: number;
}

export const accounts: Record<string, Account> = {};

export function resetStore() {
  for (const key of Object.keys(accounts)) delete accounts[key];
}
