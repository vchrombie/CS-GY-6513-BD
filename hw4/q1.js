// Write MongoDB queries for:

use vt2182

print("1. Count the number of documents in the collection.")
print(db.restaurants.count())

print("2. Display all the documents in the collection.")
db.restaurants.find().forEach(printjson)

print("3. Display: restaurant_id, name, borough and cuisine for all the documents.")
db.restaurants.find({}, {_id: 1, restaurant_id: 1, name: 1, borough: 1, cuisine: 1}).forEach(printjson)

print("4. Display: restaurant_id, name, borough and cuisine, but exclude field _id, for all the documents in the collection.")
db.restaurants.find({}, {_id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1}).forEach(printjson)

print("5. Display: restaurant_id, name, borough and zip code, exclude the field _id for all the documents in the collection.")
db.restaurants.find({}, {_id: 0, restaurant_id: 1, name: 1, borough: 1, "address.zipcode": 1}).forEach(printjson)

print("6. Display all the restaurants in the Bronx.")
db.restaurants.find({"borough": "Bronx"}).forEach(printjson)

print("7. Display the first 5 restaurants in the Bronx.")
db.restaurants.find({"borough": "Bronx"}).limit(5).forEach(printjson)

print("8. Display the second 5 restaurants (skipping the first 5) in the Bronx.")
db.restaurants.find({"borough": "Bronx"}).skip(5).limit(5).forEach(printjson)

print("9. Find the restaurants with a score more than 85.")
db.restaurants.find({"grades.score": {"$gt": 85}}).forEach(printjson)

print("10. Find the restaurants that achieved a score, more than 80 but less than 100.")
db.restaurants.find({"grades": {$elemMatch: {"score": {"$gt": 80, "$lt": 100}}}}).forEach(printjson)

print("11. Find the restaurants which locate in longitude value less than equal to -73.90")
db.restaurants.find({"address.coord.1":{"$lt":-73.84}},{"_id":0,"name":1})

print("12. Find the restaurants that do not prepare any cuisine of 'American' and their grade score more than 70 and longitude less than -65.754168.")
db.restaurants.find({"$and": [
    {"cuisine": {"$ne": "American "}},
    {"grades.score": {"$gt": 70}},
    {"address.coord.1": {"$lt": -65.754168}}
   ]}).forEach(printjson)
   
print("13. Find the restaurants which do not prepare any cuisine of 'American' and achieved a score more than 70 and located in the longitude less than -65.754168. (without using $and operator).")
db.restaurants.find({
    "cuisine": {"$ne" : "American "},
    "grades.score": {"$gt": 70},
    "address.coord.1": {"$lt": -65.754168}
   }).forEach(printjson)
      
print("14. Find the restaurants which do not prepare any cuisine of 'American ' and achieved a grade point 'A' and not in the borough of Brooklyn, sorted by cuisine in descending order.")
db.restaurants.find({"$and": [
 {"cuisine": {"$ne": "American "}},
 {"grades.grade": "A"},
 {"borough": {"$ne": "Brooklyn"}}
]}).sort({"cuisine": -1}).forEach(printjson)

print("15. Find the restaurant Id, name, borough and cuisine for those restaurants which contain 'Wil' as first three letters for its name.")
db.restaurants.find({"name": {$regex: /^Wil.*/}}, {_id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1}).forEach(printjson)

print("16. Find the restaurant Id, name, borough and cuisine for those restaurants which contain 'ces' as last three letters for its name.")
db.restaurants.find({"name": {$regex: /.*ces$/}}, {_id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1}).forEach(printjson)

print("17. Find the restaurant Id, name, borough and cuisine for those restaurants which contain 'Reg' as three letters somewhere in its name.")
db.restaurants.find({"name": {$regex: /Reg/}}, {_id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1}).forEach(printjson)

print("18. Find the restaurants which belong to the borough Bronx and prepared either American or Chinese dish.")
db.restaurants.find({"borough": "Bronx", "cuisine": {$in: ["American ", "Chinese"]}}).forEach(printjson)

print("19. Find the restaurant Id, name, borough and cuisine for those restaurants which belong to the boroughs of Staten Island or Queens or Bronx or Brooklyn.")
db.restaurants.find({"borough": {$in: ["Staten Island", "Queens", "Bronx", "Brooklyn"]}}, {_id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1}).forEach(printjson)

print("20. Find the restaurant Id, name, borough and cuisine for those restaurants which are not belonging to the borough Staten Island or Queens or Bronx or Brooklyn.")
db.restaurants.find({"borough": {$nin: ["Staten Island", "Queens", "Bronx", "Brooklyn"]}}, {_id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1}).forEach(printjson)

print("21. Find the restaurant Id, name, borough and cuisine for those restaurants which achieved a score below 10.")
db.restaurants.find({"grades.score": {"$lt": 10}}, {_id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1}).forEach(printjson)

print("22. Find the restaurant Id, name, borough and cuisine for those restaurants which prepared dish except 'American' and 'Chinese' or restaurant's name begins with letter 'Wil'.")
db.restaurants.find({"$or": [
 {"cuisine": {$nin: ["American ", "Chinese"]}},
 {"name": /^Wil/}
]}, {_id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1}).forEach(printjson)

print("23. Find the restaurant Id, name, and grades for those restaurants which achieved a grade of 'A' and scored 11 on an ISODate '2014-08-11T00:00:00Z' among many of survey dates.")
db.restaurants.find({"grades" : {$elemMatch: {"date": ISODate("2014-08-11T00:00:00Z"), "grade": "A", "score": 11}}}, {_id: 0, restaurant_id: 1, name: 1, grades: 1}).forEach(printjson)

print("24. Find the restaurant Id, name and grades for those restaurants where the 2nd element of grades array contains a grade of 'A' and score 9 on an ISODate '2014-08-11T00:00:00Z'.")
db.restaurants.find({"$and": [
 {"grades.1.grade": "A"},
 {"grades.1.score": 9},
 {"grades.1.date": ISODate("2014-08-11T00:00:00Z")}
]}, {_id: 0, restaurant_id: 1, name: 1, grades: 1}).forEach(printjson)

print("25. Find the restaurant Id, name, address and geographical location for those restaurants where 2nd element of coord array contains a value which is more than 42 and up to 52.")
db.restaurants.find({"$and": [
 {"address.coord.1": {"$gt": 42}},
 {"address.coord.1": {"$lte": 52}}
]}, {_id: 0, restaurant_id: 1, name: 1, address: 1}).forEach(printjson)
