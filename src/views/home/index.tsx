"use client";
import { Fragment, useEffect } from "react";
import GroomBride from "./GroomBride";
import CountdownWedding from "./CountdownWedding";
import Albums from "./Albums";
import Maps from "./Maps";
import TimeLineWedding from "./TimeLineWedding";
import GibtsWedding from "./GibtsWedding";
import WeddingInvitation from "./WeddingInvitation";
import "@/assets/styles/home.scss";

const Home = () => {
  // useEffect(() => {
  //   setInterval(() => {
  //     heart();
  //   }, 100);
  // }, []);

  // function heart() {
  //   const el = document.getElementById("home_wedding");
  //   let e = document.createElement("div");
  //   e.setAttribute("class", "heart");
  //   el?.appendChild(e);
  //   e.style.left = Math.random() * +innerWidth + "px";

  //   let size = Math.random() * 12;
  //   let duration = Math.random() * 3;

  //   e.style.fontSize = 12 + size + "px";
  //   e.style.animationDuration = 2 + duration + "px";

  //   setTimeout(() => {
  //     el?.removeChild(e);
  //   }, 5000);
  // }
  return (
    <main id="home_wedding" className="min-h-screen bg-[rgb(255,240,244)]">
      <header>
        <WeddingInvitation />
      </header>
      <div>
        <GroomBride />
        <CountdownWedding />
        <Albums />
        <TimeLineWedding />
        <GibtsWedding />
        <Maps />
      </div>
    </main>
  );
};

export default Home;
