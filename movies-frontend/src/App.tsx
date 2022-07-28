import React from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes
} from "react-router-dom";
import './App.scss';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            path="*"
            element={<Navigate to="/movies" replace />}
          />
          <Route path="movies" element={<Home />} />
          <Route path="movies/:id" element={<MovieDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
