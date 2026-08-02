class BankAccount {

    constructor(balance) {
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {

        if (amount > this.balance) {
            console.log("Insufficient balance");
        }
        else {
            this.balance -= amount;
        }

    }

    getBalance() {
        return this.balance;
    }

}

const account = new BankAccount(5000);

account.deposit(1000);

account.withdraw(2000);

console.log(account.getBalance());