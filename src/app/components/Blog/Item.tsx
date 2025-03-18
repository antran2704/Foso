import { GoArrowRight } from "react-icons/go";
import { IBlog } from "~/app/interfaces/blog";

import { Link } from "~/navigation";

interface Props {
  data: IBlog;
}

const Item = (props: Props) => {
  const { data } = props;

  return (
    <div className="rounded-lg shadow-sm overflow-hidden">
      <div className="relative pb-[100%]">
        <Link href={`/blogs/${data.id}`}>
          <img
            src={data.image}
            alt={data.title}
            title={data.title}
            width={"auto"}
            height={"auto"}
            className="absolute top-0 right-0 left-0 bottom-0 w-full"
          />
        </Link>
      </div>
      <div className="mt-2">
        <span className="text-xs font-medium text-blue-100 py-1 px-2 bg-blue-50 rounded-lg">
          {data.tag}
        </span>

        <Link href={`/blogs/${data.id}`}>
          <h3 className="text-2xl text-dark-200 hover:text-green-200 font-extrabold mb-4 mt-3 line-clamp-2">
            {data.title}
          </h3>
        </Link>
        <div className="flex sm:flex-row flex-col sm:items-center gap-3">
          <div className="flex sm:justify-between items-center gap-1">
            <img
              src="/images/icons/calender.png"
              alt="icon"
              width="auto"
              height="auto"
              title="icon"
              className="size-6 min-w-6"
            />

            <p className="text-base font-medium text-gray-50">{data.time}</p>
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
            <p className="text-base font-medium text-gray-50">{data.duration}</p>
          </div>
        </div>
        <Link
          href={`/blogs/${data.id}`}
          className="flex items-center text-gray-50 hover:text-green-200 text-lg font-semibold mt-4 gap-4">
         Khám phá thêm
          <GoArrowRight className="size-6 min-w-6" />
        </Link>
      </div>
    </div>
  );
};

export default Item;
