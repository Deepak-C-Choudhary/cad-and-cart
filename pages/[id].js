import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getBreedDetails } from "../utils/api";
import Navbar from "../components/Navbar";
import DetailsCard from "../components/DetailsCard";
import Loader from "../components/Loader";
import Error from "../components/Error";

const BreedDetails = () => {
  const [breed, setBreed] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) return;
    getBreedDetails(id)
      .then(setBreed)
      .catch(() => setError("Failed to fetch breed details."))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-8">
        {loading ? <Loader /> : error ? <Error message={error} /> : <DetailsCard breed={breed} />}
      </div>
    </>
  );
};

export default BreedDetails;
