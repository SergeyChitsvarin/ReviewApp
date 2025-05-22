import { useNavigate } from "react-router-dom"
import Header from "../components/Header";
import Footer from "../components/Footer"
import CanadianMap from "../components/Map";

export default function MainPage() {
  const navigate = useNavigate();
  
  // user redirected to login page and logged out of account
  function HandleLogOut()
  {
    navigate('/');

  }

  // User can look at the map of Canada and choose by province, what reviews they would like to see
  return (
          <>
          <Header />
          <CanadianMap/>
          <button onClick={HandleLogOut}>Log Out</button>
          <Footer />
          </>
  )
}

