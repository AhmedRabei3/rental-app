import "./styles.css";
import { Link } from "react-router-dom";

import React from "react";

function NotFound() {
  return (
    <section className="not-found">
      <h1 className="app-name">Rental world</h1>
      <div className="not-found-title">404</div>
      <h1 className="not-found-text">Page not found</h1>
      <Link to="/" className="not-found-link">
        Go to home page
      </Link>
    </section>
  );
}

export default NotFound;
