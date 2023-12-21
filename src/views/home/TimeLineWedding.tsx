import { Allison, Playball } from "next/font/google";
import Image from "next/image";

const allison = Allison({
  weight: ["400", "400"],
  subsets: ["latin"],
});

const playball = Playball({
  weight: ["400", "400"],
  subsets: ["latin"],
});

const TimeLineWedding = () => {
  const dayMonth = [];
  for (let i = 1; i <= 31 + 4; i++) {
    const element = i - 4 > 0 ? i - 4 : 0;
    dayMonth.push(element);
  }

  return (
    <div className={`${playball.className} my-2 lg:my-6`}>
      <p className="mb-4 lg:mb-8 text-2xl lg:text-5xl text-center font-semibold underline underline-offset-8 text-[#873d32]">
        Dòng Thời Gian
      </p>

      <div
        className={`flex flex-col lg:flex-row flex-nowrap justify-center items-center gap-20`}
      >
        {/* Timeline Wedding */}
        <div className="w-full lg:w-2/5 px-3 lg:px-0 grid grid-cols-3">
          {/* Timeline I */}
          <div className="py-3 lg:py-4">
            <Image
              width={110}
              height={110}
              src="/icons/ic_timeline_01.png"
              alt=""
              className="w-[80px] lg:w-[110px] object-contain"
            />
          </div>
          <div className="relative flex justify-center">
            <div className="w-1 h-full bg-[#FF7F9B] rounded-t"></div>
            <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col flex-nowrap justify-center items-center">
              <p className="w-max text-lg lg:text-2xl font-bold text-[#D52E3B]">
                29-12-2023
              </p>
              <Image
                width={64}
                height={64}
                src="/icons/ic_heart_timeline.png"
                alt=""
                className="w-[50px] lg:w-[64px] object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col flex-nowrap justify-center content-center items-center lg:gap-3 text-[#D52E3B] leading-6 text-[22px] lg:text-3xl">
            <p className="w-max font-bold">14:00 PM</p>
            <p className="w-max font-bold">Lễ Ăn Hỏi</p>
          </div>

          {/* Timeline II */}
          <div className="py-3 lg:py-4">
            <Image
              width={110}
              height={110}
              src="/icons/ic_timeline_02.png"
              alt=""
              className="w-[80px] lg:w-[110px] object-contain"
            />
          </div>
          <div className="relative flex justify-center">
            <div className="w-1 h-full bg-[#FF7F9B]"></div>
            <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col flex-nowrap justify-center items-center">
              <p className="w-max text-lg lg:text-2xl font-bold text-[#D52E3B]">
                31-12-2023
              </p>
              <Image
                width={64}
                height={64}
                src="/icons/ic_heart_timeline.png"
                alt=""
                className="w-[50px] lg:w-[64px] object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col flex-nowrap justify-center content-center items-center lg:gap-3 text-[#D52E3B] leading-6 text-[22px] lg:text-3xl">
            <p className="w-max font-bold">08:30 AM</p>
            <p className="w-max font-bold">Lễ Đón Dâu</p>
          </div>

          {/* Timeline III */}
          <div className="py-3 lg:py-4">
            <Image
              width={110}
              height={110}
              src="/icons/ic_timeline_03_v2.png"
              alt=""
              className="w-[80px] lg:w-[110px] object-contain"
            />
          </div>
          <div className="relative flex justify-center">
            <div className="w-1 h-full bg-[#FF7F9B]"></div>
            <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center">
              <Image
                width={64}
                height={64}
                src="/icons/ic_heart_timeline.png"
                alt=""
                className="w-[50px] lg:w-[64px] object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col flex-nowrap justify-center content-center items-center lg:gap-3 text-[#D52E3B] leading-6 text-[22px] lg:text-3xl">
            <p className="w-max font-bold">09:30 AM</p>
            <p className="w-max font-bold">Lễ Thành Hôn</p>
          </div>

          {/* Timeline VI */}
          <div className="py-3 lg:py-4">
            <Image
              width={110}
              height={110}
              src="/icons/ic_timeline_04.png"
              alt=""
              className="w-[80px] lg:w-[110px] object-contain"
            />
          </div>
          <div className="relative flex justify-center">
            <div className="w-1 h-full bg-[#FF7F9B]"></div>
            <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center">
              <Image
                width={64}
                height={64}
                src="/icons/ic_heart_timeline.png"
                alt=""
                className="w-[50px] lg:w-[64px] object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col flex-nowrap justify-center content-center items-center lg:gap-3 text-[#D52E3B] leading-6 text-[22px] lg:text-3xl">
            <p className="w-max font-bold">10:30 AM</p>
            <p className="w-max font-bold">Check In</p>
          </div>

          {/* Timeline V */}
          <div className="py-3 lg:py-4">
            <Image
              width={110}
              height={110}
              src="/icons/ic_timeline_05.png"
              alt=""
              className="w-[80px] lg:w-[110px] object-contain"
            />
          </div>
          <div className="relative flex justify-center">
            <div className="w-1 h-full bg-[#FF7F9B] rounded-b"></div>
            <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center">
              <Image
                width={64}
                height={64}
                src="/icons/ic_heart_timeline.png"
                alt=""
                className="w-[50px] lg:w-[64px] object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col flex-nowrap justify-center content-center items-center lg:gap-3 text-[#D52E3B] leading-6 text-[22px] lg:text-3xl">
            <p className="w-max font-bold">10:50 AM</p>
            <p className="w-max font-bold">Tiệc Đãi Khách</p>
          </div>
        </div>

        {/* Date Wedding */}
        <div className="w-full lg:w-1/4 h-full grid grid-cols-1 gap-3">
          <div className="w-full px-3 flex flex-col flex-nowrap justify-center content-center rounded text-[#873d32]">
            <div className="mb-3 flex justify-center items-center text-4xl">
              <span>Save The Date</span>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {/* Day Week */}
              <div className="grid grid-cols-7 gap-2">
                <div className="flex justify-center items-center">
                  <span>T2</span>
                </div>
                <div className="flex justify-center items-center">
                  <span>T3</span>
                </div>
                <div className="flex justify-center items-center">
                  <span>T4</span>
                </div>
                <div className="flex justify-center items-center">
                  <span>T5</span>
                </div>
                <div className="flex justify-center items-center">
                  <span>T6</span>
                </div>
                <div className="flex justify-center items-center">
                  <span>T7</span>
                </div>
                <div className="flex justify-center items-center">
                  <span>CN</span>
                </div>
              </div>
              {/* Day Month */}
              <div className="grid grid-cols-7 content-center gap-x-1.5">
                {dayMonth.map((item, index) => (
                  <div
                    className={`p-3 flex justify-center items-center ${
                      item === 29 || item === 30 || item === 31
                        ? "bg-[url('/icons/ic_heart_date_timeline.png')] bg-contain bg-no-repeat bg-center text-[#fff]"
                        : ""
                    }`}
                    key={index}
                  >
                    <span>{item === 0 ? "" : item} </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <Image
              width={3072}
              height={4608}
              src="/images/img_wedding_04_authentic.jpg"
              alt=""
              className="object-contain rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLineWedding;
