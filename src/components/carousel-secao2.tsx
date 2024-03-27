"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function CarouselSecao2() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <Slider {...settings}>
      <div>
        <div className="flex justify-center">
          <Image
            src={"/bolo1.png"}
            alt="imagem de um bolo"
            width={500}
            height={500}
            objectFit="contain"
          />
        </div>
      </div>
      <div>
        <div className="flex justify-center">
          <Image
            src={"/bolo2.png"}
            alt="imagem de um bolo"
            width={500}
            height={500}
            objectFit="contain"
          />
        </div>
      </div>
    </Slider>
  );
}
