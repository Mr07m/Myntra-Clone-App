import React from "react";
import Banner from "../components/Banner";

const Men = () => {
  const menData = [
    {
      id: 1,
      img: "/images/top-men-brands/img1.png",
    },
    {
      id: 2,
      img: "/images/top-men-brands/img2.png",
    },
    {
      id: 3,
      img: "/images/top-men-brands/img3.png",
    },
    {
      id: 4,
      img: "/images/top-men-brands/img4.png",
    },
    {
      id: 5,
      img: "/images/top-men-brands/img5.png",
    },
    {
      id: 6,
      img: "/images/top-men-brands/img6.png",
    },
    {
      id: 7,
      img: "/images/top-men-brands/img7.png",
    },
    {
      id: 8,
      img: "/images/top-men-brands/img8.png",
    },
  ];
  return (
    <div className="container mx-auto">
      <Banner url="/images/men-banner/men-banner-1.png" />
      <div className="container">
        <div className="heading py-10">
          <h1 className="font-bold font-mono uppercase text-3xl text-[#291919] tracking-wide">
            Biggest Deals On Top Brands
          </h1>
        </div>
        <div className="grid grid-cols-4 gap-5 cursor-pointer justify-center items-center">
          {menData.map((item) => (
            <div className="item hover:scale-105 duration-[1s]">
              <img src={item.img} key={item.id} alt="" />
            </div>
          ))}
        </div>
      </div>
      <Banner url="/images/men-banner/cart-banner.png"/>
    </div>
  );
};

export default Men;
