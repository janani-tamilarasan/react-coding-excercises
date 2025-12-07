# pagination using express and react

 - Client => React Js
    - Display the items
     - Diplay the pagination with prev and next
 - Server -> Express
    - Used express (install express and use cros)
    - http://localhost:3031/api/items?page=${page} 
        -> response -> return response.json({
		totalItems: ITEMS.length,
		perPage: ITEMS_PER_PAGE,
		data: items
	})


- Point to remember
 - Always create client and server
 - For express, you use cros
 - send as josn -> response.json({__args })
 - for limit and offset use slice
 - Client -> totalPages -> Math.ceil(totalitems/perpage)


 NOTE:
 [...Array(totalPages)]

The ... (spread operator) turns empty slots into real elements.

So:

[...Array(5)]


becomes:

[undefined, undefined, undefined, undefined, undefined]


Now it can be .map().

3️⃣ .map((_, index) => { ... })
_ = value → always undefined → so we ignore i
index = 0,1,2,3,4
