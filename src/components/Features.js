import React from "react";
import "../App.css";

const Features = () => {
  return (
    <section className="features" id="features">
      <div className="container">
        <h2>Our Features</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Feature 1</h3>
            <p>Explanation of Feature 1.</p>
          </div>
          <div className="feature-item">
            <h3>Feature 2</h3>
            <p>Explanation of Feature 2.</p>
          </div>
          <div className="feature-item">
            <h3>Feature 3</h3>
            <p>Explanation of Feature 3.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
