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

  return (
    <>
      <Header />
      <div className="container border border-tertiary rounded mt-3 mb-3">
        <h3 className="text-center">Browsing reviews for {cityName}</h3>
        <div className="container">
          <h1>{cityData?.name}</h1>
          <p>{cityData?.message}</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
