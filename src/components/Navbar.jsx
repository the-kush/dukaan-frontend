import { FaHeart } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";


export const Navbar = () => {
    return <>
    <div className="flex justify-between items-center p-2 bg-white text-black border-b">
      <div className="text-md font-medium flex justify-start text-left">
        <span className="p-2">Payments</span>
        <span className="p-2 text-sm flex justify-between text-gray-600"><HiOutlineQuestionMarkCircle size={18}/>How it works</span>
      </div>

      <div className="relative flex items-center w-[60%]">
        <CiSearch size={24} color="gray" className="absolute"/>
        <input
          type="text"
          placeholder="Search features, tutorials, etc."
          className="p-2 rounded bg-gray-200 border placeholder-gray-400 focus:outline-none w-[60%] pl-6 text-black"
        />
      </div>

      <div className="flex items-center space-x-4 text-right">
        <div className="rounded-full p-3 bg-gray-200"><FaBullhorn /></div>
        <div className="rounded-full p-3 bg-gray-200"><FaHeart /></div>
      </div>
    </div>
    </>
}