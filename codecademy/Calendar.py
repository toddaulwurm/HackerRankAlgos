"""
Making a calendar! 
By: Todd via CodeCademy

"""
from time import sleep
from time import strftime
name = "Todd"
calendar = {}
print ("Hello!")
def welcome():
    print ("Welcome to Calendar, %s"%(name))
    print ("Calendar is open...")
    sleep(1)
    print( "Today is: " + strftime("%A %B %d, %Y")) 
    print ("The time is " + strftime("%H:%M:%S"))
    print ("What would you like to do?")
def start_calendar():
    welcome()
    start = True
    while start:
        user_choice = input("Enter A to Add, U to Update, V to View, D to Delete, X to Exit:")
        user_choice = user_choice.upper()
        if user_choice == "V":
            if len(calendar.keys())==0:
                print ("Calendar is empty!")
            else:
                print (calendar)
        elif user_choice == "U":
            date = input("What date? ")
            update = input("Enter the update: ")
            calendar[date] = update
            print ("Update successful!")
            print (calendar)
        elif user_choice == "A":
            event = input("Enter Event: ")
            date = input("Enter date (MM/DD/YYYY): ")
            if len(date)!=10 or int(date[6:11])<int(strftime("%Y")):
                print ("Invalid date!")
                try_again = input("Try Again? Y for Yes, N for No: ").upper()
                if try_again == "Y":
                    continue
                else:
                    start = False
            else:
                calendar[date]=event
                print ("Success!")
                print (calendar)
        elif user_choice == "D":
            if len(calendar.keys())==0:
                print ("Calendar is empty!")
            else:
                event = input("Which event?")
                for date in calendar.keys():
                    if calendar[date] == event:
                        del calendar[date]
                        print ("Success! %s was deleted!"%(event))
                        print (calendar)
                    else:
                        print ("Couldn't find that date! Try again...")
        elif user_choice == "X":
            start = False
        else:
            print ("Invalid input! Sorry!")
            start = False

start_calendar()