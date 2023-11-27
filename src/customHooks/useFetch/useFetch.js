import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [fetchDAta, setFetchData] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFetchData(data))
      .catch((error) => setError(error));
  }, [url]);

  return { fetchDAta, error };
};

export default useFetch;
