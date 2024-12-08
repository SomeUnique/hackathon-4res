import React from 'react'
import RestraurantNavbar from "./RestraurantNavbar";
import Menu from "./Menu"
import Shop from "./Shop/page"
import AboutUs from "./AboutUs"
import CheckOut from './CheckOut1';
import SignIn from './SignIn';
import CheckOut1 from './CheckOut1';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        < RestraurantNavbar/>
        <Menu/>
        <Shop/>
        <AboutUs/>
        <CheckOut1/>
       <SignIn/>
      </div>
    </main>
  );
}
