
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";


const Header = () => {
  return (
    <div className="flex md:w-[550px] md:h-[38px] md:px-[20px] py-[88px] lg:w-[1170px] lg:h-[38px] lg:px-[138px] py-[88px] items-center">
      <div className="flex items-center w-[675px] h-[24px] py-[7px] gap-[48px]">
         {/* logo */}
        <div className="flex items-center w-[118px] h-[124px] lg:text-[24px] font-bold">
          <h1>Exclusive</h1>
        </div>

        {/* Navigation */}
        <ul className="w-[48px] h-[24px] flex gap-5 size-[16px]">
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>Signup</li>
        </ul>
      </div>

      {/* search bar */}
      <div className="flex flex-col items-center md:w-[40px] lg:w-[347px] h-[38px]">
        <div className=" flex gap-14 items-center w-[243px] h-[38px] rounded-sm border-1 bg-gray-100">
          <div className="w-[153px] h-[18px] flex  items-center">
            <input type="text" placeholder="What are you looking for ?" />
          </div>
          {/* icons  */}
          <div>
            <IoSearchOutline className="h-[24px] w-[24px] items-center rounded" />
          </div>

          <div className="flex gap-5">
            <GoHeart className="w-[24px] h-[24px]" />
            <IoCartOutline className="w-[24px] h-[24px]" />
          </div>

        </div>

      </div>
    </div>
  );
};

export default Header;
