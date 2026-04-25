import { getNewsDetailsid } from "@/lib/data";
import { Description } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

 export const generateMetadata = async({params})=>{
  const { id } = await params;
 const n = await getNewsDetailsid(id);
 return{
  title:n.title,
  description:n.details
 }
};


const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;

 

  const n = await getNewsDetailsid(id);

  if (!n) {
    return <div className="flex justify-center items-center mx-auto text-4xl font-bold">No news found</div>;
  }

  return (
    <div className="border-b border-gray-100 rounded-xl mt-4 shadow-lg pb-4 container mx-auto text-center border p-2">
      <Link href={'/'}><button className="text-red-500 flex items-center"><FaArrowLeft/> Go back</button></Link>
      <div>
        <h1 className="font-semibold ">{n.title}</h1>

        <Image
          src={n.image_url}
          width={400}
          height={180}
          alt={n.title}
          className="mx-auto"
        />
        <p className="font-normal text-xs flex justify-start pt-2">
          {n.details}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <ul className="flex items-center gap-3 ">
          <Link href={`/category/${n.category_id}`}><button className="text-white bg-red-500 px-2 rounded-sm font-semibold  flex items-center"><FaArrowLeft/>See other news</button></Link>
        </ul>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
