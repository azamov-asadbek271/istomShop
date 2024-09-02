import { Outlet } from "react-router-dom"
import { Navbar } from "../components";



function HomeLayout() {
  return (
    <div className="bg-orenj-clr">
      <nav className="con-align">
        <Navbar />
      </nav>
      <main className="con-align ">
        <Outlet />
      </main>
    </div>
  );
}

export default HomeLayout