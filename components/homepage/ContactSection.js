import React from "react";
import { Row, Col } from "react-bootstrap";
import { Swiper, Mousewheel, Autoplay } from "swiper";
import ReactIdSwiperCustom from "react-id-swiper/lib/ReactIdSwiper.custom";
import Link from "next/link";

const ContactSection = ({ showCaseProducts }) => {
  const params = {
    Swiper,
    modules: [Mousewheel, Autoplay],
    slidesPerView: 3,
    watchOverflow: false,
    autoplay: {
      delay: 5000,
    },
    loop: true,
    allowTouchMove: false,
    spaceBetween: 20,
    speed: 1000,
    effect: "slide",
  };

  return (
    <div className="contact-section position-relative">
      <div className="linger-left"></div>
      <h2 className="text-center pb-4">
        Not seeing what you like? <Link href="/contact">ASK ME</Link> to custom
        make something for you!
      </h2>
      <div className="linger-right"></div>
      <div className="w-100 m-0 d-flex" style={{ paddingTop: "7rem" }}>
        <div className="w-25 bg-color-pink"></div>
        <div className="image-swiper px-0 w-75">
          <ReactIdSwiperCustom {...params} className="w-100">
            {showCaseProducts
              ? showCaseProducts.map((product) => (
                  <div
                    key={product.id}
                    style={{
                      backgroundImage: `url("${product.media.source}")`,
                    }}
                    className="showcase-slide"
                  ></div>
                ))
              : null}
          </ReactIdSwiperCustom>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
