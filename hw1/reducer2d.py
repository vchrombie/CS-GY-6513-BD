#!/usr/bin/env python
"""An optimized Reducer, using Python iterators and generators."""

import sys

def read_mapper_output(input, separator='\t'):
    for line in input:
        yield line.rstrip().split(separator, 2)

def main(separator='\t'):
    data = read_mapper_output(sys.stdin, separator=separator)

    current_word = None
    current_count = 0
    current_flag = None

    for word, count, flag in data:
        try:
            count = float(count)
        except ValueError:
            continue

        if len(word.split(",")) == 2:
            print('%s%s%.2f%s%s' % (word, separator, count, separator, 'B'))
            if current_word == word.split(",")[0] and current_flag == 'U':
                count = current_count
                print('%s%s%.2f%s%s' % (word, separator, count, separator, 'U'))
        else:
            current_count = count
            current_word = word
            current_flag = flag

if __name__ == "__main__":
    main()
