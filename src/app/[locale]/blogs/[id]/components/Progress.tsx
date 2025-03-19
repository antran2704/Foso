"use client";

import { useEffect, useRef } from "react";

const Progress = () => {
  const progressRef = useRef<HTMLDivElement>(null);

  const handleWidth = () => {
    const element = document.getElementById("main_content");

    if (!element) return;

    const top = window.scrollY;
    const totalHeight = element.offsetHeight;

    const width = ((top / totalHeight) as number) * 100;

    if (progressRef.current) progressRef.current.style.width = `${width}%`;
  };

  useEffect(() => {
    handleWidth();
    window.addEventListener("scroll", handleWidth);

    return () => window.removeEventListener("scroll", handleWidth);
  }, []);

  return (
    <div
      ref={progressRef}
      className="fixed top-0 left-0 h-[10px] bg-[#76E6C1] z-10"
    ></div>
  );
};

export default Progress;
