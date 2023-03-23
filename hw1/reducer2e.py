#!/usr/bin/env python
"""An advanced Reducer, using Python iterators and generators."""

from operator import itemgetter
import sys

def read_mapper_output(input, separator='\t'):
    for line in input:
        yield line.rstrip().split(separator, 2)

def main(separator='\t'):
    data = read_mapper_output(sys.stdin, separator=separator)

    current_word = None
    current_count = 0.0

    for word, count, flag in data:
        count = float(count)

        if flag == 'U':
            print('%s%s%.3f' % (word, separator, float(current_count / count)))
        else:
            current_count = count

        if current_word == word:
            if flag == 'U':
                current_count = count
            else:
                print('%s%s%.3f' % (word, separator, float(current_count / count)))
        else:
            current_word = word
            current_count = count

if __name__ == "__main__":
    main()
