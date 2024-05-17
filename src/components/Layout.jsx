import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children, isLoggedIn }) => {


  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isLoggedIn={isLoggedIn}/>
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
