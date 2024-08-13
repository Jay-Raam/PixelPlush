import styles from "./home.module.css";
import Contact from "./Contact";
import Caroursol from "./ui/Caroursol";
import Image0003 from "./image/m2.jpg";
import ImageGallery from "./ui/ImageGallery";
import React, { useState, useEffect, useMemo } from "react";

const HomePage = () => {
  const texts = useMemo(
    () => ["Discover and Download", "Explore New Features", "Get Started Now"],
    []
  );
  const [currentText, setCurrentText] = useState(texts[0]);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimationKey((prevKey) => prevKey + 2);
      setCurrentText((prevText) => {
        const currentIndex = texts.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % texts.length;
        return texts[nextIndex];
      });
    }, 4000);

    return () => clearInterval(intervalId);
  }, [texts]);

  // Function to scroll to the contact section when the button is clicked
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header} data-aos="fade-up">
        <div className={styles.wrapper}>
          <div
            className={styles.typingdemo}
            key={animationKey} // Key to force animation reset
            style={{ width: `${currentText.length}ch` }} // Dynamic width based on text length
          >
            {currentText}
          </div>
        </div>

        <p className={styles.subheading}>
          Explore a handpicked collection of high-resolution photos and download
          your favorites effortlessly.
        </p>
        <div className="flex">
          <button type="button" onClick={() => scrollToSection("more-info")}>
            More Info
          </button>
          <button type="button" onClick={() => scrollToSection("contact")}>
            Contact us
          </button>
        </div>
      </header>

      <section className={styles.introduction} id="more-info">
        <div
          className={styles.morecontainer}
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <div className={styles.content}>
            <h2>Why Use Our Image Downloader?</h2>
            <p>
              Our platform connects you to Unsplash's vast library of free,
              high-quality images. Whether you need visuals for a project or
              simply want to enjoy beautiful photography, we've made it easy to
              find and download the best images available.
            </p>
          </div>
        </div>

        <div className={styles.morecontainer}>
          <div
            className={styles.content}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <h3>How It Works</h3>
            <ol>
              <li>
                <strong>Browse Trending Images:</strong> View a selection of the
                most popular images, updated regularly to feature current trends
                and top picks.
              </li>
              <li>
                <strong>Download with Ease:</strong> Simply click the “Image” on
                any image to save your device in its full resolution.
              </li>
              <li>
                <strong>Explore More:</strong> For an even broader selection,
                visit the Unsplash website and discover thousands of additional
                high-quality images.
              </li>
            </ol>
          </div>

          <div
            className={styles.content}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-offset="400"
            data-aos-easing="ease-in-sine"
          >
            <h3>Features</h3>
            <ul>
              <li>
                <strong>High-Quality Images:</strong> All images are available
                in high resolution and can be used freely for personal or
                commercial projects.
              </li>
              <li>
                <strong>Trending Picks:</strong> We highlight the latest and
                most popular images to ensure you see the best of Unsplash.
              </li>
              <li>
                <strong>Simple Download:</strong> Downloading is straightforward
                sign-ups or complicated steps required.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.categoriesSection}>
        <h2>Featured Categories</h2>
        <p>
          Explore images across various categories to find exactly what you’re
          looking for. From breathtaking landscapes to urban snapshots, we have
          it all.
        </p>
        <div className={styles.categoriesContainer} data-aos="zoom-in-up">
          <div className={styles.categoryCard} data-aos="fade-up">
            <h3>Landscapes</h3>
            <p>Find serene and awe-inspiring landscape photography.</p>
          </div>
          <div className={styles.categoryCard} data-aos="fade-up">
            <h3>Cityscapes</h3>
            <p>Discover stunning city views and urban photography.</p>
          </div>
          <div className={styles.categoryCard} data-aos="fade-up">
            <h3>Portraits</h3>
            <p>Browse beautiful portraits and personal stories.</p>
          </div>
          <div className={styles.categoryCard} data-aos="fade-up">
            <h3>Nature</h3>
            <p>Explore the beauty of nature and wildlife.</p>
          </div>
        </div>
      </section>

      <section className={styles.Caroursol}>
        <div className={styles.main002}>
          <img src={Image0003} alt="leaf" />
        </div>
        <Caroursol className={styles.main001} />
      </section>

      <section className={styles.gallerySection}>
        <h2>Featured Image Gallery</h2>
        <ImageGallery />
      </section>

      <Contact id="contact" />

      <footer className={styles.footer}>
        <p>
          © 2024
          <a
            href="https://jayasriraam.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jayasriraam
          </a>
          . All rights reserved. |
          <a
            href="https://jayasriraam.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
          |
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://jayasriraam.vercel.app/"
          >
            Terms of Service
          </a>
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
