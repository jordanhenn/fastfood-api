# Fast Food Evolved API
https://stormy-tundra-10933.herokuapp.com/api

# Fast Food Client
https://fastfood-client.jordanhenn.vercel.app

# Client REPO
https://github.com/jordanhenn/fastfood-client

## Endpoints

### GET /food
Returns all fast food items in ascending order by price

### GET /food/items
Returns a specific fast food item. Must include a query for the item_name. 

### GET /food/buns
Returns a specific fast food bun. Must include a query for the bun_name. 

### GET /food/buns/:bun_id
Returns a specific fast food bun by id.

### GET /food/sauces
Returns a specific fast food sauce. Must include a query for the sauce_name. 

### GET /food/sauces/:sauce_id
Returns a specific fast food sauce by id. 

### GET /food/fillings
Returns a specific fast food filling. Must include a query for the filling_name. 

### GET /food/fillings/:filling_id
Returns a specific fast food filling by id. 

### GET /creations
Returns an array of all user submitted creations.

### GET /creations/:creation_id
Returns a user creation by id. 

### POST /creations
Posts user's creation to the database. 

### PUT /creations/:creation_id
Updates the rating of a user creation by id. Must include the new rating and new number of total ratings in the request body. 

### Tech Used
Express, PostgreSQL, Javascript, Node

## Summary
Fast Food Evolved is an app where you create fast food hybrids using items form different restaurantes. User starts by selecting buns, sauces, and fillings using carousel selections, finalizes their creation, calculates the price, and then has the option to post it to the site where it can be shared with other users or on their social media pages. 