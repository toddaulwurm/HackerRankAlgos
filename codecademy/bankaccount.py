class BankAccount(object):
    balance = 0
    def __init__(self,name):
        self.name = name
    def __repr__(self):
        return "%s's account. Balance: %.2f"%(self.name,self.balance)
    def show_balance(self):
        print ("Balance: %.2f"%(self.balance))
        return self
    def deposit(self, amount):
        if amount <= 0:
            print ("You can't deposit negative money or 0 money!")
            return
        else:
            print ("Depositing $%.2f dollars..."%(amount))
            self.balance += amount
            self.show_balance()
            return self
    def withdraw(self,amount):
        if amount > self.balance:
            print ("Can't overdraw!")
            return
        else:
            print ("%.2f is being withdrawn..."%(amount))
            self.balance -= amount
            self.show_balance()
            return self
my_account = BankAccount("Todd")
print (my_account)
my_account.show_balance().deposit(2000).withdraw(1000)
print (my_account)
