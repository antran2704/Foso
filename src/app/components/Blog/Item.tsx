import { GoArrowRight } from "react-icons/go";

import { Link } from "~/navigation";

const Item = () => {
  return (
    <div className="rounded-lg shadow-sm overflow-hidden">
      <div className="relative pb-[100%]">
        <Link href={"/"}>
          <img
            src="/images/article/image_1.png"
            alt="image"
            title="image"
            width={"auto"}
            height={"auto"}
            className="absolute top-0 right-0 left-0 bottom-0 w-full"
          />
        </Link>
      </div>
      <div className="mt-2">
        <span className="text-xs font-medium text-blue-100 py-1 px-2 bg-blue-50 rounded-lg">
          Quản Lý Sản Xuất
        </span>

        <Link href={"/"}>
          <h3 className="text-2xl text-dark-200 hover:text-green-200 font-extrabold mb-4 mt-3 line-clamp-2">
            Tại sao BOM quan trọng trong quản lý sản xuất?
          </h3>
        </Link>
        <div className="flex sm:flex-row flex-col sm:items-center gap-3">
          <div className="flex sm:justify-between items-center gap-1">
            <img
              src="/images/icons/calender.png"
              alt="icon"
              width="auto"
              height="auto"
              title="icon"
              className="size-6 min-w-6"
            />

            <p className="text-base font-medium text-gray-50">17/11/2022</p>
          </div>
          <span className="sm:block hidden w-0.5 h-6 bg-[#D9E1E7]"></span>
          <div className="flex sm:justify-between items-center gap-1">
            <img
              src="/images/icons/clock.png"
              alt="icon"
              width="auto"
              height="auto"
              title="icon"
              className="size-6 min-w-6"
            />
            <p className="text-base font-medium text-gray-50">10 phút đọc</p>
          </div>
        </div>
        <Link
          href="/"
          className="flex items-center text-gray-50 hover:text-green-200 text-lg font-semibold mt-4 gap-4">
         Khám phá thêm
          <GoArrowRight className="size-6 min-w-6" />
        </Link>
      </div>
    </div>
  );
};

export default Item;
