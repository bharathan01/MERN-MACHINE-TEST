import React from "react";
import "./home.css";
import Banner from "../../components/banner/Banners.jsx";
import { useCookies } from 'react-cookie';

function HomePage() {
  const [cookies] = useCookies(["accessToken"]);
  const isAuthenticated = cookies.accessToken;
  console.log(isAuthenticated);
  return (
    <div>
      <Banner content={"Dash board"} />
      <div className="container">
        <h1>Welcome to adminpanel</h1>
      </div>
    </div>
  );
}

export default HomePage;
