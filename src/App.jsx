import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz';
import Ranking from './pages/Ranking/Ranking'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quiz/:categoria" element={<Quiz />} />
                <Route path="/ranking" element={<Ranking />} />
            </Routes>
        </Router>
    );
}

export default App;
