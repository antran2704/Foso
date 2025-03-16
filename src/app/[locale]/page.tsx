import Breadcrumb from "../components/Breadcrumb";

export default function HomePage() {
  return (
    <div className="h-[1000px]">
      <div className="max-w-8xl flex items-center justify-center mt-12 px-5 mx-auto">
        <Breadcrumb
          items={[
            { name: "Trang chủ", href: "/" },
            { name: "Tài nguyên", href: "/" },
            { name: "Blog" },
          ]}
        />
      </div>

      <div className="max-w-8xl flex items-center 2xl:justify-between justify-center px-5 lg:py-20 py-5 mx-auto">
        <img
          src="/images/blogPage/calender.png"
          alt="icon"
          title="icon"
          width="auto"
          height="auto"
          className="2xl:block hidden w-[195px]"
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
          className="2xl:block hidden w-[195px]"
        />
      </div>

      <div className="bg-gray-50 min-h-screen font-sans">
        <div className="max-w-7xl mx-auto flex">
          {/* Main content area */}
          <div className="flex-1 px-4 py-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-xl font-bold">Tất Cả Bài Viết</h1>
              <h2 className="text-lg">Tin Mới</h2>
            </div>

            {/* Hero banner */}
            <div className="bg-blue-600 text-white rounded-lg p-6 mb-6 flex items-center">
              <div className="w-3/5">
                <h3 className="text-xl font-bold mb-1">
                  Giải pháp công đồng FMRP - Kết nối, chia sẻ, cùng phát triển!
                </h3>
                <button className="bg-white text-blue-600 px-4 py-1 rounded-md text-sm font-medium mt-3">
                  Xem thêm
                </button>
              </div>
              <div className="w-2/5 flex justify-end">
                <img
                  src="/api/placeholder/180/120"
                  alt="Digital illustration"
                  className="h-32"
                />
              </div>
            </div>

            {/* Blog grid */}
            <div className="grid grid-cols-3 gap-6">
              <div
                className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="bg-blue-600 text-white p-4">
                  <h3 className="text-xl font-bold">test</h3>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-700 mb-4">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. At explicabo aperiam eum rerum voluptatibus eaque commodi quos rem minima modi! Dignissimos facilis debitis beatae ipsa quaerat nostrum magnam provident impedit.
                  </p>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>17/11/2022</span>
                  </div>
                  <a
                    href="#"
                    className="text-blue-600 text-sm font-medium mt-3 block">
                    Xem chi tiết
                  </a>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <div className="flex space-x-2">
                <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100">
                  &lt;
                </button>
                <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full bg-blue-600 text-white">
                  1
                </button>
                <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100">
                  2
                </button>
                <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100">
                  3
                </button>
                <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100">
                  &gt;
                </button>
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="w-72 py-6 px-3 bg-white border-l border-gray-200">
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-3">Danh Mục</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-blue-600 hover:text-blue-700 flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                    Tất cả
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-700 hover:text-blue-600 flex items-center">
                    <span className="w-1.5 h-1.5 bg-transparent border border-gray-300 rounded-full mr-2"></span>
                    Tài liệu tự động
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-700 hover:text-blue-600 flex items-center">
                    <span className="w-1.5 h-1.5 bg-transparent border border-gray-300 rounded-full mr-2"></span>
                    Lưu trữ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-700 hover:text-blue-600 flex items-center">
                    <span className="w-1.5 h-1.5 bg-transparent border border-gray-300 rounded-full mr-2"></span>
                    Thông báo
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-700 hover:text-blue-600 flex items-center">
                    <span className="w-1.5 h-1.5 bg-transparent border border-gray-300 rounded-full mr-2"></span>
                    Tin tức khác
                  </a>
                </li>
              </ul>
            </div>

            {/* Support chat blocks */}
            <div className="space-y-4">
              <div className="bg-blue-600 text-white p-4 rounded-lg">
                <h3 className="font-medium mb-2">Chat với chúng tôi</h3>
                <p className="text-sm mb-3">Hỗ trợ giải đáp thắc mắc</p>
                <button className="bg-white text-blue-600 px-3 py-1 rounded text-sm font-medium">
                  Bắt đầu
                </button>
              </div>
              <div className="bg-blue-600 text-white p-4 rounded-lg">
                <h3 className="font-medium mb-2">Hỗ trợ trực tuyến</h3>
                <p className="text-sm mb-3">
                  Chúng tôi luôn sẵn sàng hỗ trợ bạn
                </p>
                <button className="bg-white text-blue-600 px-3 py-1 rounded text-sm font-medium">
                  Liên hệ ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
