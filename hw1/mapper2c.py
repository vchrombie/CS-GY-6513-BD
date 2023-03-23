#!/usr/bin/env python
"""An advanced Mapper, using Python iterators and generators."""

import sys

def read_input(input, separator='\t'):
    for line in input:
        yield line.rstrip()

def main(separator='\t'):
    data = read_input(sys.stdin)
    for line in data:
        
        word, prob = line.split(separator, 1)
        ngrams = word.split(',')
        if len(ngrams) != 1:
            tag = 'B'
        else:
            tag = 'U'

        print('%s%s%s%s%s' % (word, separator, prob, separator, tag))

if __name__ == "__main__":
    main()
