import { GoArrowUpRight } from "react-icons/go";

const SupportBlock = () => {
  return (
    <div className="flex lg:flex-col md:flex-row flex-col gap-8">
      <div className="lg:w-full md:w-1/2 w-full bg-gradient-to-tr from-[#013DA0] to-[#0375F3] py-10 rounded-lg">
        <img
          src="/images/advertisement/adv_2.png"
          alt="Digital illustration"
          width="auto"
          height="auto"
          className="mx-auto"
        />

        <div className="px-6">
          <div className="flex items-center justify-center mt-10 gap-5">
            <img
              src="/images/advertisement/adv_4.png"
              alt="Digital illustration"
              width="auto"
              height="auto"
            />

            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold text-white text-center">
                Miễn phí dùng thử
              </h3>
              <img
                src="/images/advertisement/adv_3.png"
                alt="Digital illustration"
                width="auto"
                height="auto"
              />
            </div>
          </div>

          <button className="w-full flex items-center justify-between text-white text-sm font-bold rounded-5xl h-[50px] mt-8 px-6 py-3 border-2 border-white gap-10">
            Tham gia ngay
            <GoArrowUpRight className="size-[18px] min-w-[18px]" />
          </button>
        </div>
      </div>

      <div className="lg:w-full md:w-1/2 w-full bg-gradient-to-tr from-[#013DA0] to-[#0375F3] py-10 rounded-lg">
        <img
          src="/images/advertisement/adv_5.png"
          alt="Digital illustration"
          width="auto"
          height="auto"
          className="mx-auto"
        />

        <div className="px-6">
          <p className="text-lg font-bold md:text-left text-center text-white my-6">
            Gia nhập cộng đồng FMRP Việt – Kết nối, chia sẻ, cùng phát triển!
          </p>

          <button className="w-full flex items-center justify-between text-white text-sm font-bold rounded-5xl h-[50px] px-6 py-3 border-2 border-white gap-10">
            Tham gia ngay
            <GoArrowUpRight className="size-[18px] min-w-[18px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupportBlock;
