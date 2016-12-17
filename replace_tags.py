#!/usr/bin/python3
import fileinput


filePath = "diagram/to.svg"

# Read in the file
fo = open(filePath, "r")
inputFile = fo.read()

first_file = inputFile


# Replacement matrix
elements = [ 'd="M1107.17 148.92c0 44.18-35.46 80-79.2 80s-79.2-35.82-79.2-80c0-44.2 35.46-80 79.2-80s79.2 35.8 79.2 80z"',
             'd="M351.77 467.92c0 44.18-35.46 80-79.2 80s-79.2-35.82-79.2-80c0-44.2 35.46-80 79.2-80s79.2 35.8 79.2 80z"']
element_count = 1

# Replace the target string
for element in elements:
    inputFile = inputFile.replace(element, element + ' id="element' + str(element_count) + '"')
    element_count +=1

if first_file == inputFile:
    print("equal")
else:
    print("not equal!")

# Write the file out again
fo = open(filePath, 'w')
fo.write(inputFile)

fo.close()