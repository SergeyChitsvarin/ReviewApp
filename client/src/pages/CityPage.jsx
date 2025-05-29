import { useParams } from 'react-router-dom';

export default function CityPage() {

    // Passed on params from BrowseReviews page into a constant
    const { cityName } = useParams();

  return (
    <div className="p-2">
      <h1>This is {cityName}</h1>
      {/* fetch <cities/cityName> city data*/}
    </div>
  );
}