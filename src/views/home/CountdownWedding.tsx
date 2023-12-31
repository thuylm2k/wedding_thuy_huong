import Countdown from "@/components/Countdown";
import Image from "next/image";
import { Splash, Water_Brush, Allison, Playball } from "next/font/google";
import "@/assets/styles/photo_heart.scss";
import { useEffect, useState } from "react";
import "@/assets/styles/count_down_wedding.scss";
import PhotoDialog from "@/components/PhotoDialog";

const splash = Splash({
  weight: ["400", "400"],
  subsets: ["latin"],
});

const water_Brush = Water_Brush({
  weight: ["400", "400"],
  subsets: ["latin"],
});

const allison = Allison({
  weight: ["400", "400"],
  subsets: ["latin"],
});

const playball = Playball({
  weight: ["400", "400"],
  subsets: ["latin"],
});

const CountdownWedding = () => {
  const [modal, setModal] = useState<boolean>(false);

  useEffect(() => {
    setInterval(() => {
      heart();
    }, 800);
  }, []);

  function heart() {
    const el = document.getElementById("countdown_wedding");
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
        id="countdown_wedding"
        className="w-full lg:h-screen my-2 lg:my-6 flex flex-col lg:flex-row flex-nowrap items-center justify-center"
      >
        <div className=" hidden w-full lg:w-1/2 h-full sm:flex flex-col flex-nowrap justify-center content-center items-center lg:gap-y-5 z-10">
          <div className="w-fit h-fit">
            <div className="relative w-fit mb-3 flex flex-col flex-nowrap items-center lg:items-start gap-4 lg:gap-6 xl:gap-14">
              <div className="w-fit">
                <Image
                  width={221}
                  height={73}
                  src="/svgs/ic_heart.svg"
                  alt=""
                  className="w-[250px] lg:w-[300px] object-contain"
                />
              </div>

              <section
                className={`${allison.className} w-fit flex flex-col flex-nowrap items-center lg:items-start text-[#d65a68] text-6xl xl:text-7xl`}
              >
                <div className="w-fit flex flex-col lg:flex-row flex-nowrap items-center lg:gap-1 xl:gap-3">
                  <span>Thu Hương</span>
                  <span className="text-6xl">&</span>
                  <span>Minh Thủy</span>
                </div>
                <div className="mt-3 tracking-widest">31.12.2023</div>
              </section>
            </div>
            <Countdown />
          </div>
        </div>

        <div
          onClick={() => {
            setModal(true);
          }}
          className="relative w-full lg:w-1/2 lg:h-full p-3 lg:py-5 lg:px-8 z-10"
        >
          <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden blur-[5px] z-10">
            <Image
              width={3072}
              height={4608}
              src="/images/img_wedding_03_authentic.jpg"
              alt="wedding_03_blur"
              className="w-full object-contain rounded-xl lg:-translate-y-12"
            />
          </div>
          <div className="relative w-full h-full overflow-hidden rounded-xl shadow-lg shadow-[#fff2f2] z-20">
            <Image
              width={3072}
              height={4608}
              src="/images/img_wedding_03_authentic.jpg"
              alt="wedding_03"
              className="w-full object-contain rounded-xl lg:-translate-y-12"
            />
          </div>

          <div className="lg:hidden w-full h-full pb-1.5 absolute top-0 bottom-0 left-0 right-0 z-30">
            <div className="w-full h-full flex flex-col flex-nowrap justify-end items-center">
              <div className="relative w-fit mb-3 flex flex-col flex-nowrap items-center gap-4 ">
                <div className="w-fit">
                  <Image
                    width={221}
                    height={73}
                    src="/svgs/ic_heart.svg"
                    alt=""
                    className="w-[180px] object-contain"
                  />
                </div>

                <section
                  className={`${allison.className} w-fit flex flex-col flex-nowrap items-center lg:items-start text-[#d65a68] text-4xl`}
                >
                  <div className="w-fit flex flex-col flex-nowrap items-center">
                    <p className="font-black">Thu Hương</p>
                    <p className="">&</p>
                    <p className="font-black">Minh Thủy</p>
                  </div>
                  <div className="mt-3 tracking-widest font-black">
                    31.12.2023
                  </div>
                </section>
              </div>
              <Countdown />
            </div>
          </div>
        </div>
      </div>
      {modal && (
        <PhotoDialog
          onCloseModal={onCloseModal}
          photo={"/images/img_wedding_03_authentic.jpg"}
        />
      )}
    </>
  );
};

export default CountdownWedding;
