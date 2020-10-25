import React from "react";
import { Swiper, EffectFade, Autoplay } from "swiper";
import ReactIdSwiperCustom from "react-id-swiper/lib/ReactIdSwiper.custom";
import Link from "next/link";

const HeroSection = () => {
  const params = {
    Swiper,
    modules: [EffectFade, Autoplay],
    slidesPerView: 1,
    watchOverflow: false,
    autoplay: {
      delay: 5000,
    },
    loop: true,
    allowTouchMove: false,
    speed: 1000,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
  };
  const images = [
    "/images/home-1.jpg",
    "/images/home-2.jpg",
    "/images/home-3.jpg",
    "/images/home-4.jpg",
  ];
  return (
    <div className="hero-wrap mb-5">
      <div className="hero-section">
        <ReactIdSwiperCustom {...params}>
          {images.map((image) => (
            <div
              key={image}
              style={{ backgroundImage: `url("${image}")` }}
              className="hero-slide"
            ></div>
          ))}
        </ReactIdSwiperCustom>
        <div className="hero-text d-flex flex-column justify-content-center align-items-center position-absolute">
          <p className="hero-heading font-size-5 text-center">
            The sweetness you can never resist
          </p>
          <div className="my-4">
            <span className="text-transform-uppercase font-size-3 font-color-white">
              Proudly presents -&nbsp;
            </span>
            <span className="text-transform-uppercase font-size-3 font-color-pink">
              sweets of the week
            </span>
          </div>
          <Link href="/products">
            <a className="hero-button">Order Now</a>
          </Link>
        </div>
        <div className="linger"></div>
      </div>
    </div>
  );
};

export default HeroSection;
