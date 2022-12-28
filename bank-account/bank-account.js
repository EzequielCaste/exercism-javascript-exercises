//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.balance2 = 0;
  }

  open() {
    if (this.isOpen) {
      throw new ValueError();
    }
    return (this.isOpen = true);
  }

  close() {
    if (this.isOpen) {
      this.balance2 = 0;
      return (this.isOpen = false);
    }
    throw new ValueError();
  }

  deposit(amount) {
    if (this.isOpen && amount > 0) {
      return (this.balance2 = this.balance2 + amount);
    }
    throw new ValueError();
  }

  withdraw(amount) {
    if (this.isOpen && this.balance2 >= amount && amount > 0) {
      return (this.balance2 = this.balance2 - amount);
    }
    throw new ValueError();
  }

  get balance() {
    if (this.isOpen) {
      return this.balance2;
    }

    throw new ValueError();
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
