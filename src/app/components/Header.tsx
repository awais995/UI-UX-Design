import { Poppins } from "next/font/google";
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

const Header = () => {
  return (
    <div className=" w-[1170px] h-[38px] px-[135px] py-[88px] flex flex-col justify-center items-center">
      <div className="flex justify-between items-center gap-10">
        <div className=" font-bold w-[118px] h-[24px] text-black">
          <h1>Exclusive </h1>
        </div>
        <div>
          <ul className="flex space-x-6 ">
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Signup</li>
          </ul>
        </div>

        <div className="flex space-x-5 justify-between w-[347px] h-[38px]">
          <div className=" flex space-x-10 w-[243px] h-[38px] py-[7px] mr-3 ml-5 gap-[10px] bg-[#F5F5F5] opacity-50  ">
            <div
              className={`${poppins.className}text-[#000000] w-[153px] h-[18px] size-3 leading-[18px] font-normal`}
            >
              <input type="text" placeholder="what are you looking for?" />
            </div>
            <div className="flex w-6 h-6 gap-[34px]">
              <IoSearchOutline />
            </div>
          </div>
          <div className="flex items-center gap-[8px]">
            <div className="flex items-center h-8 w-8">
              <GoHeart />
            </div>
            <div className="flex items-center">
              <IoCartOutline width={32} height={32} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
