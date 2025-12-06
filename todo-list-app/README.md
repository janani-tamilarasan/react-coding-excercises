# Getting Started with Todo List APPs

Implement a Todo List: Create a simple todo list application where users can add, edit, and delete tasks.


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### NOTE #########
1. Alway use key while using map
2. use strict equality ex: !== or ===
3. Update item in items(don't Mutating React state directly => Use map() to return a new array:)
     - Use map, check for id and change the newTitel
4. Delete item in items
     - Use filter to filter out the id which is going to delete and update new Items in list
5 Unique/Rando key - Use crypto.randomUUID
6. Alway trim the input value and reset to empty after added
7. Initial TodoList state didn't update on parent title changenitial TodoList state didn't update on parent title change
useEffect(() => {
  setNewTitle(title);
}, [title]);
