import React from "react";
import styles from "./carousel.module.scss";
import Image from "next/image";
import Link from "next/link";

const Carousel = () => {
  const informations = [
    {
      src: "carousel1.webp",
      alt: "Carousel 1",
      link: "#",
    },
    {
      src: "carousel2.webp",
      alt: "Carousel 2",
      link: "#",
    },
    {
      src: "carousel3.webp",
      alt: "Carousel 3",
      link: "#",
    },
  ];
  return (
    <div
      id="carouselExampleControls"
      className={`${styles.carousel_container} carousel slide h-100`}
      data-bs-ride="carousel"
    >
      <div className="carousel-inner h-100">
        {informations.map((info, index) => (
          <Link
            href={info.link}
            rel="noopener noreferrer"
            target="_blank"
            key={index}
            className={`${styles.carouse_item} ${
              index == 0 && "active"
            } carousel-item h-100`}
          >
            <Image
              rel="preload"
              priority={true}
              fill
              src={`/carousel/${info.src}`}
              className="d-block w-100 h-100"
              alt={info.alt}
              sizes="100%"
            />
          </Link>
        ))}
      </div>
      <button
        className={`${styles.carousel_control_prev_container} carousel-control-prev`}
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span
          className={`${styles.carousel_control_prev} carousel-control-prev-icon d-flex justify-content-center align-items-center position-relative`}
          aria-hidden="true"
        >
          <Image
            priority={true}
            rel="preload"
            className="h-50 position-relative"
            fill
            src="/carousel/left.svg"
            alt="Left arrow"
            sizes="100%"
          />
        </span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className={`${styles.carousel_control_next_container} carousel-control-next`}
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span
          className={`${styles.carousel_control_next} d-flex justify-content-center align-items-center position-relative carousel-control-next-icon`}
          aria-hidden="true"
        >
          <Image
            priority={true}
            rel="preload"
            className="h-50 position-relative"
            fill
            src="/carousel/right.svg"
            alt="Right arrow"
            sizes="100%"
          />
        </span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
