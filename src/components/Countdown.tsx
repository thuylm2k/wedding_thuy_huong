import Image from "next/image";
import { Splash, Water_Brush, Allison } from "next/font/google";

const allison = Allison({
  weight: ["400", "400"],
  subsets: ["latin"],
});

const Countdown = () => {
  return (
    <div className="w-full flex flex-row flex-nowrap items-center justify-start">

      <div className="relative">
        <div className=" absolute"></div>
      </div>

      {/* <div className="relative w-fit">
        <Image
          width={215}
          height={215}
          src="/svgs/bg_time_day.svg"
          alt=""
          className="w-[180px] h-[180px] object-cover"
        />
        <div
          className={`${allison.className} absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center text-[#D66371]`}
        >
          <section className="text-4xl font-bold">
            <span>0</span>
            <span>0</span>
          </section>
        </div>
      </div>

      <div className="relative w-fit">
        <Image
          width={215}
          height={215}
          src="/svgs/bg_time_hours.svg"
          alt=""
          className="w-[180px] h-[180px] object-cover"
        />
        <div
          className={`${allison.className} absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center text-[#D66371]`}
        >
          <section className="text-4xl font-bold">
            <span>0</span>
            <span>0</span>
          </section>
        </div>
      </div>

      <div className="relative w-fit">
        <Image
          width={215}
          height={215}
          src="/svgs/bg_time_min.svg"
          alt=""
          className="w-[180px] h-[180px] object-cover"
        />
        <div
          className={`${allison.className} absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center text-[#D66371]`}
        >
          <section className="text-4xl font-bold">
            <span>0</span>
            <span>0</span>
          </section>
        </div>
      </div>

      <div className="relative w-fit">
        <Image
          width={215}
          height={215}
          src="/svgs/bg_time_sec.svg"
          alt=""
          className="w-[180px] h-[180px] object-cover"
        />
        <div
          className={`${allison.className} absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center text-[#D66371]`}
        >
          <section className="text-4xl font-bold">
            <span>0</span>
            <span>0</span>
          </section>
        </div>
      </div> */}
    </div>
  );
};

export default Countdown;
