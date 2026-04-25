import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const RightSideBar = () => {
  return (
    <div>
      <h2 className=" font-bold text-xl text-center">Login With</h2>
      <div className="flex mt-2 flex-col items-center gap-4">
        <button className="flex text-nowrap btn text-blue-500 border border-blue-500">
          <FaGoogle /> Login with Google
        </button>
        <button className="flex text-nowrap text-blue-500 border border-blue-500  btn">
          <FaGithub />
          Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default RightSideBar;
