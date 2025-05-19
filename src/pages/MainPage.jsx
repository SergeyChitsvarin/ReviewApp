import { useNavigate } from "react-router-dom"
import Header from "../components/Header";
import Footer from "../components/Footer"

export default function MainPage() {
  const navigate = useNavigate();
  
  // user redirected to login page and logged out of account
  function HandleLogOut()
  {
    navigate('/');

  }

  return (
          <>
          <Header />
          <h1>This is the main page wehere you can browse reviews for buissinesses in your area
            once logged in.
          </h1>
          <button onClick={HandleLogOut}>Log Out</button>
          <Footer />
          </>
  )
}

