#!/usr/bin/env python
"""An advanced Reducer, using Python iterators and generators."""

from itertools import groupby
from operator import itemgetter
import sys


def read_mapper_output(input, separator='\t'):
    for line in input:
        yield line.rstrip().split(separator, 1)


def main(separator='\t'):
    data = read_mapper_output(sys.stdin, separator=separator)
    uni_count = 0
    bi_count = 0
    current_word = None
    current_count = 0
    
    for word, count in data:
        try:
            count = int(count)
        except ValueError:
            continue

        if current_word == word:
            current_count += count
        else:
            if current_word:
                if len(current_word.split(',')) == 1:
                    prb = current_count / uni_count
                else:
                    prb = current_count / bi_count
                print('%s%s%.2f' % (current_word, separator, prb))
            current_count = count
            current_word = word
            if len(current_word.split(',')) == 1:
                uni_count += 1
            else:
                bi_count += 1

    if current_word == word:
        if len(current_word.split(',')) == 1:
            prb = current_count / uni_count
        else:
            prb = current_count / bi_count
        print('%s%s%.2f' % (current_word, separator, prb))


if __name__ == "__main__":
    main()