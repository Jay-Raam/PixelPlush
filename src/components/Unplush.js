// UnsplashImage.jsx
import React, { useState, useEffect } from "react";
import SearchForm from "./ui/SearchForm";
import ImageCard from "./ui/ImageCard";
import SelectedImageModal from "./ui/SelectedImageModal";
import "./anime.css";
import CopyrightPage from "./ui/CopyRight";

const UnsplashImage = () => {
  const [imageData, setImageData] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true);
      setError(null);
      try {
        let apiUrl = `https://api.unsplash.com/photos/random/?client_id=jEemOE1gKbjCZgq7QqTrE6qjihorxfNOVdrRv2RF8rE&count=40`;

        if (query) {
          apiUrl += `&query=${encodeURIComponent(query)}`;
        }

        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setImageData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [query]);

  const handleSearch = (queryValue) => {
    setQuery(queryValue);
  };

  const handleSetImage = (image) => {
    setSelectedImage(image);
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="unsplash">
        <div className="container">
          <SearchForm onSearch={handleSearch} />
          {isLoading && <div className="loader"></div>}
          {error && (
            <div className="error">
              <p>Error: {error}</p>
            </div>
          )}
          {imageData.length > 0 && (
            <div className="image-container">
              {imageData.map((image) => (
                <ImageCard
                  key={image.id}
                  image={image}
                  onImageClick={handleSetImage}
                />
              ))}
            </div>
          )}
        </div>

        {/* Selected image section */}
        {selectedImage && (
          <SelectedImageModal
            selectedImage={selectedImage}
            onClose={handleCloseImage}
          />
        )}
      </div>
      {imageData.length > 0 && <CopyrightPage />}
    </>
  );
};

export default UnsplashImage;
