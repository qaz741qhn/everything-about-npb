import './App.css';
import Home from "./Home.js"
import TeamNews from "./TeamNews.js"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/teams/:teamName" element={<TeamNews />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
