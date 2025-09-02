import { useState } from "react";

export default function ReviewForm({ cityName, onSubmit }) {
  const [reviewText, setReviewText] = useState('');

  const submitReview = async () => {
    const token = localStorage.getItem('token');
    const res = await fetch(`http://localhost:5000/cities/${cityName}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ review: reviewText })
    });

    if (res.ok) {
      setReviewText('');
      onSubmit(); // refetch or update UI
    }
  };

  return (
    <div className="mt-3">
      <textarea
        className="form-control mb-2"
        placeholder="Write your review..."
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
      />
      <button onClick={submitReview} className="btn btn-success">Create Review</button>
    </div>
  );
}
