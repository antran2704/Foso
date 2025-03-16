import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

import { Link } from "~/navigation";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <nav className="sticky top-0 flex justify-center py-6 z-50">
      <div className="lg:max-w-7xl w-full flex items-center lg:justify-center justify-between py-3 px-8 bg-white shadow-lg rounded-[40px] gap-10">
        <Image
          src="/images/global/logo.png"
          className="w-[138px]"
          priority={true}
          alt="Logo Foso"
          title="Logo Foso"
          width={100}
          height={100}
        />

        <ul className="lg:flex hidden items-center gap-2">
          <li className="flex items-center">
            <Link
              href={"/"}
              className="text-sm text-dark-50 font-medium hover:text-green-200 p-2">
              Về Chúng tôi
            </Link>
          </li>
          <li className="flex items-center">
            <Link
              href={"/"}
              className="relative text-sm text-dark-50 font-medium hover:text-green-200 p-2">
              Giải pháp
            </Link>
            <IoIosArrowDown className="min-w-4 size-4" />
          </li>
          <li className="flex items-center">
            <Link
              href={"/"}
              className="relative text-sm text-dark-50 font-bold p-2">
              Tài nguyên
              <span className="absolute min-w-[6px] size-[6px] top-[90%] left-1/2 -translate-x-1/2 bg-green-100 rounded-full"></span>
            </Link>
            <IoIosArrowDown className="min-w-4 size-4" />
          </li>
          <li className="flex items-center">
            <Link
              href={"/"}
              className="text-sm text-dark-50 font-medium hover:text-green-200 p-2">
              Liên hệ
            </Link>
          </li>
        </ul>

        <div className="lg:flex hidden items-center gap-2">
          {/* region */}
          <button className="flex items-center py-2 px-3 bg-[#09090B0D]/10 rounded-5xl gap-3">
            <img
              src="/images/country/viet_nam.png"
              alt="region icon"
              title="region icon"
              width="auto"
              height="auto"
              className="min-w-6 size-6"
            />

            <div className="flex items-center gap-1">
              <p className="text-sm font-medium text-dark-50">VI</p>
              <IoIosArrowDown className="min-w-4 size-4" />
            </div>
          </button>

          <button className="flex items-center py-2 px-3 bg-green-100 rounded-5xl gap-3">
            <p className="text-sm font-bold text-dark-300">
              Trở thành khách hàng
            </p>
            <IoIosArrowDown className="min-w-4 size-4" />
          </button>
        </div>
        
        <MobileMenu />
      </div>
    </nav>
  );
};

export default Navbar;
