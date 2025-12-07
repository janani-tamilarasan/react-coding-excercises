import express from 'express'
import cors from "cors";

const app = express();

app.use(cors());

app.listen(3031);

export const ITEMS = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Item ${i + 1}`,
}));

const ITEMS_PER_PAGE = 10;

app.get("/api/items",(request,response) =>{
	const page = Number(request.query.page) || 1;
	const startIndex = (page - 1) * ITEMS_PER_PAGE;
	const endIndex = (page) * ITEMS_PER_PAGE;

	const items = ITEMS.slice(startIndex, endIndex);

	return response.json({
		totalItems: ITEMS.length,
		perPage: ITEMS_PER_PAGE,
		data: items
	})
})