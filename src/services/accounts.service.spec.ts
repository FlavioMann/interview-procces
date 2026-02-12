import accountsService from './account.service';
import { resetStore } from '../storage/memory.store';

describe('AccountsService', () => {

  beforeEach(() => {
    resetStore();
  });

  describe('deposit', () => {
    it('should create account if not exists and deposit amount', () => {
      const result = accountsService.deposit('100', 10);

      expect(result).toEqual({
        destination: {
          id: '100',
          balance: 10,
        },
      });
    });

    it('should deposit into existing account', () => {
      accountsService.deposit('100', 10);
      const result = accountsService.deposit('100', 5);

      expect(result.destination.balance).toBe(15);
    });
  });

  describe('withdraw', () => {
    it('should return null if account does not exist', () => {
      const result = accountsService.withdraw('200', 10);
      expect(result).toBeNull();
    });

    it('should withdraw from existing account', () => {
      accountsService.deposit('100', 20);
      const result = accountsService.withdraw('100', 5);

      expect(result).toEqual({
        origin: {
          id: '100',
          balance: 15,
        },
      });
    });
  });

  describe('transfer', () => {
    it('should return null if origin does not exist', () => {
      const result = accountsService.transfer('999', '300', 10);
      expect(result).toBeNull();
    });

    it('should transfer between accounts', () => {
      accountsService.deposit('100', 15);
      const result = accountsService.transfer('100', '300', 15);

      expect(result).toEqual({
        origin: {
          id: '100',
          balance: 0,
        },
        destination: {
          id: '300',
          balance: 15,
        },
      });
    });
  });

  describe('getBalance', () => {
    it('should return null if account does not exist', () => {
      expect(accountsService.getBalance('999')).toBeNull();
    });

    it('should return correct balance', () => {
      accountsService.deposit('100', 50);
      expect(accountsService.getBalance('100')).toBe(50);
    });
  });
});
