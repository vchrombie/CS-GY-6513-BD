# Homework 3

1. Dataset: [`BreadBasket_DMS.csv`](./BreadBasket_DMS.csv) \
   Solve: What is the most popular (most sold) between the 8:00AM and 8:59AM for each day?

2. Dataset: [`BreadBasket_DMS.csv`](./BreadBasket_DMS.csv) \
   Solve: What is the most common item bought along (items bought in the same transaction) with “Brownie”?

3. Dataset: [`Restaurants_in_Durham_County_NC.csv`](./Restaurants_in_Durham_County_NC.csv) \
   Solve: How many years are represented in this dataset? \
   NOTE: This file is colon delimited (not comma)

4. Dataset: [`Restaurants_in_Durham_County_NC.csv`](./Restaurants_in_Durham_County_NC.csv) \
   Solve: Show the type and count of restaurant opened during the 90’s (1990-1999 inclusive). \
   NOTE: `type`=`Rpt_Area_Desc`

5. Dataset: [`populationbycountry19802010millions.csv`](./populationbycountry19802010millions.csv) \
   Solve: For region, compute the percentage change in population, year over year. \
   NOTE: Note the year 1980 will not have a preceding year. For each year, display the region with the top population decrease

6. Dataset: [`romeo-juliet-pg1777.txt`](./romeo-juliet-pg1777.txt) \
   Solve: Do word count in pyspark. \
   NOTE: Ignore punctuation, and normalize to lower case. Accept only the characters in this set: `[0-9a-zA-Z]`

7. Dataset: [`Restaurants_in_Durham_County_NC.csv`](./Restaurants_in_Durham_County_NC.csv), [`durham-nc-foreclosure-2006-2016.json`](./durham-nc-foreclosure-2006-2016.json) \
   Solve: For each restaurant (`Restaurants_in_Durham_County_NC`) with `status`=`ACTIVE` and `rpt_area_desc`=`Food Service`, show the number of foreclosures (`durham-nc-foreclosure-2006-2016`) within a radius of 1 mile of the restaurant’s coordinates. \
   NOTE: Use any assumption for the shape of Earth or you can use the [Haversine distance](https://pypi.org/project/haversine/)

---

# Solutions

[hw3.ipynb](./hw3.ipynb)

https://csgy-6513-spring.rcnyu.org/
