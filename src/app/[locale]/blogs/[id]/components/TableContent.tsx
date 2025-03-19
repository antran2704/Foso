"use client";

import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";
import Collapse from "~/app/components/Collapse";

const TableContent = () => {
  const [currentSection, setCurrentSection] = useState<string>("");

  const initObserver = () => {
    const options: IntersectionObserverInit = {
      rootMargin: "0px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    }, options);

    const sections = document.querySelectorAll(".section");
    sections.forEach((el) => observer.observe(el));
  };

  useEffect(() => {
    initObserver();
  }, []);

  return (
    <Collapse
      title="Nội dung bài viết"
      maxHeight={400}
      classNames={{ wrap: "my-6" }}
    >
      <ul className="flex flex-col mt-6 gap-1">
        <Link href={"#section-1"}>
          <li
            className={clsx("text-lg cursor-pointer", [
              currentSection === "section-1"
                ? "text-green-200 font-bold"
                : "text-dark-200",
            ])}
          >
            1. Quy trình 5S là gì?
          </li>
        </Link>
        <Link href={"#section-2"}>
          <li
            className={clsx("text-lg cursor-pointer", [
              currentSection === "section-2"
                ? "text-green-200 font-bold"
                : "text-dark-200",
            ])}
          >
            2. Lợi ích quy trình 5S đem lại
          </li>
        </Link>
        <Link href={"#section-3"}>
          <li
            className={clsx("text-lg cursor-pointer", [
              currentSection === "section-3"
                ? "text-green-200 font-bold"
                : "text-dark-200",
            ])}
          >
            3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?
          </li>
        </Link>

        <ul className="flex flex-col pl-5 gap-1">
          <Link href={"#section-3.1"}>
            <li
              className={clsx("text-lg cursor-pointer", [
                currentSection === "section-3.1"
                  ? "text-green-200 font-bold"
                  : "text-dark-200",
              ])}
            >
              3.1 Cải thiện rõ nét môi trường làm việc
            </li>
          </Link>

          <Link href={"#section-3.2"}>
            <li
              className={clsx("text-lg cursor-pointer", [
                currentSection === "section-3.2"
                  ? "text-green-200 font-bold"
                  : "text-dark-200",
              ])}
            >
              3.2 Tiết kiệm thời gian đáng kểc
            </li>
          </Link>
          <Link href={"#section-3.3"}>
            <li
              className={clsx("text-lg cursor-pointer", [
                currentSection === "section-3.3"
                  ? "text-green-200 font-bold"
                  : "text-dark-200",
              ])}
            >
              3.3 Tăng năng suất làm việc
            </li>
          </Link>

          <Link href={"#section-3.4"}>
            <li
              className={clsx("text-lg cursor-pointer", [
                currentSection === "section-3.4"
                  ? "text-green-200 font-bold"
                  : "text-dark-200",
              ])}
            >
              3.4 Tiết kiệm chi phí
            </li>
          </Link>

          <Link href={"#section-3.5"}>
            <li
              className={clsx("text-lg cursor-pointer", [
                currentSection === "section-3.5"
                  ? "text-green-200 font-bold"
                  : "text-dark-200",
              ])}
            >
              3.5 Tăng chất lượng sản phẩm
            </li>
          </Link>
        </ul>

        <Link href={"#section-4"}>
          <li
            className={clsx("text-lg cursor-pointer", [
              currentSection === "section-4"
                ? "text-green-200 font-bold"
                : "text-dark-200",
            ])}
          >
            4. Quy trình 5S gồm các bước:
          </li>
        </Link>

        <ul className="flex flex-col pl-5 gap-1">
          <Link href={"#section-4.1"}>
            <li
              className={clsx("text-lg cursor-pointer", [
                currentSection === "section-4.1"
                  ? "text-green-200 font-bold"
                  : "text-dark-200",
              ])}
            >
              4.1 Seiri (Ngăn nắp)
            </li>
          </Link>

          <Link href={"#section-4.2"}>
            {" "}
            <li
              className={clsx("text-lg cursor-pointer", [
                currentSection === "section-1"
                  ? "text-green-200 font-bold"
                  : "text-dark-200",
              ])}
            >
              4.2 Seiton (Sắp xếp)
            </li>
          </Link>

          <Link href={"#section-4.3"}>
            {" "}
            <li
              className={clsx("text-lg cursor-pointer", [
                currentSection === "section-1"
                  ? "text-green-200 font-bold"
                  : "text-dark-200",
              ])}
            >
              4.3 Seiso (Vệ sinh)
            </li>
          </Link>

          <Link href={"#section-4.4"}>
            <li
              className={clsx("text-lg cursor-pointer", [
                currentSection === "section-1"
                  ? "text-green-200 font-bold"
                  : "text-dark-200",
              ])}
            >
              4.4 Seiketsu (Tiêu chuẩn hóa)
            </li>
          </Link>

          <Link href={"#section-4.5"}>
            <li
              className={clsx("text-lg cursor-pointer", [
                currentSection === "section-4.5"
                  ? "text-green-200 font-bold"
                  : "text-dark-200",
              ])}
            >
              4.5 Shitsuke (Kỷ luật)
            </li>
          </Link>
        </ul>

        <Link href={"#section-5"}>
          <li
            className={clsx("text-lg cursor-pointer", [
              currentSection === "section-5"
                ? "text-green-200 font-bold"
                : "text-dark-200",
            ])}
          >
            5. Quy trình được thực hiện như sau:
          </li>
        </Link>

        <ul className="flex flex-col pl-5 gap-1">
          <Link href={"#section-5.1"}>
            <li
              className={clsx("text-lg cursor-pointer", [
                currentSection === "section-5.1"
                  ? "text-green-200 font-bold"
                  : "text-dark-200",
              ])}
            >
              5.1 Giai đoạn chuẩn bị
            </li>
          </Link>

          <Link href={"#section-5.2"}>
            <li
              className={clsx("text-lg cursor-pointer", [
                currentSection === "section-5.2"
                  ? "text-green-200 font-bold"
                  : "text-dark-200",
              ])}
            >
              5.2 Triển khai rộng rãi
            </li>
          </Link>

          <Link href={"#section-5.3"}>
            <li
              className={clsx("text-lg cursor-pointer", [
                currentSection === "section-5.3"
                  ? "text-green-200 font-bold"
                  : "text-dark-200",
              ])}
            >
              5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp
            </li>
          </Link>

          <Link href={"#section-5.4"}>
            <li
              className={clsx("text-lg cursor-pointer", [
                currentSection === "section-5.4"
                  ? "text-green-200 font-bold"
                  : "text-dark-200",
              ])}
            >
              5.4 Sàng lọc, sắp xếp và đánh giá
            </li>
          </Link>

          <Link href={"#section-5.5"}>
            <li
              className={clsx("text-lg cursor-pointer", [
                currentSection === "section-5.5"
                  ? "text-green-200 font-bold"
                  : "text-dark-200",
              ])}
            >
              5.5 Đánh giá
            </li>
          </Link>
        </ul>

        <Link href={"#section-6"}>
          <li
            className={clsx("text-lg cursor-pointer", [
              currentSection === "section-6"
                ? "text-green-200 font-bold"
                : "text-dark-200",
            ])}
          >
            6. Quy trình 5S có giống với Kaizen?
          </li>
        </Link>

        <Link href={"#section-7"}>
          <li
            className={clsx("text-lg cursor-pointer", [
              currentSection === "section-7"
                ? "text-green-200 font-bold"
                : "text-dark-200",
            ])}
          >
            7. Đối tượng nào nên áp dụng 5S?
          </li>
        </Link>

        <Link href={"#section-8"}>
          <li
            className={clsx("text-lg cursor-pointer", [
              currentSection === "section-8"
                ? "text-green-200 font-bold"
                : "text-dark-200",
            ])}
          >
            8. Các yếu tố tạo nên thành công cho quy trình 5S
          </li>
        </Link>
      </ul>
    </Collapse>
  );
};

export default TableContent;
