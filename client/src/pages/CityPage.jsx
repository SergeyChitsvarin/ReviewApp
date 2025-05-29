import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';

export default function CityPage() {

    // Passed on params from BrowseReviews page into a constant
    const { cityName } = useParams();

  return (
    <>
    <Header/>

    <div className="container border border-tertiary rounded mt-3 mb-3">
      <h3 className="text-center">Browsing reviews for {cityName}</h3>
      <div className='container'>
            <h1>Hi</h1>
            {/* fetch <cities/cityName> city data*/}
      </div>

    </div>

    <Footer/>
    </>
  );
}