import React from "react";
import myImage from '../Assets/Images/404-error-cloudways-landing-page-1024x534.png';
import './Error.css'; // Import the CSS file

export default function Error() {
  return (
    <div className="error-container">
      <div className="error-message">
        <h1>404</h1>
        <h2>Page Not Found</h2>
      </div>
      <img className="error-image" src={myImage} alt="404 Error" />
    </div>
  );
}
