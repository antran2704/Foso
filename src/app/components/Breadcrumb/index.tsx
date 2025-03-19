import clsx from "clsx";
import { Fragment, ReactNode } from "react";
import { IBreadcrumbItem } from "~/app/interfaces/breadcrumb";
import { Link } from "~/navigation";

interface Props {
  items: IBreadcrumbItem[];
  seperate?: ReactNode;
}

const Breadcrumb = (props: Props) => {
  const { items, seperate = ">" } = props;

  return (
    <ul className="flex items-center flex-wrap gap-2">
      {items.map((item, index) => {
        const lastIndex: number = items.length - 1;

        return (
          <Fragment key={index}>
            <li>
              <Link
                href={item.href ? item.href : "/"}
                className={clsx("text-sm text-dark-100", [
                  index === lastIndex ? "font-bold" : "hover:text-green-200",
                ])}
              >
                {item.name}
              </Link>
            </li>
            {index < lastIndex && <span>{seperate}</span>}
          </Fragment>
        );
      })}
    </ul>
  );
};

export default Breadcrumb;
