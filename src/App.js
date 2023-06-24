import { Route, Routes } from "react-router-dom";
import "./App.css"
import Landing from "./pages/Landing";
import MovieList from "./pages/MovieList";
import SingleMovie from "./pages/SingleMovie";
import Error from "./pages/Error";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/movies/:search" element={<MovieList/>} />
      <Route path="/movie_detail/:id" element={<SingleMovie/>} />
      <Route path="*" element={<Error/>}  />
    </Routes>
    </>
  );
}

export default App;
