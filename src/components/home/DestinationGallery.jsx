import React, { useState } from "react";
import "./destinationGallery.css";

const destinationImages = [
  { imageName: "paris.jpeg", place: "Paris, France" },
  { imageName: "newyork.jpg", place: "New York City, USA" },
  { imageName: "tokyo.jpg", place: "Tokyo, Japan" },
  { imageName: "santorini.jpeg", place: "Santorini, Greece" },
  { imageName: "bali.jpeg", place: "Bali, Indonesia" },
  { imageName: "sydney.jpeg", place: "Sydney, Australia" },
  { imageName: "rome.jpeg", place: "Rome, Italy" },
  { imageName: "london.jpeg", place: "London, UK" },
  { imageName: "losangeles.jpeg", place: "Los Angeles, USA" },
  { imageName: "dubai.jpeg", place: "Dubai, UAE" },
  { imageName: "cairo.jpeg", place: "Cairo, Egypt" },
  { imageName: "berlin.jpeg", place: "Berlin, Germany" },
  { imageName: "nyc.jpeg", place: "New York City, USA" },
  { imageName: "amsterdam.jpeg", place: "Amsterdam, Netherlands" },
  { imageName: "barcelona.jpeg", place: "Barcelona, Spain" },
  { imageName: "lagos.jpeg", place: "Lagos, Nigeria" },
  { imageName: "boston.jpeg", place: "Boston, USA" },
  { imageName: "athens.jpeg", place: "Athens, Greece" },
  { imageName: "moscow.jpeg", place: "Moscow, Russia" },
  { imageName: "istanbul.jpeg", place: "Istanbul, Turkey" },
];

const DestinationGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next set of images
  const nextImages = () => {
    if (currentIndex + 5 < destinationImages.length) {
      setCurrentIndex(currentIndex + 5);
    }
  };

  // Function to go to the previous set of images
  const prevImages = () => {
    if (currentIndex - 5 >= 0) {
      setCurrentIndex(currentIndex - 5);
    }
  };

  // Slice the images array to show 5 images at a time
  const displayedImages = destinationImages.slice(currentIndex, currentIndex + 5);

  return (
    <div className="gallery-container">
      <h2>Famous Destinations</h2>
      <div className="image-gallery">
        {displayedImages.map((image, index) => (
          <div key={index} className="image-item">
            <img src={image.imageName} alt={image.place} />
            <p>{image.place}</p>
          </div>
        ))}
      </div>
      <div className="navigation-buttons">
        <button onClick={prevImages} disabled={currentIndex === 0}>
          Previous
        </button>
        <button
          onClick={nextImages}
          disabled={currentIndex + 5 >= destinationImages.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DestinationGallery;
