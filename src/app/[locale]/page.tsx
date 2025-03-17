import { Link } from "~/navigation";
import Breadcrumb from "../components/Breadcrumb";
import { InputSearch } from "../components/Input";
import Pagination from "../components/Pagination";
import HeroBanner from "./components/HeroBanner";
import BlogItem from "~/app/components/Blog/Item";
import SupportBlock from "../components/Support";

export default function HomePage() {
  return (
    <div>
      <div className="container flex items-center justify-center mt-12">
        <Breadcrumb
          items={[
            { name: "Trang chủ", href: "/" },
            { name: "Tài nguyên", href: "/" },
            { name: "Blog" },
          ]}
        />
      </div>

      <div className="container flex items-center lg:justify-between justify-center lg:py-20 py-5">
        <img
          src="/images/blogPage/calender.png"
          alt="icon"
          title="icon"
          width="auto"
          height="auto"
          className="lg:block hidden w-[195px] z-[1]"
        />

        <div className="lg:w-1/2 w-full">
          <h1 className="xl:text-[64px] md:text-[48px] text-[32px] text-center">
            Blog{" "}
            <strong className="bg-gradient-to-br from-[#53B086]  to-[#85EEB3B5]/70 bg-clip-text text-transparent font-extrabold">
              FOSO
            </strong>{" "}
            – Cập Nhật Tin Tức{" "}
            <span className="relative z-[1]">
              <strong className="relative font-extrabold text-nowrap z-[1]">
                Mới Nhất
              </strong>
              <span className="absolute left-0 bottom-0 w-full lg:h-7 md:h-6 h-4 bg-[#A3EED6] rounded-5xl z-0"></span>
            </span>
          </h1>
          <p className="text-center text-lg text-dark-200 font-medium">
            Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
          </p>
        </div>

        <img
          src="/images/blogPage/hand.png"
          alt="icon"
          title="icon"
          width="auto"
          height="auto"
          className="lg:block hidden w-[195px] z-[1]"
        />
      </div>

      <div className="relative">
        <img
          src="/images/global/bg_left.png"
          alt="imFage"
          title="image"
          width={"auto"}
          height={"auto"}
          className="absolute left-0 -top-1/2 z-[0]"
        />

        <div className="relative container flex lg:flex-row flex-col-reverse justify-between gap-8 z-[1]">
          {/* Main content area */}
          <div className="lg:w-9/12 w-full py-6">
            <h2 className="lg:text-4xl md:text-3xl text-2xl font-extrabold">Tất Cả Bài Viết</h2>

            {/* Hero banner */}
            <HeroBanner />

            {/* Blog grid */}
            <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
              <BlogItem />
              <BlogItem />
            </div>
          </div>

          {/* Right sidebar */}
          <div className="lg:w-3/12 w-full py-6">
            <div className="mb-6">
              <h2 className="text-2xl font-extrabold text-dark-100">
                Tìm kiếm
              </h2>
              <InputSearch />
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-extrabold text-dark-100">
                Danh Mục
              </h2>
              <ul className="flex flex-col mt-6 gap-4">
                <Link
                  href="/"
                  className="group flex items-center justify-between pb-2 border-b border-b-[#F1F5F7] gap-5">
                  <li className="text-lg font-medium text-dark-200 group-hover:text-green-200">
                    Tất cả
                  </li>
                  <span className="text-lg font-medium text-gray-50 group-hover:text-green-200">
                    108
                  </span>
                </Link>
                <Link
                  href="/"
                  className="group flex items-center justify-between pb-2 border-b border-b-[#F1F5F7] gap-5">
                  <li className="text-lg font-medium text-dark-200 group-hover:text-green-200">
                    Thiết Kế Website
                  </li>
                  <span className="text-lg font-medium text-gray-50 group-hover:text-green-200">
                    36
                  </span>
                </Link>
                <Link
                  href="/"
                  className="group flex items-center justify-between pb-2 border-b border-b-[#F1F5F7] gap-5">
                  <li className="text-lg font-medium text-dark-200 group-hover:text-green-200">
                    Thiết Kế App Mobile
                  </li>
                  <span className="text-lg font-medium text-gray-50 group-hover:text-green-200">
                    13
                  </span>
                </Link>
                <Link
                  href="/"
                  className="group flex items-center justify-between pb-2 border-b border-b-[#F1F5F7] gap-5">
                  <li className="text-lg font-medium text-dark-200 group-hover:text-green-200">
                    Quản Lý Sản Xuất
                  </li>
                  <span className="text-lg font-medium text-gray-50 group-hover:text-green-200">
                    25
                  </span>
                </Link>
                <Link
                  href="/"
                  className="group flex items-center justify-between pb-2 border-b border-b-[#F1F5F7] gap-5">
                  <li className="text-lg font-medium text-dark-200 group-hover:text-green-200">
                    Quản Lý Bán Hàng
                  </li>
                  <span className="text-lg font-medium text-gray-50 group-hover:text-green-200">
                    22
                  </span>
                </Link>
                <Link
                  href="/"
                  className="group flex items-center justify-between pb-2 border-b border-b-[#F1F5F7] gap-5">
                  <li className="text-lg font-medium text-dark-200 group-hover:text-green-200">
                    Báo Chí Nói Về FOSO
                  </li>
                  <span className="text-lg font-medium text-gray-50 group-hover:text-green-200">
                    7
                  </span>
                </Link>
                <Link
                  href="/"
                  className="group flex items-center justify-between pb-2 border-b border-b-[#F1F5F7] gap-5">
                  <li className="text-lg font-medium text-dark-200 group-hover:text-green-200">
                    Tin Tức FOSO
                  </li>
                  <span className="text-lg font-medium text-gray-50 group-hover:text-green-200">
                    5
                  </span>
                </Link>
              </ul>
            </div>

            {/* Support chat blocks */}
            <SupportBlock />
          </div>
        </div>

        <img
          src="/images/global/bg_right.png"
          alt="imFage"
          title="image"
          width={"auto"}
          height={"auto"}
          className="absolute right-0 bottom-0 z-[0]"
        />

        {/* Pagination */}
        <div className="relative container py-10 z-[1]">
          <Pagination />
        </div>
      </div>
    </div>
  );
}
