import Link from "next/link";

const LeftSideBar = ({ categories, activeId }) => {
  return (
    <div>
      <h2 className=" font-bold text-xl text-center">All Categories</h2>
      {categories.map((category) => {
        return (
          <div className="flex flex-col " key={category.category_id}>
            <span
              className={`${activeId === category.category_id && "text-red-500 bg-red-100"} cursor-pointer mt-2 rounded-md font-semibold text-center text-sm items-center`}
            >
                <Link href={`/category/${category.category_id}`} className="block p-2">
              {category.category_name}

              </Link>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default LeftSideBar;
