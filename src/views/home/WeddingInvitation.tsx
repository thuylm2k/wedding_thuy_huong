import Image from "next/image";
import InvitationCard from "@/components/InvitationCard";
// import "@/assets/styles/wedding_invitation.scss";
import { useEffect } from "react";
import { Mea_Culpa, Playball } from "next/font/google";

const playball = Playball({
  weight: ["400", "400"],
  subsets: ["latin"],
});

const mea_Culpa = Mea_Culpa({
  weight: ["400", "400"],
  subsets: ["latin"],
});

const WeddingInvitation = () => {
  useEffect(() => {
    setInterval(() => {
      heart();
    }, 100);
  }, []);

  function heart() {
    const el = document.getElementById("wedding_invitation");
    let e = document.createElement("div");
    e.setAttribute("class", "heart");
    el?.appendChild(e);
    e.style.left = Math.random() * +innerWidth + "px";

    let size = Math.random() * 12;
    let duration = Math.random() * 3;

    e.style.fontSize = 12 + size + "px";
    e.style.animationDuration = 2 + duration + "px";

    setTimeout(() => {
      el?.removeChild(e);
    }, 5000);
  }

  return (
    <div
      id="wedding_invitation"
      className="w-full lg:h-screen xl:py-4 flex flex-col lg:flex-row flex-nowrap justify-center"
    >
      <div className="lg:hidden relative w-fit h-full lg:py-2 lg:pr-2 lg:rounded-r-xl z-10 lg:shadow-[inset_0_0_8px_8px_rgba(255,115,140,0.5)]">
        <div className="w-fit h-full flex flex-row flex-nowrap justify-center gap-2">
          <Image
            width={3072}
            height={4608}
            src="/images/img_wedding_01_authentic.JPG"
            alt=""
            className="w-fit h-full object-contain lg:rounded-r-xl"
          />
        </div>
      </div>
      <InvitationCard />
      <div className="hidden lg:block relative w-fit h-full lg:py-2 lg:pr-2 lg:rounded-r-xl z-10 lg:shadow-[inset_0_0_8px_8px_rgba(255,115,140,0.5)]">
        <div className="w-fit h-full flex flex-row flex-nowrap justify-center gap-2">
          <Image
            width={3072}
            height={4608}
            src="/images/img_wedding_01_authentic.JPG"
            alt=""
            className="w-fit h-full object-contain lg:rounded-r-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default WeddingInvitation;
