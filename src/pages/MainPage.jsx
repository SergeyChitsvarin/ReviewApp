import Header from "../components/Header";
import Footer from "../components/Footer"
import CanadianMap from "../components/Map";

export default function MainPage() {

  // User can look at the map of Canada and choose reviews based on the province.
  return (
          <>
          <Header />
          <div className="container border border-tertiary rounded mt-3 mb-3">
            <div class="container">
              <h3 className="text-center"> Please Select a Canadian city to browse reviews</h3>
              <CanadianMap/>
            </div>
          </div>
          <Footer />
          </>
  )
}

