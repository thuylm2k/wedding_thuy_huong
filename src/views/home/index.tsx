"use client";
import WeddingInvitationV2 from "@/components/WeddingInvitationV2";
import Image from "next/image";
import { Fragment } from "react";
import GroomBride from "./GroomBride";
import CountdownWedding from "./CountdownWedding";

const Home = () => {
  return (
    <Fragment>
      <header className="w-full h-screen max-h-screen flex flex-nowrap justify-center items-center bg-[#fee2e4]">
        <div
          className="w-fit h-full flex flex-row flex-nowrap justify-center gap-x-1 bg-[#ecaaad] bg-no-repeat bg-cover"
          style={{
            background: "url('/images/bg_thiep_cuoi_hong.png')",
          }}
        >
          <div className="w-fit h-full">
            <WeddingInvitationV2 />
          </div>
          <div
            className="relative w-fit h-full rounded"
            style={{
              background:
                "linear-gradient(138deg, rgba(255,238,241,1) 0%, rgba(255,241,242,1) 25%, rgba(255,238,241,1) 50%, rgba(255,241,242,1) 75%, rgba(255,196,207,1) 100%)",
            }}
          >
            <div className="w-fit h-full flex flex-row flex-nowrap justify-center gap-2">
              <Image
                width={3072}
                height={4608}
                src="/images/TOM03117.JPG"
                alt=""
                className="w-fit h-full z-20 object-contain"
              />
            </div>
          </div>
        </div>
      </header>
      <main>
        <GroomBride />
        <CountdownWedding />
      </main>
    </Fragment>
  );
};

export default Home;
