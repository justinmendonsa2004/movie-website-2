import "../CSS Style/cardslides.css";

function MovieSlider({ movies }) {
  return (
    <div className="slider">
      {movies.map((movie, index) => (
        <div className="slide" key={index}>
          <img src={movie.image} alt={movie.title} />
        </div>
      ))}
    </div>
  );
}

export default MovieSlider;
