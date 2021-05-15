import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import axios from "./axios";
import "./Row.css";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLarge }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movies);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            onClick={() => handleClick(movie)}
            key={movie.key}
            className="row__poster"
            src={`${base_url}${
              isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          ></img>
        ))}
      </div>
      {trailerUrl && <YouTube vidoeId="Lr5d4mvG7BDFsJjQ" opts={opts} />}
    </div>
  );
}

export default Row;
