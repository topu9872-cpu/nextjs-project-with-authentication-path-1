import LeftSideBar from "@/components/HomePage/news/LeftSideBar";
import NewsCard from "@/components/HomePage/news/NewsCard";
import RightSideBar from "@/components/HomePage/news/RightSideBar";
import { getCategories, getNewsCategoryid } from "@/lib/data";

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
            News by Catefories
                  </h2>
            <div className="space-y-4">
              {news.length > 0 ? (
                news.map((n) => {
                  return (
                    <NewsCard key={n._id} n={n}/>
                  );
                })
              ) : (
                <div className="font-bold text-3xl text-center items-center">
                  No news found !
                </div>
              )}
            </div>
    
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
