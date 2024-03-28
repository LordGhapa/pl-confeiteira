"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Depoimentos() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="bg-[#FFF9F1] px-4">
      <div className="mx-auto  max-w-5xl  justify-center py-24">
        <p className="pb-12 text-center text-xl font-bold md:text-4xl">
          O QUE FALAM SOBRE NÓS
        </p>
        <Slider className="mb-12" {...settings}>
          <div>
            <div className="flex justify-center">
              <Image
                src={"/celularmock.jpg"}
                alt="print celular"
                width={300}
                height={407}
                objectFit="contain"
              />
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <Image
                src={"/celularmock.jpg"}
                alt="print celular"
                width={300}
                height={407}
                objectFit="contain"
              />
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <Image
                src={"/celularmock.jpg"}
                alt="print celular"
                width={300}
                height={407}
                objectFit="contain"
              />
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <Image
                src={"/celularmock.jpg"}
                alt="print celular"
                width={300}
                height={407}
                objectFit="contain"
              />
            </div>
          </div>
        </Slider>
        <Button className="relative z-10  mx-auto  flex w-full max-w-md transition-all ease-in-out hover:scale-105 hover:bg-orange-600 md:p-8 md:text-2xl lg:mt-3 lg:px-20 lg:py-6 lg:text-base ">
          QUERO RESERVAR MINHA VAGA
        </Button>
      </div>
    </div>
  );
}
