import Header from '../components/Header';
import Footer from '../components/Footer';
import ReviewForm from '../components/ReviewForm';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function CityPage() {
  const { cityName } = useParams();
  const [cityData, setCityData] = useState(null);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const navigate = useNavigate();

  // function to fetch city and reviews
  const fetchCityData = async () => {
    const res = await fetch(`http://localhost:5000/cities/${cityName}`);
    const data = await res.json();
    setCityData(data);
  };

  useEffect(() => {
    fetchCityData();
  }, [cityName]);

  function handleCreateReview() {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/'); //to login page
    } else {
      setShowReviewForm(true);
    }
  }

  return (
    <>
      <Header />
      <div className="container border border-tertiary rounded mt-3 mb-3 p-4">
        <h3 className="text-center">Browsing reviews for {cityName}</h3>
        <div className="container">
          {cityData ? (
            <>
              <h3><strong>{cityData.description}</strong></h3>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleCreateReview}
              >
                Leave a Review for {cityName}
              </button>

              {showReviewForm && (
                <ReviewForm
                  cityName={cityName}
                  onSubmit={() => {
                    setShowReviewForm(false);
                    fetchCityData();
                  }}
                />
              )}

              <h5 className="mt-4">Reviews:</h5>
              {cityData.reviews && cityData.reviews.length > 0 ? (
                <ul className="list-group">
                  {cityData.reviews.map((review, index) => (
                    <li key={index} className="list-group-item">
                      <strong>{review.name}</strong>: {review.text}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>{cityName} does not have any reviews yet</p>
              )}
            </>
          ) : (
            <p>Loading reviews...</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
