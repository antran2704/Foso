"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { HiMenu } from "react-icons/hi";
import clsx from "clsx";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      <HiMenu
        onClick={toggleMenu}
        className="lg:hidden block min-w-8 size-8 cursor-pointer"
      />

      <div
        className={clsx("fixed top-0 right-0 left-0 bottom-0 z-10", [
          !isOpen && "pointer-events-none",
        ])}>
        <div
          onClick={toggleMenu}
          className={clsx(
            "absolute top-0 right-0 left-0 bottom-0 bg-black/50 transition-all ease-linear duration-75 z-10",
            [isOpen ? "opacity-100" : "opacity-0 pointer-events-none"],
          )}></div>
        <div
          className={clsx(
            "relative md:w-1/2 w-full h-full bg-white p-5 transition-all ease-linear duration-75 z-20",
            [isOpen ? "translate-x-0" : "-translate-x-[150%]"],
          )}>
          <div className="flex items-center justify-between">
            <img
              src="/images/global/logo.png"
              alt="Logo Foso"
              title="Logo Foso"
              width={100}
              height={100}
            />

            <IoClose onClick={toggleMenu} className="size-8 min-w-8 cursor-pointer" />
          </div>

          <ul className="flex flex-col mt-5 gap-2">
            <Link
              href={"/"}
              className="text-sm text-dark-50 font-medium hover:text-green-200 p-2">
              Về Chúng tôi
            </Link>
            <Link
              href={"/"}
              className="flex items-center justify-between text-sm text-dark-50 font-medium hover:text-green-200 p-2">
              Giải pháp
              <IoIosArrowDown className="min-w-4 size-4" />
            </Link>
            <Link
              href={"/"}
              className="flex items-center justify-between text-sm text-dark-50 font-bold hover:text-green-200 p-2">
              Tài nguyên
              <IoIosArrowDown className="min-w-4 size-4" />
            </Link>
            <Link
              href={"/"}
              className="text-sm text-dark-50 font-medium hover:text-green-200 p-2">
              Liên hệ
            </Link>
          </ul>

          <div className="flex flex-col mt-5 gap-2">
            {/* region */}
            <button className="flex items-center justify-between py-2 px-3 bg-[#09090B0D]/10 rounded-5xl gap-3">
              <div className="flex items-center gap-1">
                <img
                  src="/images/country/viet_nam.png"
                  alt="region icon"
                  title="region icon"
                  width="auto"
                  height="auto"
                  className="min-w-6 size-6"
                />
                <p className="text-sm font-medium text-dark-50">VI</p>
              </div>
              <IoIosArrowDown className="min-w-4 size-4" />
            </button>

            <button className="flex items-center justify-between py-2 px-3 bg-green-100 rounded-5xl gap-3">
              <p className="text-sm font-bold text-dark-300">
                Trở thành khách hàng
              </p>
              <IoIosArrowDown className="min-w-4 size-4" />
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MobileMenu;
