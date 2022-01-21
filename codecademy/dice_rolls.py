"""
We're going to play a guessing game using a dice rolling function.

By: Todd
"""
from random import randint
from time import sleep
def get_user_guess():
    guess = int(input("Guess a number: "))
    return guess
def roll_dice(number_of_sides):
    first_roll = randint(1,number_of_sides)
    second_roll = randint(1,number_of_sides)
    max_val = number_of_sides*2
    print ("The max number rolled is %d."%(max_val))
    guess = get_user_guess()
    if guess > max_val:
        print ("That guess is too high!")
    else:
        print ("Rolling...")
        sleep(2)
        print ("The first roll is %d!"%(first_roll))
        sleep(1)
        total_roll = first_roll + second_roll
        print ("The total is %d"%(total_roll))
        print( "Result...")
        sleep(1)
        if total_roll == guess:
            print ("Hell Yeah!")
        else:
            print ("Try Again!")


roll_dice(6)