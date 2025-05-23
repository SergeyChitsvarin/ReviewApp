import { useNavigate } from "react-router-dom"
import Header from "../components/Header";
import Footer from "../components/Footer"
import CanadianMap from "../components/Map";

export default function MainPage() {
  const navigate = useNavigate();

  // User can look at the map of Canada and choose by province, what reviews they would like to see
  return (
          <>
          <Header />
          <CanadianMap/>
          <Footer />
          </>
  )
}

