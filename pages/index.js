import { useState, useEffect } from "react";
import { getBreedsList } from "../utils/api";
import Navbar from "../components/Navbar";
import SearchBar from "../components/Searchbar";
import Card from "../components/Card";
import Loader from "../components/Loader";
import Error from "../components/Error";

const Home = () => {
  const [breeds, setBreeds] = useState([]);
  const [filteredBreeds, setFilteredBreeds] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBreeds = async () => {
      setLoading(true);
      try {
        const data = await getBreedsList();
        setBreeds(data);
        setFilteredBreeds(data);
      } catch (err) {
        setError("Failed to load breeds.");
      } finally {
        setLoading(false);
      }
    };
    fetchBreeds();
  }, []);

  useEffect(() => {
    setFilteredBreeds(
      breeds.filter((breed) =>
        breed.attributes.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, breeds]);

  return (
    <>
      <Navbar />
      <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <Loader />
        ) : error ? (
          <Error message={error} />
        ) : (
          filteredBreeds.map((breed) => <Card key={breed.id} breed={breed} />)
        )}
      </div>
    </>
  );
};

export default Home;
