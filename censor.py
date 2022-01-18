def censor(text, word):
    temp =  text.split()
    print (temp)
    place = 0
    for item in temp:
        if item == word:
            temp[place] = "*"*(len(word))
        place+=1
    return " ".join(temp)

print (censor("hey hey hey", "hey"))
print (censor("The quick brown fox jumps over the lazy dog.", "jumps"))