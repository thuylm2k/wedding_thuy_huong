import PhotoHeart from "@/components/PhotoHeart";
import Countdown from "@/components/Countdown";
import Image from "next/image";
import { Splash, Water_Brush, Allison } from "next/font/google";
import "@/assets/styles/photo_heart.scss";

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

const CountdownWedding = () => {
  return (
    <div
      className="w-full h-screen flex flex-row flex-nowrap items-center justify-center"
      style={{
        background:
          "linear-gradient(90deg, rgba(255,235,235,1) 0%, rgba(254,177,183,1) 50%, rgba(247,126,148,1) 100%)",
      }}
    >
      <div className="w-1/2 h-full flex flex-col flex-nowrap justify-center content-center items-center gap-y-5">
        <div className="w-fit flex flex-col flex-nowrap gap-8">
          <div>
            <Image
              width={221}
              height={73}
              src="/svgs/ic_heart.svg"
              alt=""
              className="w-[300px] object-contain"
            />
          </div>

          <section
            className={`${allison.className} w-fit text-[#d65a68] text-8xl`}
          >
            <div className="w-fit flex flex-row flex-nowrap items-center gap-3">
              <p>Thu Hương</p>
              <p>&</p>
              <p>Minh Thủy</p>
            </div>
            <div>31.12.2023</div>
          </section>
        </div>
        <Countdown />
      </div>

      <div className="relative w-1/2 py-5 px-8 h-full">
        <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden blur-[5px]">
          <Image
            width={3072}
            height={4608}
            src="/images/TOM03126.JPG"
            alt=""
            className="w-full object-contain rounded-xl -translate-y-52"
          />
        </div>
        <div className="w-full h-full overflow-hidden rounded-xl shadow-lg shadow-[#fff2f2]">
          <Image
            width={3072}
            height={4608}
            src="/images/TOM03126.JPG"
            alt=""
            className="w-full object-contain rounded-xl -translate-y-52"
          />
        </div>
      </div>
    </div>
  );
};

export default CountdownWedding;
