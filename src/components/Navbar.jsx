import logo from "../images/navbar/logos.png"
import fecebook from "../images/navbar/fecebook.svg";
import vector from "../images/navbar/vector.svg";
import telegram from "../images/navbar/telegram.svg";
import phone from "../images/navbar/phone.svg";
import {Link} from "react-router-dom"
import NavLinks from "./NavLinks"
import { IoSearchOutline } from "react-icons/io5";

function Navbar() {
  return (
    <div className="pt-7 pb-9 flex items-center">
      <Link className="site-logo mr-[95px] " to="/">
        <img
          className=" max-w-40 max-h-[52px] mt-1 object-contain"
          src={logo}
          alt=""
        />
      </Link>
      <NavLinks />

      <div className="relative pt-2 mr-7">
        <input
          type="text"
          placeholder="поиск товара"
          className="input input-bordered w-full max-w-[221px] "
        />
        <span className="absolute right-2 top-[22px] cursor-pointer">
          <IoSearchOutline className="text-xl" />
        </span>
      </div>
      <div className="flex gap-4  pt-2 mr-[44px]">
        <img className="w-7 h-7" src={fecebook} alt="" />
        <img className="w-7 h-7" src={telegram} alt="" />
        <img className="w-7 h-7" src={phone} alt="" />
      </div>
      <div className="w-[58px] h-[58px] flex items-center justify-center rounded-[50%] mt-2 shadow-[0px_0px_10px_0px_#9C9C9C1A]">
        <div className="indicator ">
          <img className="h-[23px] w-6" src={vector} alt="" />
          <span className="badge badge-sm indicator-item bg-orenj-clr text-neutral-50">
            0
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar