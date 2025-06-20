import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function CityPage() {
  const { cityName } = useParams();
  const [cityData, setCityData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/cities/${cityName}`)
      .then(res => res.json())
      .then(data => setCityData(data));
  }, [cityName]);

  function handleCreateReview(){
    //update city review in the DB

  }

  return (
    <>
      <Header />
      <div className="container border border-tertiary rounded mt-3 mb-3 p-4">
        <h3 className="text-center">Browsing reviews for {cityName}</h3>
        <div className="container">
          {cityData ? (
            <>
              <h3><strong>{cityData.description} </strong></h3>
              <button type="button" className="btn btn-primary " onClick={handleCreateReview}>
                Leave a Review for {cityName}
              </button>

              <h5 className="mt-4">Reviews:</h5>
              {cityData.reviews && cityData.reviews.length > 0 ? (
                <ul className="list-group">
                  {cityData.reviews.map((review, index) => (
                    <li key={index} className="list-group-item">
                      {review}
                    </li>
                  ))}
                </ul>
              ) : (<p>{cityName} does not have any reviews yet</p>)}
            </>
          ) : (<p>loading reviews...</p>)}
        </div>
      </div>
      <Footer />
    </>
  );
}