import SideNav from "../layout/Sidebar";
import AppRouter from "./AppRouter";

const Router = () => {
  return (
    <div className="flex min-h-screen">
      <SideNav />
      <AppRouter />
    </div>
  );
};

export default Router;
