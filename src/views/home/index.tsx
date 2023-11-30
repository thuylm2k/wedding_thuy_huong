"use client";
import WeddingInvitation from "@/components/WeddingInvitation";
import { Great_Vibes, Playball, Alex_Brush } from "next/font/google";
import Image from "next/image";
import { Fragment } from "react";

const great_Vibes = Great_Vibes({
  weight: ["400", "400"],
  subsets: ["latin"],
});

const playball = Playball({
  weight: ["400", "400"],
  subsets: ["latin"],
});

const alex_Brush = Alex_Brush({
  weight: ["400", "400"],
  subsets: ["latin"],
});

const Home = () => {
  return (
    <Fragment>
      <header className="w-full h-screen max-h-screen p-3 bg-[#FFF]">
        <div className="w-full h-full flex flex-row flex-nowrap bg-[#EEEEEE] rounded-xl">
          <div className="w-1/2 h-full">
            <WeddingInvitation />
          </div>
          <div className="w-1/2 h-full bg-[#FBFCFC]">
          </div>
        </div>
      </header>
      <main></main>
    </Fragment>
  );
};

export default Home;
