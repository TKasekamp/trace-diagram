#!/usr/bin/python3
import fileinput


filePath = "diagram/to.svg"

# Read in the file
fo = open(filePath, "r")
inputFile = fo.read()

first_file = inputFile


# Replacement matrix
# replaceMatrix = [0][0]


# Replace the target string
inputFile = inputFile.replace('"#c92d39"', '"#c92d39" id="element1"')

if first_file == inputFile:
    print("equal")
else:
    print("not equal!")

# Write the file out again
fo = open(filePath, 'w')
fo.write(inputFile)

fo.close()