export interface Account {
  id: string;
  balance: number;
}

// Guarda contas por id
export const accounts: Record<string, Account> = {};

// Função para resetar (usada pelo /reset)
export function resetStore() {
  for (const key of Object.keys(accounts)) delete accounts[key];
}
