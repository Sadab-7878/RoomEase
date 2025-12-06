import React from "react";
import { IoHome } from "react-icons/io5";

const Home = () => {
  return (
    <>
      <div>
        {/* 1 */}
        <div className="h-[100px] bg-[#99F2CE]">
          <div>
            <div className="flex items-center gap-2">
              <IoHome size={32} />
              <p className="text-3xl font-bold">RoomEase</p>
            </div>
            <div></div>
          </div>
          <div></div>
        </div>

        {/* 2 */}
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Home;
