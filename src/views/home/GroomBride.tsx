import Image from "next/image";
import { Great_Vibes, Playball, Alex_Brush } from "next/font/google";
import Link from "next/link";
import PhotoDialog from "@/components/PhotoDialog";
import { useState } from "react";

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

const GroomBride = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [photo, setPhoto] = useState<string>("");

  function onCloseModal() {
    setModal(false);
    setPhoto("");
  }
  return (
    <>
      <div className="w-full lg:h-screen lg:py-16 lg:px-28 relative overflow-hidden">
        <div
          className={`${playball.className} lg:hidden lg:absolute lg:top-0 lg:left-0 lg:right-0 mb-2 lg:mb-0 lg:mt-3 text-2xl lg:text-5xl text-center font-semibold underline underline-offset-8 text-[#873d32] z-10`}
        >
          Cô Dâu & Chú Rể
        </div>
        <div className="hidden lg:block absolute top-0 bottom-0 left-0 right-0 w-full h-full">
          <Image
            width={3072}
            height={4608}
            src="/images/img_wedding_02_authentic.jpg"
            alt=""
            className="object-contain -translate-y-2 blur-[2px]"
          />
        </div>

        <div className="w-full lg:h-full flex flex-col lg:flex-row flex-nowrap lg:justify-between items-center lg:gap-x-12">
          {/* Bride */}
          <div
            className="w-full lg:w-1/4 lg:h-full relative rounded-t-[170px] lg:rounded-b"
            style={{ boxShadow: "0 0 18px 6px rgba(255,255,255,0.3)" }}
          >
            <div
              onClick={() => {
                setPhoto("/images/img_bride_01_authentic.jpg");
                setModal(true);
              }}
              className="w-full overflow-hidden rounded-t-[170px] lg:rounded-b"
            >
              <Image
                width={3072}
                height={4608}
                src="/images/img_bride_01_authentic.jpg"
                alt=""
                className="object-contain lg:-translate-y-12"
              />
            </div>

            <div className="absolute bottom-0 left-0 right-0 py-1 px-3 pb-2 lg:pb-4 flex flex-col flex-nowrap items-center justify-center text-[#fff] rounded-b-xl backdrop-blur shadow-lg shadow-slate-900/[0.1] border-t border-white/[0.2] bg-slate-900/20">
              <section
                className={`${playball.className} mb-2 flex flex-col flex-nowrap items-center justify-center text-base`}
              >
                <p className="mb-2 text-2xl">Cô Dâu Thu Hương</p>
                <p className="text-center">
                  Có những khoảnh khắc chúng ta mãi ghi nhớ như cột mốc trong
                  đời. Đó là ngày hôm nay khi anh trao chiếc nhẫn cho em trước
                  mặt mọi người ♥.
                </p>
              </section>

              <ul className="flex flex-row flex-nowrap items-center gap-7">
                <li>
                  <Link
                    target="_blank"
                    href={"https://www.facebook.com/thuhuong23022000"}
                  >
                    <i className="bi bi-facebook text-[30px]"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Groom */}
          <div
            className="w-full lg:w-1/4 h-full relative rounded-t-[170px] lg:rounded-b"
            style={{ boxShadow: "0 0 18px 6px rgba(255,255,255,0.3)" }}
          >
            <div
              onClick={() => {
                setPhoto("/images/img_groom_01_authentic.jpg.jpg");
                setModal(true);
              }}
              className="w-full h-full overflow-hidden rounded-t-[170px] lg:rounded-b"
            >
              <Image
                width={3072}
                height={4608}
                src="/images/img_groom_01_authentic.jpg.jpg"
                alt=""
                className="object-contain scale-150 -translate-y-12 lg:-translate-x-3"
              />
            </div>

            <div className="absolute bottom-0 left-0 right-0 py-1 px-3 pb-2 lg:pb-4 flex flex-col flex-nowrap items-center justify-center text-[#fff] rounded-b-xl backdrop-blur shadow-lg shadow-slate-900/[0.1] border-t border-white/[0.2] bg-slate-900/20">
              <section
                className={`${playball.className} mb-2 flex flex-col flex-nowrap items-center justify-center text-base`}
              >
                <p className="mb-2 text-2xl">Chú Rể Minh Thủy</p>
                <p className="text-center">
                  Sau nhiều lần gặp gỡ mà không lọt được vào mắt nhau thì lần
                  này chúng mình quyết định ngã luôn vào nhau, cùng đồng hành
                  với nhau ♥
                </p>
              </section>

              <ul className="flex flex-row flex-nowrap items-center gap-7">
                <li>
                  <Link
                    target="_blank"
                    href={"https://www.facebook.com/minhthuyxp"}
                  >
                    <i className="bi bi-facebook text-[30px]"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {modal && <PhotoDialog onCloseModal={onCloseModal} photo={photo} />}
    </>
  );
};

export default GroomBride;
