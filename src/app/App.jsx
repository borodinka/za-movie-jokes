import { Route, Routes } from "react-router-dom";
import MoviesList from "src/features/MoviesList";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<MoviesList />} />
      </Route>
    </Routes>
  );
}

export default App;
