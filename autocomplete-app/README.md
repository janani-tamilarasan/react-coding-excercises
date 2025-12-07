# README.md — Autocomplete App

1. Project Goal

	- Build a simple Autocomplete / Auto-suggestion component in React:

	- User types text

	- Filter list of countries

	- Show suggestions

	- Highlight matching text

	- Avoid dangerouslySetInnerHTML

* Mistakes / Problems You Had
	1. Incorrect JSX inside map()
		You forgot to return the <div> inside map.

	2. Incorrect function name (toLoweCase)
		You wrote toLoweCase() instead of correct toLowerCase().

	3. Used dangerouslySetInnerHTML idea (unsafe)
		You initially thought of using raw HTML — not safe or needed.
		use Regrex and split

    4. Extra internal function fetchFilteredCountries
        Not required; better inline inside useEffect.

    5. No trimming or empty string handling
		Should return empty array, not match everything when searchText == "".

* Key Takeaways
1. Always RETURN inside .map()
   filtered.map(item => <div>{item}</div>)
2. Never use dangerouslySetInnerHTML unless required
   Better approach: Split text + wrap match with <strong>.
3. Avoid unnecessary state
4. Use consistent file/component naming
