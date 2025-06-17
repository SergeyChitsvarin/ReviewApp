import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/mainpage';
import CityPage from './pages/CityPage';
import CreateAccountPage from './pages/CreateAccountPage';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/browseReviews" element={<MainPage />} />
        <Route path="/cities/:cityName" element={<CityPage />} />
        <Route path="/createAccount" element={<CreateAccountPage />} />
      </Routes>
    </Router>
  );
}

export default App
