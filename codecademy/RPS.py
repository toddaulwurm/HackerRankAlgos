"""
Let's play Rock, Paper, Scissors!
By:Todd via Codecademy
"""

from random import randint

options = ["ROCK","PAPER","SCISSORS"]
message={
    "tie":"Yawn, it's a tie!",
    "won":"Yay, you won!",
    "lost":"Awe, you lost!",
}
def decide_winner(user_choice,computer_choice):
    print ("Your Choice: " + str(user_choice))
    print ("Computer Choice: " + str(computer_choice))
    if user_choice == computer_choice:
        print (message["tie"])
    elif user_choice == options[0] and computer_choice == options[2]:
        print (message["won"])
    elif user_choice == options[1] and computer_choice == options[0]:
        print (message["won"])
    elif user_choice == options[2] and computer_choice == options[1]:
        print (message["won"])
    else:
        print (message["lost"])
def play_RPS():
    user_choice =  str(input("Enter Rock, Paper, or Scissors: ")).upper()
    computer_choice = options[randint(0,2)]
    decide_winner(user_choice,computer_choice)
play_RPS()