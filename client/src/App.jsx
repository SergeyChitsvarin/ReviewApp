import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/mainpage';
import CityPage from './pages/CityPage';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/browseReviews" element={<MainPage />} />
        <Route path="/cities/:cityName" element={<CityPage />} />
      </Routes>
    </Router>
  );
}

export default App
