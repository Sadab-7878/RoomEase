import React from "react";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router";
import homepage from '../assets/Home.png'

const Home = () => {
  return (
    <>
      <div>
        {/* 1 */}
        <div className="h-[100px] bg-[#99F2CE] flex items-center justify-between px-10">

          <div></div>

         
          <div className="ml-48">
            <div className="flex items-center gap-2">
              <IoHome size={32} />
              <p className="text-3xl font-bold">RoomEase</p>
            </div>
            <div>
              <p className="text-[#AC0404]">Online Rental & Roommate Finder</p>
            </div>
          </div>
          <div className="flex gap-4">

            <Link to={'/login'} className=" py-1 px-10 bg-[#007AFF] rounded-2xl">Login</Link>
            <Link to={'/signup'} className="py-1 px-10 bg-[#007AFF] rounded-2xl">Sign Up</Link>
          </div>
        </div>

        {/* 2 */}
        <div>
          <div>
            <p>hello</p>
          </div>
          <div>
            <img src={homepage} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
