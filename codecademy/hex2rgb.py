def rgb_hex():
    invalid_msg = "Invalid Input!"
    red = int(input("Please enter RED value 0-255: "))
    if red < 0 or red > 255:
        print (invalid_msg)
        return
    green = int(input("Please enter GREEN value 0-255: "))
    if green < 0 or red > 255:
        print (invalid_msg)
        return
    blue = int(input("Please enter BLUE value 0-255: "))
    if blue < 0 or red > 255:
        print (invalid_msg)
        return
    val = (red << 16 ) + (green << 8) + blue
    final = str((hex(val)[2:]).upper())
    while len(final) < 6:
        final = "0" + final
    print ("Your hex is #"+final)
def hex_rgb():
    hex_val = input("Please enter HEX code: ")
    if len(hex_val) != 6:
        print ("Invalid input!")
        return
    else:
        hex_val = int(hex_val,16)
    two_hex_digits = 2 ** 8
    blue = hex_val%two_hex_digits
    hex_val = hex_val >> 8
    green = hex_val%two_hex_digits
    hex_val = hex_val >> 8
    red = hex_val%two_hex_digits
    print ("Red: "+ str(red)+" Green: "+str(green)+" Blue: "+str(blue))
def convert():
    while True:
        option = input('Enter 1 to convert RGB to HEX. Enter 2 to convert HEX to RGB. Enter X to Exit: ')
        if str(option) == "1":
            print ("RGB to Hex...")
            rgb_hex()
        elif str(option) == "2":
            hex_rgb()
        elif str(option) == "X" or str(option) == "x":
            print ("Exiting")
            break
        else:
            print ("Error")

convert()