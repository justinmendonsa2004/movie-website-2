import React from "react";
import "../CSS Style/moviecard.css";
import movieImg from "../assets/movie.jpg";
const MovieCard = () => {
  return (
    <div className="movie-card">
      <img src={movieImg} alt="Movie Poster" className="movie-img" />

      <div className="movie-content">
        <h3 className="movie-title">3 idiots</h3>
        <p className="movie-desc">
          3 Idiots is a 2009 Bollywood film directed by Rajkumar Hirani, which
          follows the journey of three engineering students who challenge the
          rigid educational system and find their own paths to success and
          happiness. The film explores themes of friendship, the pressures of
          academic life, and the importance of following one’s passion.{" "}
        </p>

        <div className="movie-footer">
          <span className="rating">⭐ 8.8</span>
          <button className="watch-btn">Watch Now</button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
