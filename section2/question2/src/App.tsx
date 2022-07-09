import useCategory from "./hooks/useCategory";
import genUniqueId from "./utils/genUniqueId";

function App() {
  const { categories, filter, handleFilter } = useCategory();
  return (
    <>
      <main className="px-3 py-2">
        <div className="rounded-md border px-2 py-1">
          <input
            type="text"
            className="w-full outline-none"
            placeholder="filter"
            onChange={(e) => handleFilter(e.target.value)}
            autoFocus
          />
        </div>
        <div>
          <ul className="py-1">
            {categories &&
              categories
                .filter((category) => category.toLowerCase().includes(filter))
                .map((category) => (
                  <li key={`${genUniqueId("category_")}`} className="px-2 py-1">
                    {category}
                  </li>
                ))}
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;
