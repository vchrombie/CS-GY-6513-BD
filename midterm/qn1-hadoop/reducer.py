#!/usr/bin/env python
"""An advanced Reducer, using Python iterators and generators."""

import random
import sys


def main(separator='\t', k=50000):
    """Read lines from standard input and sample k lines uniformly at random."""
    reservoir = []
    i = 1

    # input comes from STDIN (standard input)
    for line in sys.stdin:
        data = line.strip().split(separator, 1)
        if data[0] != '1':
            continue
        new_line = ''
        if len(data) == 2:
            new_line = data[1]

        if i <= k:
            reservoir.append(new_line)
        else:
            j = random.randint(1, i)
            if j <= k:
                reservoir[j - 1] = new_line
        i += 1

    for line in reservoir:
        print(line, end='')


if __name__ == "__main__":
    main()
