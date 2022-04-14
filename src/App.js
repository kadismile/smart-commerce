import React from "react";
import { useRoutes } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Home from "./pages/home";
import MobileSearch from "./components/Mobile/SearchMobile/mobile-search";
import SideMenu from "./components/Mobile/SideMenu";


function App() {

  const  routes = useRoutes([
    { path: "/", element: <Home /> },
  ]);

  return (
    <>
      <div className="ps-page">
        <Header />
          { routes }
        <Footer/>
      </div>
      <MobileSearch/>
      <SideMenu/>
    </>
  );
}

export default App;
