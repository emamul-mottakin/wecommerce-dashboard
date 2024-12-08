import { FaHome } from "react-icons/fa";
import { FiBox, FiGrid, FiShoppingCart, FiTruck } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";

export default function SideBar({ sideBarStatus }) {
  if (sideBarStatus) {
    return (
      <aside className="bg-white w-[300px] border-r-[1px] border-gray-100 h-screen px-4">
        {/* logo */}
        <div className="flex gap-2 py-4 items-center">
          <div>
            <svg
              id="logo-15"
              width="49"
              height="48"
              viewBox="0 0 49 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <path
                d="M24.5 12.75C24.5 18.9632 19.4632 24 13.25 24H2V12.75C2 6.53679 7.03679 1.5 13.25 1.5C19.4632 1.5 24.5 6.53679 24.5 12.75Z"
                className="ccustom"
                fill="#17CF97"
              ></path>{" "}
              <path
                d="M24.5 35.25C24.5 29.0368 29.5368 24 35.75 24H47V35.25C47 41.4632 41.9632 46.5 35.75 46.5C29.5368 46.5 24.5 41.4632 24.5 35.25Z"
                className="ccustom"
                fill="#17CF97"
              ></path>{" "}
              <path
                d="M2 35.25C2 41.4632 7.03679 46.5 13.25 46.5H24.5V35.25C24.5 29.0368 19.4632 24 13.25 24C7.03679 24 2 29.0368 2 35.25Z"
                className="ccustom"
                fill="#17CF97"
              ></path>{" "}
              <path
                d="M47 12.75C47 6.53679 41.9632 1.5 35.75 1.5H24.5V12.75C24.5 18.9632 29.5368 24 35.75 24C41.9632 24 47 18.9632 47 12.75Z"
                className="ccustom"
                fill="#17CF97"
              ></path>{" "}
            </svg>
          </div>
          <div>
            <h1 className="font-bold text-lg">Wecommerce</h1>
            <span className="text-sm">Admin Dashboard</span>
          </div>
        </div>

        {/* Dashboard */}
        <a
          href="#"
          className="bg-emerald-50 text-emerald-400 flex items-center gap-4 rounded-full"
        >
          <span className="block p-3 bg-emerald-400 text-white rounded-full m-1 text-2xl">
            <FaHome />
          </span>
          <p href="#">Dashboard</p>
        </a>

        {/* resources */}
        <span className="uppercase text-gray-600 font-bold text-xs block px-4 mt-2 mb-4">
          resources
        </span>

        <div className="text-gray-600 capitalize">
          <a
            href="#"
            className="flex items-center gap-4 hover:bg-emerald-50 py-3 px-4 rounded-full text-lg"
          >
            <FiGrid />
            <p>categories</p>
          </a>

          <a
            href="#"
            className="flex items-center gap-4 hover:bg-emerald-50 py-3 px-4 rounded-full text-lg"
          >
            <FiBox />
            <p>Products</p>
          </a>

          <a
            href="#"
            className="flex items-center gap-4 hover:bg-emerald-50 py-3 px-4 rounded-full text-lg"
          >
            <IoPersonOutline />
            <p>customers</p>
          </a>

          <a
            href="#"
            className="flex items-center gap-4 hover:bg-emerald-50 py-3 px-4 rounded-full text-lg"
          >
            <FiShoppingCart />
            <p>orders</p>
          </a>

          <a
            href="#"
            className="flex items-center gap-4 hover:bg-emerald-50 py-3 px-4 rounded-full text-lg"
          >
            <FiTruck />
            <p>Deliveries</p>
          </a>
        </div>
      </aside>
    );
  } else {
    return;
  }
}
