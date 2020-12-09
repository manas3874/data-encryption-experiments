# Write a program to form a new string by exchanging first and last character of the original string

initialString = "tripathi"


def exchanger(string):
    arrOfLetters = []
    for letter in string:
        arrOfLetters.append(letter)
    temp = arrOfLetters[0]
    arrOfLetters[0] = arrOfLetters[len(arrOfLetters) - 1]
    arrOfLetters[len(arrOfLetters) - 1] = temp
    return "".join(arrOfLetters)


print("problem 1 : ", exchanger(initialString))


# Write a program to reverse a given number using a while loop

givenNumber = 123456


def reverseUsingWhile(number):
    string = str(number)
    counter = 1
    dummyArray = []
    while (counter <= len(string)):
        dummyArray.append(string[len(string) - counter])
        counter += 1
    return "".join(dummyArray)


print("problem 2 : ", reverseUsingWhile(givenNumber))

# write a program to print 2nd maximum and 2nd minimum number in the list using list sort()

list = [3, 6, 1, 8, 0, 4, 7, 2, 16]


def findSecondMinMax(arr):
    arr.sort()
    return [arr[1], arr[len(arr)-2]]


print("problem 3 : ", findSecondMinMax(list))

# write a program to print the numbers which are not multiple of 5 in the given list using list append()

listOfNumbers = [2, 7, 5, 15, 9, 18, 10, 22, 15]  # 2,7,9,18,22


def noMultiplesOfFive(arr):
    dummyArray = []
    for item in arr:
        if (item % 5 == 0):
            continue
        else:
            dummyArray.append(item)
    return dummyArray


print("problem 4 : ", noMultiplesOfFive(listOfNumbers))

# Write a function called add_int that will take two integers as input and return its sum as output


def summer(intOne, intTwo):
    return (intOne+intTwo)


print("problem 6 : ", summer(2, 3))

# write a Python program to create a dictionary


def dictionaryCreator(arrOfKeyValuePairs):
    dummyDictionary = {}
    for item in arrOfKeyValuePairs:
        if (item[0] not in dummyDictionary):
            dummyDictionary[item[0]] = item[1]
    return dummyDictionary


dict = dictionaryCreator([["apple", "fruit"], ["car", "vehicle"]])
print("problem 7 : ", dict)

# write a Python program to print keys and values of the dictionary using dict.keys(), dict.items()


def getKeys(dict):
    return dict.keys()


def getValues(dict):
    return dict.values()


print("problem 8 : ", getKeys(dict))
print("problem 8 : ", getValues(dict))
