import { useState } from "react";
import PopularesGrid from "../components/HomeMoviesGrid/HomeMoviesGrid";

const Home = () => {
  const [query, setQuery] = useState("");

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <main>
        
        <header>

        </header>

        <PopularesGrid searchQuery={query} />
      </main>
    </>
  );
};

export default Home;
