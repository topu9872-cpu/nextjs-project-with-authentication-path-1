import LeftSideBar from "@/components/HomePage/news/LeftSideBar";
import RightSideBar from "@/components/HomePage/news/RightSideBar";

const getCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();

  return data.data.news_category;
};
const getNewsCategoryid = async (category_id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${category_id}`,
  );
  const datas = await res.json();

  return datas.data;
};

const NewsCategoryDetails = async ({ params }) => {
  const { id } = await params;
  const categories = await getCategories();
  const news = await getNewsCategoryid(id);
  return (
    <div>
      <div className="grid grid-cols-12 gap-5 container mx-auto my-10">
        <div className=" col-span-3">
          <LeftSideBar categories={categories} activeId={id} />
        </div>

        <div className=" col-span-6">
          <h2 className=" font-bold text-xl text-center  ">
            All News
            <div className="space-y-4">
              {news.length > 0 ? (
                news.map((n) => {
                  return (
                    <div key={n._id} className="p-4 text-sm rounded-md border">
                      {n.title}
                    </div>
                  );
                })
              ) : (
                <div className="font-bold text-3xl text-center items-center">
                  No news found !
                </div>
              )}
            </div>
          </h2>
        </div>

        <div className=" col-span-3">
          <h2 className="mt-2 rounded-md font-semibold text-center text-sm items-center">
            <RightSideBar />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default NewsCategoryDetails;
