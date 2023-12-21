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
