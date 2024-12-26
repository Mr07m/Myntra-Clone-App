import React from "react";
import Banner from "../components/Banner";

const Women = () => {
  const crazyDeals = [
    {
      id: "1",
      img: "/images/crazy-deals/img1.png",
    },
    {
      id: "2",
      img: "/images/crazy-deals/img2.png",
    },
    {
      id: "3",
      img: "/images/crazy-deals/img3.png",
    },
    {
      id: "4",
      img: "/images/crazy-deals/img4.png",
    },
    {
      id: "5",
      img: "/images/crazy-deals/img5.png",
    },
    {
      id: "6",
      img: "/images/crazy-deals/img6.png",
    },
    {
      id: "7",
      img: "/images/crazy-deals/img7.png",
    },
    {
      id: "8",
      img: "/images/crazy-deals/img8.png",
    },
  ];

  const shopByCategory = [
    {
      id: "1",
      img: "/images/top-women-brands/img1.png",
    },
    {
      id: "2",
      img: "/images/top-women-brands/img2.png",
    },
    {
      id: "3",
      img: "/images/top-women-brands/img3.png",
    },
    {
      id: "4",
      img: "/images/top-women-brands/img4.png",
    },
    {
      id: "5",
      img: "/images/top-women-brands/img5.png",
    },
    {
      id: "6",
      img: "/images/top-women-brands/img6.png",
    },
    {
      id: "7",
      img: "/images/top-women-brands/img7.png",
    },
    {
      id: "8",
      img: "/images/top-women-brands/img8.png",
    },
    {
      id: "9",
      img: "/images/top-women-brands/img9.png",
    },
    {
      id: "10",
      img: "/images/top-women-brands/img10.png",
    },
    {
      id: "11",
      img: "/images/top-women-brands/img11.png",
    },
    {
      id: "12",
      img: "/images/top-women-brands/img12.png",
    },
  ];

  return (
    <div className="container mx-auto">
      <Banner url="/images/men-banner/women-banner.png" />
      <div className="container">
        <div className="heading py-4">
          <h1 className=" text-center capitalize font-bold text-[red] text-3xl">
            Crazy Deals
          </h1>
        </div>
        <div className="flex flex-row">
          {crazyDeals.map((item) => (
            <div className="item">
              <img src={item.img} key={item.id}  />
            </div>
          ))}
        </div>

        <div className="heading py-10">
          <h1 className="font-bold font-mono uppercase text-3xl text-[#291919] tracking-wide">
            Biggest Deals On Top Brands
          </h1>
        </div>
        <div className="grid grid-cols-6 justify-center items-center ">
          {shopByCategory.map((item) => (
            <div className="item">
              <img src={item.img} key={item.id} />
            </div>
          ))}
        </div>
      </div>
      <Banner url="/images/men-banner/cart-banner.png"/>
    </div>
  );
};

export default Women;
