# Homework 1

## Problem 1: HDFS

Running any version of Hadoop (HPC Dataproc, docker, AWS, or any), submit screen grabs (a picture in jpg or other suitable format) of the following: a) create a directory in HDFS with this format: netid-bd23 (e.g. mine will be ‘jcr365-bd23’).
1. Submit a screen grab of the output of a Hadoop file listing showing your home directory and your new directory in it.
2. Create a directory for the homework problem 1.2 (trigram count), and extract all input files into it. Call this directory as follows: hw1.2, e.g. mine will be hw1.2.  Submit a picture of directory listings or otherwise show the input files in it.

## Problem 2: Language Models with MapReduce

Write your own code in your language of choice, but your code MUST be Hadoop MapReduce.
For Python, use Hadoop streaming. Submit the result and code.

Compute the Bigram LM, of the form “word1, word2”, P(word2 | word1)

```
P(w2 | w1)
= P(w1 w2) / P(w1)
= count(w1 w2) * total(bigrams) / count(w1) * total(unigrams)
```

## Problem 3: Extra Credit

Using the solution of problem 2, find the x below (print the word in this sequence with the highest probability)

united states \_\_\_x\_\_\_

For P( x | united states) = p , find the x with the highest p
