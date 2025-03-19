"use client";

import { useEffect, useState } from "react";
import { BlogItem, BlogItemLoading } from "~/app/components/Blog";

const BlogManage = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timmer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timmer);
    };
  }, []);

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
      {!loading &&
        [...new Array(6)].map((item, index) => (
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

      {loading &&
        [...new Array(6)].map((item, index) => <BlogItemLoading key={index} />)}
    </div>
  );
};

export default BlogManage;
