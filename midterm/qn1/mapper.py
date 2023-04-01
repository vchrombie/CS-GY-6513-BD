#!/usr/bin/env python
"""An advanced Mapper, using Python iterators and generators."""

import sys

def main(separator='\t'):
    """Read lines from standard input and prepend '1' to each line."""
    
    # input comes from STDIN (standard input)
    for line in sys.stdin:
        print("1{}{}".format(separator, line))

# how to test locally in bash/linus: cat <input> | python mapper.py
if __name__ == "__main__":
    main()
