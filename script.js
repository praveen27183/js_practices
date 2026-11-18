function createBankAccount(iniital = 0) {
    let balance = iniital;

    return {
        deposit(amount) {
            if (amount > 0) {
                balance += amount;

            } return balance;
        }, withdrath(amount) {
            if (balance < amount) {
                console.log("infucient balance", balance)
            }
            if (amount > 0) {
                balance -= amount;

            } return balance;
        },

        getBalance() {
            return balance;

        }
    }
};

const acc = createBankAccount(100);
acc.withdrath(350);

acc.deposit(500);
acc.withdrath(30);
console.log(acc.getBalance());

console.log(acc.getBalance());