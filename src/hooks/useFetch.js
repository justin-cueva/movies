import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [movieData, setMovieData] = useState(null);

  const getData = async (url) => {
    setError(null);
    setMovieData(null);
    try {
      const response = await fetch(url);

      const data = await response.json();
      if (data.errorMessage) throw new Error(data.errorMessage);

      const filteredData = {
        errorMessage: data.errorMessage,
        title: data.title,
        year: data.year,
        plot: data.plotShort.plainText.split("\n")[0],
      };
      setMovieData(filteredData);
    } catch (err) {
      setError(err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getData(url);
  }, []);

  return { error, isLoading, movieData };
};

export default useFetch;
