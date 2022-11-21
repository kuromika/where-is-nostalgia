import { Outlet } from "react-router-dom";
import './styles/layout.css'

const Layout = () => {
  return (
    <main>
      <Outlet></Outlet>
    </main>
  );
}

export default Layout;
