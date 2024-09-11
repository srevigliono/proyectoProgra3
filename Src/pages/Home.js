import { useState } from "react";
import PopularesGrid from "../components/PopularesGrid/PopularesGrid";

const Home = () => {
  const [query, setQuery] = useState("");

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <main>
        <header>
          <input
            type="text"
            placeholder="Buscar películas..."
            value={query}
            onChange={handleSearchChange}
            className="search-input"
          />
        </header>

        <PopularesGrid searchQuery={query} />
      </main>
    </>
  );
};

export default Home;
