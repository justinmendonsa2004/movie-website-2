import Navbar from "./components/Navbar";
import MovieCard from "./components/moviecards";
import MovieSlider from "./components/cardslides";

const movies = [
  {
    title: "Avengers",
    image: "https://via.placeholder.com/300x400?text=Avengers",
  },
  {
    title: "Batman",
    image: "https://via.placeholder.com/300x400?text=Batman",
  },
  {
    title: "Spiderman",
    image: "https://via.placeholder.com/300x400?text=Spiderman",
  },
  {
    title: "Joker",
    image: "https://via.placeholder.com/300x400?text=Joker",
  },
];

function App() {
  return (
    <div style={{ background: "#000", minHeight: "100vh" }}>
      <Navbar />

      <h2 style={{ color: "white", padding: "20px" }}>🔥 Trending</h2>
      <MovieSlider movies={movies} />

      <h2 style={{ color: "white", padding: "20px" }}>🎥 Movies</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          padding: "20px",
        }}
      >
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
