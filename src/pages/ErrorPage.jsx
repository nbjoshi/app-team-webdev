import { useNavigate } from "react-router-dom";
import "../styles/ErrorPage.css";

export default function ErrorPage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="error-page">
      <h1>404</h1>
      <p>Sorry, the page you're looking for cannot be accessed.</p>
      <button onClick={handleGoHome}>Go back to the shop</button>
    </div>
  );
}
