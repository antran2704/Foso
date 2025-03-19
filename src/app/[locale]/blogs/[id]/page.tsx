import { Fragment } from "react";

import Breadcrumb from "~/app/components/Breadcrumb";
import SupportBlock from "~/app/components/Support";
import BlogItem from "~/app/components/Blog/Item";
import TableContent from "./components/TableContent";
import Progress from "./components/Progress";

const BlogDetailPage = () => {
  return (
    <Fragment>
      <Progress />

      {/* Social */}
      <div className="fixed xl:flex hidden flex-col left-1 bottom-10 gap-2 z-10">
        <p className="text-base font-extrabold text-dark-200">Chia sẻ</p>
        <button className="size-12 flex items-center justify-center border border-green-200 rounded-2xl">
          <img
            src="/images/social/zalo.png"
            alt="social"
            title="social"
            width={"auto"}
            height={"auto"}
            className="size-6 min-w-6"
          />
        </button>
        <button className="size-12 flex items-center justify-center border border-green-200 rounded-2xl">
          <img
            src="/images/social/facebook.png"
            alt="social"
            title="social"
            width={"auto"}
            height={"auto"}
            className="size-6 min-w-6"
          />
        </button>
        <button className="size-12 flex items-center justify-center border border-green-200 rounded-2xl">
          <img
            src="/images/social/x.png"
            alt="social"
            title="social"
            width={"auto"}
            height={"auto"}
            className="size-6 min-w-6"
          />
        </button>
        <button className="size-12 flex items-center justify-center border border-green-200 rounded-2xl">
          <img
            src="/images/social/linkin.png"
            alt="social"
            title="social"
            width={"auto"}
            height={"auto"}
            className="size-6 min-w-6"
          />
        </button>
        <button className="size-12 flex items-center justify-center border border-green-200 rounded-2xl">
          <img
            src="/images/social/reddit.png"
            alt="social"
            title="social"
            width={"auto"}
            height={"auto"}
            className="size-6 min-w-6"
          />
        </button>
      </div>

      <div className="container">
        <div className="mt-2">
          <Breadcrumb
            items={[
              { name: "Trang chủ", href: "/" },
              { name: "Tài nguyên", href: "/" },
              { name: "Blog", href: "/" },
              { name: "Quản lý sản xuất" },
            ]}
          />
        </div>

        <div className="flex lg:flex-row flex-col-reverse justify-between gap-8 mt-4">
          {/* Main content area */}
          <div className="relative lg:w-8/12 w-full py-6">
            <span className="text-xs font-medium text-blue-100 py-1 px-2 bg-blue-50 rounded-lg">
              Quản Lý Sản Xuất
            </span>

            <h1 className="lg:text-4xl md:text-3xl text-2xl mt-4 font-extrabold">
              Quy trình 5S là gì? Cách ứng dụng hiệu quả nên biết
            </h1>

            {/* Info user */}
            <div className="flex items-center justify-between my-6 gap-5">
              <div className="flex items-center gap-3">
                <div className="p-4 border border-[#F1F5F7] rounded-full">
                  <img
                    src="/images/global/logo_icon.png"
                    alt="avartar"
                    width="auto"
                    height="auto"
                    title="avartar"
                    className="w-8 min-w-8"
                  />
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-50">Tác giả</p>
                  <h2 className="text-base font-bold text-dark-200">
                    FOSO Creator
                  </h2>
                </div>
              </div>

              <div className="flex sm:flex-row flex-col sm:items-center gap-6">
                <div className="flex sm:justify-between items-center gap-1">
                  <img
                    src="/images/icons/calender.png"
                    alt="icon"
                    width="auto"
                    height="auto"
                    title="icon"
                    className="size-6 min-w-6"
                  />

                  <p className="text-base font-medium text-gray-50">
                    Cập nhật vào: 17/11/2022
                  </p>
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
                  <p className="text-base font-medium text-gray-50">
                    10 phút đọc
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div id="main_content" className="flex flex-col gap-10">
              <div className="flex flex-col items-center">
                <img
                  src="/images/blogDetailPage/image_1.png"
                  alt="image"
                  width={"auto"}
                  height={"auto"}
                  title="image"
                  className="w-full"
                />
                <h4 className="md:text-base text-sm font-normal text-gray-50 mt-2">
                  Quy trình 5s là gì?
                </h4>
                <div className="flex">
                  <img
                    src="/images/icons/quotes.png"
                    alt="quote"
                    width="auto"
                    height="auto"
                    title="quote"
                    className="h-8"
                  />
                  <p className="md:text-xl text-lg text-center italic font-medium text-dark-200 mt-6">
                    Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là
                    gì? Xây dựng 5S cần yếu tố gì? Bài viết dưới đây của FOSO sẽ
                    trả lời cho bạn thông tin chi tiết về mô hình này cũng như
                    yếu tố tạo nên thành công của quy trình bạn nhé.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <h2
                  id="section-1"
                  className="section md:text-2xl text-xl font-bold text-green-200 px-2"
                >
                  1. Quy trình 5S là gì?
                </h2>

                <p className="text-base font-medium text-dark-400">
                  Quy trình 5S được biết đến là mô hình quản trị tinh gọn trong
                  sản xuất. Nguồn gốc của quy trình 5S là đến từ xứ sở hoa anh
                  đào Nhật Bản.
                </p>

                <p className="text-base font-medium text-dark-400">
                  Quy trình 5S hiện nay đang được rất nhiều nước trên thế giới
                  vận dụng bởi tính hiệu quả mà 5S mang lại. Quy trình này bao
                  gồm 5 chữ S đầu trong tiếng Nhật:
                </p>

                <ul className="pl-6 list-disc">
                  <li className="list-item items-center text-base font-bold text-green-200">
                    Seiri{" "}
                    <span className="text-dark-400 font-medium">
                      (Ngăn nắp)
                    </span>
                  </li>
                  <li className="list-item items-center text-base font-bold text-green-200">
                    Seiso{" "}
                    <span className="text-dark-400 font-medium">(Sạch sẽ)</span>
                  </li>
                  <li className="list-item items-center text-base font-bold text-green-200">
                    Seiton{" "}
                    <span className="text-dark-400 font-medium">(Trật tự)</span>
                  </li>
                  <li className="list-item items-center text-base font-bold text-green-200">
                    Shitsuke
                    <span className="text-dark-400 font-medium">(Kỷ luật)</span>
                  </li>
                  <li className="list-item items-center text-base font-bold text-green-200">
                    Seiketsu
                    <span className="text-dark-400 font-medium">
                      (Tiêu chuẩn hóa)
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-5">
                <h2
                  id="section-2"
                  className="section md:text-2xl text-xl font-bold text-green-200 px-2"
                >
                  2. Lợi ích quy trình 5S đem lại
                </h2>

                <p className="text-base font-medium text-dark-400">
                  Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể hiện cho
                  mỗi bước của quy trình với mục đích cải tiến môi trường làm
                  việc của doanh nghiệp.
                </p>

                <p className="text-base font-medium text-dark-400">
                  Khi doanh nghiệp áp dụng quy trình vào trong tổ chức, doanh
                  nghiệp sẽ tạo nên một môi trường được sắp xếp theo nguyên tắc
                  logic. Nơi làm việc sẽ trở nên sạch sẽ hơn, các công cụ, đồ
                  dùng sẽ được đặt theo vị trí quy định và dễ dàng tìm kiếm khi
                  cần thiết.
                </p>

                <p className="text-base font-medium text-dark-400">
                  Và khi doanh nghiệp áp dụng như vậy cũng hình thành tạo ra
                  thói quen tốt cho mỗi nhân viên. Và từ đó, cũng góp phần vào
                  tạo nên một văn hóa doanh nghiệp tích cực
                </p>

                <div className="flex flex-col items-center">
                  <img
                    src="/images/blogDetailPage/image_2.png"
                    alt="image"
                    width={"auto"}
                    height={"auto"}
                    title="image"
                    className="w-full"
                  />
                  <h4 className="md:text-base text-sm font-normal text-gray-50 mt-2">
                    Tại sao doanh nghiệp cần quy trình 5S?
                  </h4>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <h2
                  id="section-3"
                  className="section md:text-2xl text-xl font-bold text-green-200 px-2"
                >
                  3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?
                </h2>

                <p className="text-base font-medium text-dark-400">
                  Có thể nói quy trình được áp dụng rộng rãi tại các doanh
                  nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng
                  chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây
                  là các lý do vì sao bạn nên lựa chọn quy trình:
                </p>

                <div>
                  <h3
                    id="section-3.1"
                    className="section text-base font-medium text-green-200 mb-1"
                  >
                    3.1 Cải thiện rõ nét môi trường làm việc
                  </h3>
                  <p className="text-base font-medium text-dark-400">
                    Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn,
                    gọn gàng hơn và có tổ chức hơn. Điều này tạo ra một không
                    gian làm việc hiệu quả cho từng cá nhân trong doanh nghiệp.
                  </p>
                </div>

                <div>
                  <h3
                    id="section-3.2"
                    className="section text-base font-medium text-green-200 mb-1"
                  >
                    3.2 Tiết kiệm thời gian đáng kể
                  </h3>
                  <p className="text-base font-medium text-dark-400">
                    Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm
                    được thời gian đáng kể khi không còn mất nhiều thời gian tìm
                    kiếm đồ dùng, máy móc cần sử dụng trong quá trình làm việc.
                    Khi mọi thứ đều có trật tự, mọi sự tìm kiếm đều trở nên dễ
                    dàng.
                  </p>
                </div>

                <div>
                  <h3
                    id="section-3.3"
                    className="section text-base font-medium text-green-200 mb-1"
                  >
                    3.3 Tăng năng suất làm việc
                  </h3>
                  <p className="text-base font-medium text-dark-400">
                    Nhờ vào quy tắc 5S, bằng cách loại bỏ những thứ không cần
                    thiết, tăng cường sắp xếp và vệ sinh, nhân viên có thể dễ
                    dàng tìm kiếm và sử dụng các dụng cụ, thiết bị và tài liệu,
                    giúp tiết kiệm thời gian và tăng năng suất làm việc.
                  </p>
                </div>

                <div>
                  <h3
                    id="section-3.4"
                    className="section text-base font-medium text-green-200 mb-1"
                  >
                    3.4 Tiết kiệm chi phí
                  </h3>
                  <p className="text-base font-medium text-dark-400">
                    Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng
                    phí và sử dụng tài nguyên hiệu quả hơn, doanh nghiệp có thể
                    giảm thiểu chi phí vận hành đáng kể cho doanh nghiệp của
                    mình.
                  </p>
                </div>

                <div>
                  <h3
                    id="section-3.5"
                    className="section text-base font-medium text-green-200 mb-1"
                  >
                    3.5 Tăng chất lượng sản phẩm
                  </h3>
                  <p className="text-base font-medium text-dark-400">
                    5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn
                    gàng. Từ đó, giúp tăng cường chất lượng sản phẩm và giảm
                    thiểu lỗi sản xuất không mong muốn.
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <img
                    src="/images/blogDetailPage/image_3.png"
                    alt="image"
                    width={"auto"}
                    height={"auto"}
                    title="image"
                    className="w-full"
                  />
                  <h4 className="md:text-base text-sm font-normal text-gray-50 mt-2">
                    Quy trình 5s gồm các bước
                  </h4>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <h2
                  id="section-4"
                  className="section md:text-2xl text-xl font-bold text-green-200 px-2"
                >
                  4. Quy trình 5S gồm các bước
                </h2>

                <p className="text-base font-medium text-dark-400">
                  5S là một phương pháp quản lý tổ chức, sắp xếp và tăng cường
                  hiệu quả làm việc trong một tổ chức hoặc doanh nghiệp. 5S bao
                  gồm năm bước cơ bản sau:
                </p>

                <div>
                  <h3
                    id="section-4.1"
                    className="section text-base font-medium text-green-200 mb-1"
                  >
                    4.1 Seiri (Ngăn nắp)
                  </h3>
                  <p className="text-base font-medium text-dark-400">
                    Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn
                    nắp, nhằm tổ chức và loại bỏ những thứ dư thừa, không cần
                    thiết để tạo ra một không gian làm việc sạch sẽ, gọn gàng và
                    tiết kiệm thời gian.
                  </p>
                </div>

                <div>
                  <h3
                    id="section-4.2"
                    className="section text-base font-medium text-green-200 mb-1"
                  >
                    4.2 Seiton (Sắp xếp)
                  </h3>
                  <p className="text-base font-medium text-dark-400">
                    Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ,
                    thiết bị, tài liệu trong doanh nghiệp một cách gọn gàng để
                    giúp tìm kiếm và sử dụng chúng một cách dễ dàng.
                  </p>
                </div>

                <div>
                  <h3
                    id="section-4.3"
                    className="section text-base font-medium text-green-200 mb-1"
                  >
                    4.3 Seiso (Vệ sinh)
                  </h3>
                  <p className="text-base font-medium text-dark-400">
                    Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá
                    nhân trong doanh nghiệp sẽ giữ cho môi trường làm việc luôn
                    sạch sẽ. Và việc vệ sinh thường xuyên như vậy sẽ giúp giảm
                    thiểu sự lây nhiễm bệnh tật và tăng cường sức khỏe cho mỗi
                    nhân viên.
                  </p>
                </div>

                <div>
                  <h3
                    id="section-4.4"
                    className="section text-base font-medium text-green-200 mb-1"
                  >
                    4.4 Seiketsu (Tiêu chuẩn hóa)
                  </h3>
                  <p className="text-base font-medium text-dark-400">
                    Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa.
                    Bước này giúp đặt ra các tiêu chuẩn về sự sạch sẽ, gọn gàng
                    và cách thức sử dụng các dụng cụ, thiết bị, tài liệu.
                  </p>
                </div>

                <div>
                  <h3
                    id="section-4.5"
                    className="section text-base font-medium text-green-200 mb-1"
                  >
                    4.5 Shitsuke (Kỷ luật)
                  </h3>
                  <p className="text-base font-medium text-dark-400">
                    Đây được xem là bước cuối cùng trong quy trình. Và bước này
                    đóng vai trò quan trọng trong duy trì tính hiệu quả của quy
                    tắc 5S trong dài hạn. Bước này đòi hỏi việc tạo ra một hệ
                    thống kỷ luật và giám sát chặt chẽ để đảm bảo mọi người
                    trong tổ chức duy trì và tuân thủ theo quy trình.
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <img
                    src="/images/blogDetailPage/image_4.png"
                    alt="image"
                    width={"auto"}
                    height={"auto"}
                    title="image"
                    className="w-full"
                  />
                  <h4 className="md:text-base text-sm font-normal text-gray-50 mt-2">
                    Quy trình 5s gồm các bước
                  </h4>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <h2
                  id="section-5"
                  className="section md:text-2xl text-xl font-bold text-green-200 px-2"
                >
                  5. Quy trình được thực hiện như sau:
                </h2>

                <p className="text-base font-medium text-dark-400">
                  Có thể nói quy trình được áp dụng rộng rãi tại các doanh
                  nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng
                  chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây
                  là các lý do vì sao bạn nên lựa chọn quy trình:
                </p>

                <div>
                  <h3
                    id="section-5.1"
                    className="section text-base font-medium text-green-200 mb-1"
                  >
                    5.1 Giai đoạn chuẩn bị
                  </h3>
                  <p className="text-base font-medium text-dark-400">
                    Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực
                    đứng ra điều hành và quản lý quá trình thực hiện quy trình
                    5S. Việc phân bổ cụ thể như vậy sẽ giúp quá trình áp dụng
                    quy tắc 5S sẽ hiệu quả hơn.
                  </p>
                </div>

                <div>
                  <h3
                    id="section-5.2"
                    className="section text-base font-medium text-green-200 mb-1"
                  >
                    5.2 Triển khai rộng rãi
                  </h3>
                  <p className="text-base font-medium text-dark-400">
                    Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về
                    quy trình 5S cho tất cả mọi người trong doanh nghiệp nắm rõ
                    kiến thức cũng như cách áp dụng như thế nào vào doanh nghiệp
                    của bạn.
                  </p>
                </div>

                <div>
                  <h3
                    id="section-5.3"
                    className="section text-base font-medium text-green-200 mb-1"
                  >
                    5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp
                  </h3>
                  <p className="text-base font-medium text-dark-400">
                    Đây là bước có thể khiến mọi người không hào hứng trong các
                    bước của quy trình. Doanh nghiệp nên tuyên truyền tích cực
                    và tạo không khí hào hứng cho từng cá nhân.
                  </p>
                </div>

                <div>
                  <h3
                    id="section-5.4"
                    className="section text-base font-medium text-green-200 mb-1"
                  >
                    5.4 Sàng lọc, sắp xếp và đánh giá
                  </h3>
                  <p className="text-base font-medium text-dark-400">
                    Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh
                    toàn bộ doanh nghiệp. Doanh nghiệp cần đưa ra tiêu chuẩn rõ
                    ràng để việc thực hiện sàng lọc và sắp xếp trở nên khoa học
                    hơn, hiệu quả hơn và dễ dàng tìm kiếm sau này
                  </p>
                </div>

                <div>
                  <h3
                    id="section-5.5"
                    className="section text-base font-medium text-green-200 mb-1"
                  >
                    5.5 Đánh giá
                  </h3>
                  <p className="text-base font-medium text-dark-400">
                    Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại
                    quá trình cải tiến và xem xét cần cải tiến phương diện nào
                    hay không trong quá trình thực hiện quy trình 5S.
                  </p>
                </div>
              </div>

              <div id="section-6" className="flex flex-col gap-5">
                <h2 className="section md:text-2xl text-xl font-bold text-green-200 px-2">
                  6. Quy trình 5S có giống với Kaizen?
                </h2>

                <p className="text-base font-medium text-dark-400">
                  Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen
                  hay không? Quy trình 5S với Kaizen là 2 khái niệm khác nhau
                  nhưng giữa chúng có mối quan hệ chặt chẽ với nhau.
                </p>

                <div className="py-3 px-9 border-l-[3px] border-green-200">
                  <p className="text-lg font-medium italic text-dark-200">
                    Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen
                    hay không? Quy trình 5S với Kaizen là 2 khái niệm khác nhau
                    nhưng giữa chúng có mối quan hệ chặt chẽ với nhau.
                  </p>
                </div>

                <div className="py-3 px-9 border-l-[3px] border-green-200">
                  <p className="text-lg font-medium italic text-dark-200">
                    Còn đối với quy tắc 5S, đây là một phương pháp quản lý và
                    cải tiến trong sản xuất. 5S tập trung vào việc sắp xếp, sạch
                    sẽ, sắp đặt, tiêu chuẩn hóa và kỷ luật trong môi trường làm
                    việc.
                  </p>
                </div>

                <p className="text-base font-medium text-dark-400">
                  Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và
                  quy tắc này đóng vai trò quan trọng trong việc tạo ra môi
                  trường làm việc sạch sẽ, an toàn. Quy tắc 5S thường được sử
                  dụng làm bước đầu tiên trong quá trình cải tiến liên tục của
                  phương pháp Kaizen để tạo ra một nền tảng vững chắc cho các
                  hoạt động cải tiến tiếp theo.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <h2
                  id="section-7"
                  className="section md:text-2xl text-xl font-bold text-green-200 px-2"
                >
                  7. Đối tượng nào nên áp dụng 5S?
                </h2>

                <p className="text-base font-medium text-dark-400">
                  Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng
                  rãi ở nhiều ngành công nghiệp và các loại doanh nghiệp khác
                  nhau. Tuy nhiên, 5S phù hợp đặc biệt cho các doanh nghiệp sản
                  xuất, các cơ quan hành chính, các tổ chức phi lợi nhuận và các
                  doanh nghiệp nhỏ.
                </p>

                <p className="text-base font-medium text-dark-400">
                  Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động
                  phức tạp, các trang thiết bị và vật dụng phải được quản lý và
                  sử dụng hiệu quả.
                </p>

                <div className="flex flex-col items-center">
                  <img
                    src="/images/blogDetailPage/image_5.png"
                    alt="image"
                    width={"auto"}
                    height={"auto"}
                    title="image"
                    className="w-full"
                  />
                  <h4 className="md:text-base text-sm font-normal text-gray-50 mt-2">
                    Các yếu tố tạo nên thành công cho quy trình 5S
                  </h4>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <h2
                  id="section-8"
                  className="section md:text-2xl text-xl font-bold text-green-200 px-2"
                >
                  8. Các yếu tố tạo nên thành công cho quy trình 5S
                </h2>

                <p className="text-base font-medium text-dark-400">
                  Và những nhân tố quyết định đến quá trình thành công của quy
                  trình nhằm cải tiến môi trường làm việc của doanh nghiệp đó là
                  từ phía:
                </p>

                <ul className="list-disc pl-5">
                  <li className="text-base font-medium text-dark-400">
                    Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào doanh
                    nghiệp. Bởi đây yếu tố quan trọng nhất để quyết định doanh
                    nghiệp có áp dụng quy tắc này hay không.
                  </li>
                  <li className="text-base font-medium text-dark-400">
                    Chương trình, kế hoạch thực hiện quy trình: Sau khi phía
                    lãnh đạo đồng ý, doanh nghiệp cần bộ phận đưa lên ý tưởng,
                    kế hoạch thực hiện triển khai 5S.
                  </li>
                  <li className="text-base font-medium text-dark-400">
                    Sự tự nguyện tham gia của toàn thể nhân viên: Doanh nghiệp
                    cần huy động và khuyến khích nhân viên tự nguyện thực hiện
                    vì lợi ích chung của tổ chức, của doanh nghiệp.
                  </li>
                </ul>

                <p className="text-base font-medium text-dark-400">
                  Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng
                  cũng là các lưu ý cho mỗi doanh nghiệp cần nắm bắt trước khi
                  bắt tay vào triển khai quy trình 5S vào doanh nghiệp của mình.
                  Và với những thông tin bổ ích như trên, FOSO mong rằng phần
                  nào giúp được doanh nghiệp của bạn phát triển, cải tiến vượt
                  bậc trong tương lai.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center lg:py-20 py-10 rounded-3xl shadow-md">
              <h4 className="md:text-xl text-lg font-extrabold text-dark-200 mb-1">
                Bạn thấy bài viết như thế nào?
              </h4>
              <p className="text-base font-medium text-dark-200">4 phản hồi</p>

              <div className="flex items-center justify-center flex-wrap mt-6 gap-8">
                <button className="flex flex-col items-center py-1 w-[90px] rounded border-2 border-green-200">
                  <img
                    src="/images/icons/thumb_up.png"
                    alt="icon"
                    title="icon"
                    width={"auto"}
                    height={"auto"}
                    className="size-12 min-w-8"
                  />
                  <p className="text-base font-bold text-green-200">1</p>
                  <p className="text-sm font-medium text-green-200">Hữu ích</p>
                </button>

                <button className="flex flex-col items-center py-1 w-[90px] rounded border-2 border-transparent hover:border-green-200">
                  <img
                    src="/images/icons/green_heart.png"
                    alt="icon"
                    title="icon"
                    width={"auto"}
                    height={"auto"}
                    className="size-12 min-w-8"
                  />
                  <p className="text-base font-bold text-dark-200">2</p>
                  <p className="text-sm font-medium text-dark-200">Yêu thích</p>
                </button>
                <button className="flex flex-col items-center py-1 w-[90px] rounded border-2 border-transparent hover:border-green-200">
                  <img
                    src="/images/icons/star_struck.png"
                    alt="icon"
                    title="icon"
                    width={"auto"}
                    height={"auto"}
                    className="size-12 min-w-8"
                  />
                  <p className="text-base font-bold text-dark-200">0</p>
                  <p className="text-sm font-medium text-dark-200">Thú vị</p>
                </button>
                <button className="flex flex-col items-center py-1 w-[90px] rounded border-2 border-transparent hover:border-green-200">
                  <img
                    src="/images/icons/hushed_face.png"
                    alt="icon"
                    title="icon"
                    width={"auto"}
                    height={"auto"}
                    className="size-12 min-w-8"
                  />
                  <p className="text-base font-bold text-dark-200">1</p>
                  <p className="text-sm font-medium text-dark-200">Bất ngờ</p>
                </button>
                <button className="flex flex-col items-center py-1 w-[90px] rounded border-2 border-transparent hover:border-green-200">
                  <img
                    src="/images/icons/yawning_face.png"
                    alt="icon"
                    title="icon"
                    width={"auto"}
                    height={"auto"}
                    className="size-12 min-w-8"
                  />
                  <p className="text-base font-bold text-dark-200">0</p>
                  <p className="text-sm font-medium text-dark-200">Nhàm chán</p>
                </button>
                <button className="flex flex-col items-center py-1 w-[90px] rounded border-2 border-transparent hover:border-green-200">
                  <img
                    src="/images/icons/pouting_face.png"
                    alt="icon"
                    title="icon"
                    width={"auto"}
                    height={"auto"}
                    className="size-12 min-w-8"
                  />
                  <p className="text-base font-bold text-dark-200">0</p>
                  <p className="text-sm font-medium text-dark-200">Tức giận</p>
                </button>
              </div>
            </div>

            {/* Social */}
            <div className="xl:hidden flex items-center mt-5 gap-2">
              <p className="text-base font-extrabold text-dark-200">Chia sẻ</p>
              <button className="size-12 flex items-center justify-center border border-green-200 rounded-2xl">
                <img
                  src="/images/social/zalo.png"
                  alt="social"
                  title="social"
                  width={"auto"}
                  height={"auto"}
                  className="size-6 min-w-6"
                />
              </button>
              <button className="size-12 flex items-center justify-center border border-green-200 rounded-2xl">
                <img
                  src="/images/social/facebook.png"
                  alt="social"
                  title="social"
                  width={"auto"}
                  height={"auto"}
                  className="size-6 min-w-6"
                />
              </button>
              <button className="size-12 flex items-center justify-center border border-green-200 rounded-2xl">
                <img
                  src="/images/social/x.png"
                  alt="social"
                  title="social"
                  width={"auto"}
                  height={"auto"}
                  className="size-6 min-w-6"
                />
              </button>
              <button className="size-12 flex items-center justify-center border border-green-200 rounded-2xl">
                <img
                  src="/images/social/linkin.png"
                  alt="social"
                  title="social"
                  width={"auto"}
                  height={"auto"}
                  className="size-6 min-w-6"
                />
              </button>
              <button className="size-12 flex items-center justify-center border border-green-200 rounded-2xl">
                <img
                  src="/images/social/reddit.png"
                  alt="social"
                  title="social"
                  width={"auto"}
                  height={"auto"}
                  className="size-6 min-w-6"
                />
              </button>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="lg:w-4/12 w-full lg:py-6 py-0">
            <div className="lg:sticky top-32">
              <TableContent />

              {/* Support chat blocks */}
              <SupportBlock />
            </div>
          </div>
        </div>

        <div className="my-10">
          <h2 className="lg:text-4xl md:text-3xl text-2xl font-extrabold mb-6">
            Bài viết liên quan
          </h2>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {[...new Array(3)].map((item, index) => (
              <BlogItem
                key={index}
                data={{
                  id: index.toString(),
                  title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
                  tag: "Quản Lý Sản Xuất",
                  time: "17/11/2022",
                  duration: "10 phút đọc",
                  image: "/images/article/image_1.png",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BlogDetailPage;
