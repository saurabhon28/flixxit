import { IoIosArrowDropdownCircle } from "react-icons/io";

function Header() {
  return (
    <div className="absolute z-10 bg-gradient-to-b from-gray-900  w-[100%] h-20 flex items-center justify-between px-6">
      <h1 className="text-red-600 text-4xl font-bold pl-4">FLIXXIT</h1>
      <div className="flex items-center">
        <IoIosArrowDropdownCircle size="24px" color="white" />
        <h1 className="text-lg font-medium text-slate-300 ml-2">
          Saurabh Dubey
        </h1>
        <div className="ml-4">
          <button className="bg-red-800 text-white px-4 py-2 rounded-md">
            Logout
          </button>
          <button className="bg-red-800 text-white px-4 py-2 ml-4 rounded-md">
            Search Movies
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
