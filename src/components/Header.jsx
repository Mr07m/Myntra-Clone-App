import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full border-b shadow-sm">
      <div className="container mx-auto">
        <div className="nav flex flex-row justify-between items-center p-2 ">
          <div className="left-part text-sm flex flex-row justify-between items-center gap-5">
            <Link to="/">
              <img src="/images/myntra_logo.webp" className="w-[60px]" />
            </Link>
            <ul className="flex flex-row">
              <Link to="/men">
                <li className="mx-2 uppercase font-bold cursor-pointer">men</li>
              </Link>
              <Link to="women">
                <li className="mx-2 uppercase font-bold cursor-pointer">
                  women
                </li>
              </Link>
              {/* <Link to="kids">
                <li className="mx-2 uppercase font-bold cursor-pointer">
                  kids
                </li>
              </Link>
              <Link to="homeLiving">
                <li className="mx-2 uppercase font-bold cursor-pointer">
                  home & living
                </li>
              </Link>
              <Link to="beauty">
                <li className="mx-2 uppercase font-bold cursor-pointer">
                  beauty
                </li>
              </Link>
              <Link to="studio">
                <li className="mx-2 uppercase font-bold cursor-pointer">
                  studio <sup className="text-[red]">new</sup>
                </li>
              </Link> */}
            </ul>
          </div>
          <div className="right-part flex flex-row justify-between items-center gap-[2rem]">
            <div className="search rounded bg-[#80808025] p-2 border flex flex-row justify-between items-center gap-3">
              <span>
                <CiSearch />
              </span>
              <input
                type="text"
                placeholder="Search for products, brands and more"
                name=""
                id=""
                className="outline-none w-[280px] bg-transparent text-[#000] placeholder:text-[gray]"
              />
            </div>
            <div className="profile flex flex-col justify-center items-center cursor-pointer ">
              <span>
                <IoPersonOutline />
              </span>
              <span>Profile</span>
            </div>
            <div className="wishlist flex flex-col justify-center items-center cursor-pointer ">
              <span>
                <CiHeart />
              </span>
              <span>Wishlist</span>
            </div>
            <div className="bag flex flex-col justify-center items-center cursor-pointer ">
              <span>
                <IoBagOutline />
              </span>
              <span>Bag</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
