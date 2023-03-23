#!/usr/bin/env python
"""An advanced Mapper, using Python iterators and generators."""

import sys
import re

regex_pattern = re.compile('[^A-Za-z0-9]+')

def preprocess(line_input):
    line_input = re.sub(regex_pattern, ' ', line_input.lower())
    return line_input

def read_input(input):
    for line in input:
        if (line == '\n'):
            pass
        else:
            line = preprocess(line)
        yield line.split()

def main(separator='\t'):
    data = read_input(sys.stdin)
    for words in data:

        for i in range(len(words) - 1):
            print('%s%s%d' % (words[i], separator, 1))
            print('%s,%s%s%d' % (words[i], words[i + 1], separator, 1))
        print('%s%s%d' % (words[len(words) - 1], separator, 1))

if __name__ == "__main__":
    main()
