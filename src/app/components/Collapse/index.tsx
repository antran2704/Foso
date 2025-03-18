"use client";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

interface Props {
  title?: string;
  children: React.ReactNode;
  classNames?: {
    wrap?: string;
  };
  defaultOpen?: boolean;
  maxHeight?: number;
}

const Collapse = (props: Props) => {
  const { children, title, classNames, defaultOpen = true, maxHeight } = props;

  const contentRef = useRef<HTMLDivElement>(null);

  const [show, setShow] = useState<boolean>(defaultOpen);

  const toggleContent = () => {
    if (!contentRef.current) return;

    const contentHeight = maxHeight
      ? maxHeight + "px"
      : contentRef.current.scrollHeight + "px";

    if (contentRef.current.style.maxHeight === contentHeight) {
      contentRef.current.style.maxHeight = "0px";
      setShow(false);
    } else {
      contentRef.current.style.maxHeight = contentHeight;
      setShow(true);
    }
  };

  useEffect(() => {
    if (!defaultOpen && contentRef.current) {
      contentRef.current.style.maxHeight = "0px";
    }

    if (defaultOpen && contentRef.current && maxHeight) {
      contentRef.current.style.maxHeight = maxHeight + "px";
    }

    if (contentRef.current) {
      contentRef.current.style.opacity = "1";
    }
  }, []);

  return (
    <div className={classNames?.wrap}>
      <div
        onClick={toggleContent}
        className="flex items-center justify-between cursor-pointer">
        <h2 className="text-2xl font-extrabold text-dark-100">{title}</h2>

        <MdKeyboardArrowDown
          className={clsx(
            "size-6 min-w-6 text-green-200 transition-all ease-linear duration-100",
            [show && "rotate-180"],
          )}
        />
      </div>
      <div
        ref={contentRef}
        className={clsx(
          "transition-all ease-linear duration-100 pb-5 opacity-0",
          [show ? "overflow-auto" : "overflow-hidden"],
        )}>
        {children}
      </div>
    </div>
  );
};

export default Collapse;
