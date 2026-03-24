import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import MovieDetail from "./routes/MovieDetail";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:imdbId" element={<MovieDetail />} />
      </Routes>
    </>
  );
}

export default App;
