import React from "react";

const Card = () => {
  const data = [
    {
      id: "1",
      img: "/images/categeory/1.jpg",
    },
    {
      id: "2",
      img: "/images/categeory/2.jpg",
    },
    {
      id: "3",
      img: "/images/categeory/3.jpg",
    },
    {
      id: "4",
      img: "/images/categeory/4.jpg",
    },
    {
      id: "5",
      img: "/images/categeory/5.jpg",
    },
    {
      id: "6",
      img: "/images/categeory/6.jpg",
    },
    {
      id: "7",
      img: "/images/categeory/7.jpg",
    },
    {
      id: "8",
      img: "/images/categeory/8.jpg",
    },
    {
      id: "9",
      img: "/images/categeory/9.jpg",
    },
    {
      id: "10",
      img: "/images/categeory/10.jpg",
    },
    {
      id: "11",
      img: "/images/categeory/3.jpg",
    },
    {
      id: "12",
      img: "/images/categeory/5.jpg",
    },
  ];

  const offer = [
    {
      id: "1",
      img: "/images/offers/1.png",
    },
    {
      id: "2",
      img: "/images/offers/2.png",
    },
    {
      id: "3",
      img: "/images/offers/3.png",
    },
    {
      id: "4",
      img: "/images/offers/4.png",
    },
    {
      id: "5",
      img: "/images/offers/5.png",
    },
    {
      id: "6",
      img: "/images/offers/6.png",
    },
    {
      id: "7",
      img: "/images/offers/7.png",
    },
    {
      id: "8",
      img: "/images/offers/8.png",
    },
    {
      id: "9",
      img: "/images/offers/9.png",
    },
    {
      id: "10",
      img: "/images/offers/10.png",
    },
    {
      id: "11",
      img: "/images/offers/11.png",
    },
    {
      id: "12",
      img: "/images/offers/12.png",
    },
  ];
  return (
    <div className="container mx-auto my-3">
      <div className="heading py-9 ">
        <h2 className="text-4xl text-[gray] font-bold uppercase font-mono ">
          Shop by Category
        </h2>
      </div>
      <div className="category grid grid-cols-6 gap-2">
        {data.map((item) => (
          <img
            src={item.img}
            className="hover:scale-105 duration-[1s] cursor-pointer"
            alt=""
            key={item.id}
          />
        ))}
      </div>

      <div className="heading py-9 ">
        <h2 className="text-4xl text-[gray] font-bold uppercase font-mono ">
          Offers
        </h2>
      </div>
      <div className="category grid grid-cols-6 gap-2">
        {offer.map((item) => (
          <img
            src={item.img}
            className="hover:scale-105 duration-[1s] cursor-pointer"
            alt=""
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
