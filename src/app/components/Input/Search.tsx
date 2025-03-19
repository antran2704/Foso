import { IoSearchOutline } from "react-icons/io5";

const InputSearch = () => {
  return (
    <div
      className="flex items-center border-2 border-transparent focus-within:border-green-200 px-2 
    shadow-[0px_12px_24px_rgba(145,158,171,0.16)] rounded-xl "
    >
      <input
        placeholder="Tìm kiếm bài viết"
        className="w-full py-5 pl-2 pr-5 outline-none"
      />
      <button className="bg-green-200 p-3 rounded-xl">
        <IoSearchOutline className="text-white size-6 min-w-6" />
      </button>
    </div>
  );
};

export default InputSearch;
