import { Link, Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
const Root = () => {
  return (
    <div className="flex flex-wrap flex-col">
      <div>
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
