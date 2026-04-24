import logo from "@/assets/logo.png";
import Image from "next/image";
import { compareAsc, format } from "date-fns";
const Header = () => {
  return (
    <div className="w-full flex flex-col items-center text-center">
      <Image
        src={logo}
        width={300}
        height={200}
        alt="logo"
        className="mx-auto"
      />
      <h2>Journalism Without Fear of Favour</h2>
      <p>{format(new Date(), "EEEE, MMM-dd, yyyy")}</p>
    </div>
  );
};

export default Header;