import { useEffect, useState } from "react";
import Pagination from "./components/Pagination";

function App() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [perPage, setPerPage] = useState(0);

  const fetchItems = async (page: number) => {
    const response = await fetch(`http://localhost:3031/api/items?page=${page}`);
    const data = await response.json();

    setItems(data.data);
    setTotalItems(data.totalItems);
    setPerPage(data.perPage);
  };

  useEffect(() => {
    fetchItems(page);
  }, [page]); // re-fetch when page changes

  const onPageChange = (newPage: number) => {
    setPage(newPage);  // update state
  };

const totalPages = Math.ceil(totalItems / perPage)
console.log(totalItems,perPage)
  return (
    <div className="App">
      <h1>Pagination</h1>

      {items.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}

      {totalPages > 0 && <Pagination
        totalPages={totalPages}
        currentPage={page}
        onPageChange={onPageChange}
      />}
    </div>
  );
}

export default App;
