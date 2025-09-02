import { useState } from "react";

export default function ReviewForm({ cityName, onSubmit }) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError(""); // reset error

    const token = localStorage.getItem("token");

    try {
      const res = await fetch(`http://localhost:5000/cities/${cityName}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ text }),
      });

      if (res.ok) {
        setText("");
        onSubmit();
      } else {
        const errMsg = await res.text();
        setError(errMsg || "Failed to submit review");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-3">
      <textarea
        className="form-control mb-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your review..."
        required
      />
      <button type="submit" className="btn btn-success">
        Submit Review
      </button>

      {error && <p className="text-danger mt-2">{error}</p>}
    </form>
  );
}