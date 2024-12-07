import { FaAngleDown } from "react-icons/fa";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { IoMdNotificationsOutline } from "react-icons/io";

export default function Menu() {
  return (
    <nav className="px-4 bg-white shadow-md w-full text-gray-600">
      <div className="flex justify-between items-center h-[70px]">
        <button className="text-2xl cursor-pointer">
          <HiBars3BottomLeft />
        </button>

        <div className="flex items-center gap-14">
          <div className="text-2xl cursor-pointer relative">
            <IoMdNotificationsOutline />
            <span className="block text-[12px] w-[20px] h-[20px] leading-[20px] text-center bg-emerald-400 rounded-full text-white absolute top-[-5px] right-[-5px]">
              10
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span>Admin</span>
            <FaAngleDown />
          </div>
        </div>
      </div>
    </nav>
  );
}
