import Image from "next/image";
import InvitationCard from "@/components/InvitationCard";
import "@/assets/styles/wedding_invitation.scss";
import { useEffect, useState } from "react";
import { Mea_Culpa, Playball } from "next/font/google";
import PhotoDialog from "@/components/PhotoDialog";

const playball = Playball({
  weight: ["400", "400"],
  subsets: ["latin"],
});

const mea_Culpa = Mea_Culpa({
  weight: ["400", "400"],
  subsets: ["latin"],
});

const WeddingInvitation = () => {
  const [modal, setModal] = useState<boolean>(false);

  useEffect(() => {
    setInterval(() => {
      heart();
    }, 300);
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

  function onCloseModal() {
    setModal(false);
  }

  return (
    <>
      <div
        id="wedding_invitation"
        className="w-full sm:h-screen xl:py-4 flex flex-col sm:flex-row flex-nowrap justify-center"
      >
        <div
          onClick={() => {
            setModal(true);
          }}
          className="relative sm:hidden py-3 px-3 rounded-xl z-10 shadow-[inset_0_0_8px_8px_rgba(255,115,140,0.5)]"
        >
          <div className="flex flex-row flex-nowrap justify-center gap-2">
            <Image
              width={3072}
              height={4608}
              src="/images/img_wedding_01_authentic.JPG"
              alt="wedding_01"
              className="object-contain rounded-xl"
            />
          </div>
          <p
            className={`${playball.className} absolute left-0 right-0 top-6 m-0 flex flex-col flex-nowrap justify-center items-center capitalize text-[#D52E3B]`}
            style={{
              textShadow: "0 0 5px #fc3258, 0 0 10px #fc3258, 0 0 20px #fc3258",
            }}
          >
            <span>Ngày đặc biệt của tình yêu và điều diệu kỳ</span>
            <span>31.12.2023</span>
          </p>
        </div>
        <InvitationCard />
        <div className="hidden sm:block relative w-fit h-full lg:py-2 lg:pr-2 lg:rounded-r-xl z-10 lg:shadow-[inset_0_0_8px_8px_rgba(255,115,140,0.5)]">
          <div
            onClick={() => {
              setModal(true);
            }}
            className="w-fit h-full flex flex-row flex-nowrap justify-center gap-2"
          >
            <Image
              width={3072}
              height={4608}
              src="/images/img_wedding_01_authentic.JPG"
              alt=""
              className="w-fit h-full object-contain lg:rounded-r-xl"
            />
          </div>
        </div>
        {modal && (
          <PhotoDialog
            onCloseModal={onCloseModal}
            photo={"/images/img_wedding_01_authentic.JPG"}
          />
        )}
      </div>
    </>
  );
};

export default WeddingInvitation;
