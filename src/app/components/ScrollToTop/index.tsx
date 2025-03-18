"use client";

import clsx from "clsx";
import { MdKeyboardArrowUp } from "react-icons/md";
import useClientY from "~/app/hooks/useClientY";

interface Props {
  classNames?: {
    container?: string;
    icon?: string;
  };
  heightToDisplay?: number;
}

const ScrollToTop = (props: Props) => {
  const { classNames, heightToDisplay = 600 } = props;

  const top = useClientY();

  return (
    <div
      className={clsx(
        "fixed right-2 p-2 bg-[#bdbdbd] hover:bg-[#8d8d8d] rounded-full cursor-pointer transition-all ease-linear z-40",
        [
          top < heightToDisplay
            ? "-bottom-5 opacity-0"
            : "bottom-5 opacity-100",
        ],
        classNames?.container,
      )}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <MdKeyboardArrowUp
        className={clsx("text-3xl text-white", classNames?.icon)}
      />
    </div>
  );
};

export default ScrollToTop;
