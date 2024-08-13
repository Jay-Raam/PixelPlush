import React, { useState, useEffect } from "react";
import styles from "./TestimonialCarousel.module.css";

const testimonials = [
  {
    text: "An excellent tool for finding high-quality images quickly. I use it for my blog and social media posts!",
    author: "- Priyadahrshini.",
  },
  {
    text: "The image selection is always fresh and beautiful. Downloading images is hassle-free and straightforward.",
    author: "- Vaishali.",
  },
  {
    text: "A fantastic resource for both personal and professional projects. Highly recommend!",
    author: "- Aishu.",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className={styles.carouselSection}>
      <h2>What Our Users Say</h2>
      <div className={styles.carouselContainer}>
        <div className={styles.carouselContent}>
          <div className={styles.testimonialCard}>
            <p>{testimonials[currentIndex].text}</p>
            <span>{testimonials[currentIndex].author}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
