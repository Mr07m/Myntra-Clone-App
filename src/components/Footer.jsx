import React from "react";
import { RiFacebookBoxLine } from "react-icons/ri";
import { CiInstagram } from "react-icons/ci";
import { FiYoutube } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full bg-[#80808044] mt-6">
      <div className="container mx-auto p-3 flex flex-row justify-between items-center">
        <div className="left-part flex flex-row justify-center items-start gap-10">
          <div className="online-shopping p-3">
            <h3 className="font-bold uppercase text-sm">Online Shopping</h3>
            <ul className="flex flex-col capitalize mt-6">
              <li className="hover:font-bold cursor-pointer">men</li>
              <li className="hover:font-bold cursor-pointer">women</li>
              <li className="hover:font-bold cursor-pointer">kids</li>
              <li className="hover:font-bold cursor-pointer">home & kiving</li>
              <li className="hover:font-bold cursor-pointer">beauty</li>
              <li className="hover:font-bold cursor-pointer">gift cards</li>
              <li className="hover:font-bold cursor-pointer">myntra insider</li>
            </ul>
          </div>
          <div className="customer-policies p-3">
            <h3 className="font-bold uppercase text-sm">Customer policies</h3>
            <ul className="flex flex-col capitalize mt-6">
              <li className="hover:font-bold cursor-pointer">contact us</li>
              <li className="hover:font-bold cursor-pointer">FAQ</li>
              <li className="hover:font-bold cursor-pointer">T&C</li>
              <li className="hover:font-bold cursor-pointer">Terms of use</li>
              <li className="hover:font-bold cursor-pointer">track order</li>
              <li className="hover:font-bold cursor-pointer">shipping</li>
              <li className="hover:font-bold cursor-pointer">cancleation</li>
              <li className="hover:font-bold cursor-pointer">return</li>
              <li className="hover:font-bold cursor-pointer">privacy policy</li>
              <li className="hover:font-bold cursor-pointer">
                groevance redressel
              </li>
            </ul>
          </div>
          <div className="experience p-3">
            <h3 className="font-bold uppercase text-sm">
              EXPERIENCE MYNTRA APP ON MOBILE
            </h3>
            <div className="images py-3">
              <img src="/images/play-store.png" alt="" />
            </div>
            <div className="keep">
              <h3 className="font-bold uppercase text-sm">keep in touch</h3>
              <div className="in-touch flex flex-row py-3">
                <span className="mx-2 text-2xl hover:scale-125 duration-[1s] cursor-pointer">
                  <RiFacebookBoxLine />
                </span>
                <span className="mx-2 text-2xl hover:scale-125 duration-[1s] cursor-pointer">
                  <CiInstagram />
                </span>
                <span className="mx-2 text-2xl hover:scale-125 duration-[1s] cursor-pointer">
                  <FiYoutube />
                </span>
                <span className="mx-2 text-2xl hover:scale-125 duration-[1s] cursor-pointer">
                  <FaXTwitter />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="right-part flex flex-col justify-start items-start gap-[2rem] ">
          <div className="original flex flex-row justify-between items-center gap-4">
          <img
              src="https://cdn-icons-png.freepik.com/256/5625/5625819.png?uid=R154443936&ga=GA1.1.1120940752.1719829129&semt=ais_hybrid"
              className="w-[30px] h-[30px]"
              alt=""
            />
            <h1> <span className="font-bold">100% ORIGINAL</span>  guarantee for <br /> all products at myntra.com</h1>
          </div>
          <div className="return flex flex-row justify-between items-center gap-4">
            <img
              src="https://cdn-icons-png.freepik.com/256/16676/16676533.png?uid=R154443936&ga=GA1.1.1120940752.1719829129&semt=ais_hybrid"
              className="w-[30px] h-[30px]"
              alt=""
            />
            <h1> <span className="font-bold">Return within 14days of</span> <br /> receiving your order</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
