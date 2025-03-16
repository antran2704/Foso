import { GoArrowRight, GoArrowLeft } from "react-icons/go";

const Pagination = () => {
  return (
    <div className="flex flex-wrap items-center lg:justify-between justify-center">
      <button className="lg:flex hidden items-center text-gray-100 gap-2">
        <GoArrowLeft className="size-6 min-w-6" />
        <p className="text-base font-semibold">Trang trước</p>
      </button>

      <div className="flex items-center gap-1">
        <button className="w-10 h-10 flex items-center justify-center font-semibold rounded-lg bg-green-50 text-dark-300">
          1
        </button>
        <button className="w-10 h-10 flex items-center justify-center font-semibold text-gray-300 hover:text-dark-300 hover:bg-green-50 rounded-lg">
          2
        </button>
        <button className="w-10 h-10 flex items-center justify-center font-semibold text-gray-300 hover:text-dark-300 hover:bg-green-50 rounded-lg">
          3
        </button>
        <button className="w-10 h-10 flex items-center justify-center font-semibold rounded-lg">
          ...
        </button>
        <button className="w-10 h-10 flex items-center justify-center font-semibold text-gray-300 hover:text-dark-300 hover:bg-green-50 rounded-lg">
          8
        </button>
        <button className="w-10 h-10 flex items-center justify-center font-semibold text-gray-300 hover:text-dark-300 hover:bg-green-50 rounded-lg">
          9
        </button>
        <button className="w-10 h-10 flex items-center justify-center font-semibold text-gray-300 hover:text-dark-300 hover:bg-green-50 rounded-lg">
          10
        </button>
      </div>

      <button className="lg:flex hidden items-center text-gray-300 hover:text-green-200 gap-2">
        <p className="text-base font-semibold">Trang kế tiếp</p>
        <GoArrowRight className="size-6 min-w-6" />
      </button>
    </div>
  );
};

export default Pagination;
