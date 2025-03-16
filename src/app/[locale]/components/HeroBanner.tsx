import { GoArrowUpRight } from "react-icons/go";

const HeroBanner = () => {
  return (
    <div className="bg-blue-600 bg-gradient-to-r from-[#013DA0] to-[#0375F3] text-white rounded-lg my-6 flex md:flex-row flex-col-reverse items-end md:gap-20 gap-5">
      <div className="md:w-1/2 w-full md:py-10 py-5 md:pl-10 md:px-0 px-5">
        <h3 className="lg:text-4xl md:text-3xl text-2xl font-bold mb-1 md:text-left text-center">
          Giải pháp công đồng FMRP - Kết nối, chia sẻ, cùng phát triển!
        </h3>
        <button className="md:w-fit w-full flex md:justify-start justify-between items-center text-white text-sm font-bold rounded-5xl h-[50px] mt-8 px-6 py-3 border-2 border-white gap-10">
          Tham gia ngay
          <GoArrowUpRight className="size-[18px] min-w-[18px]" />
        </button>
      </div>
      <div className="md:w-1/2 w-full flex md:justify-end justify-center">
        <img
          src="/images/advertisement/adv_1.png"
          alt="Digital illustration"
          width="auto"
          height="auto"
        />
      </div>
    </div>
  );
};

export default HeroBanner;
