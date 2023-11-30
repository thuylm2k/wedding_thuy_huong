import {
  Great_Vibes,
  Playball,
  Alex_Brush,
  Dancing_Script,
  Marck_Script,
} from "next/font/google";
import "../assets/styles/wedding_invitation.scss";
import Image from "next/image";

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

const dancing_Script = Dancing_Script({
  weight: ["400", "400"],
  subsets: ["latin"],
});

const marck_Script = Marck_Script({
  weight: ["400", "400"],
  subsets: ["latin"],
});

const WeddingInvitation = () => {
  return (
    <div
      id="wedding_invitation"
      className="relative w-full h-full flex justify-center bg-blend-screen text-[#b38b29] bg-[#FEF9E7] rounded"
      style={{
        background:
          "radial-gradient(circle, rgba(255,216,236,1) 0%, rgba(250,238,245,1) 50%, rgba(254,250,238,1) 100%)",
      }}
    >
      <Image
        width={256}
        height={149}
        src="/icons/ic_hoa_thiep_cuoi_3.png"
        alt="ic_hoa_thiep_cuoi"
        className="absolute top-0 left-0 w-[200px] object-contain rotate-180"
      />

      <Image
        width={256}
        height={149}
        src="/icons/ic_hoa_thiep_cuoi_8.png"
        alt="ic_hoa_thiep_cuoi"
        className="absolute w-[200px] bottom-0 right-0 object-contain"
      />

      <div className="h-full flex flex-row flex-nowrap justify-center items-center gap-x-5">
        <div className="h-full pb-10 flex flex-row flex-nowrap justify-center items-end gap-1">
          <div className="h-2/4 w-1 bg-[#d6b353] rounded-xl"></div>
          <div className="h-4/5 w-1 bg-[#d6b353] rounded-xl"></div>
        </div>

        <div className="flex flex-col flex-nowrap items-center justify-center gap-4 text-[#d6b557]">
          <p className={`${playball.className} text-xl capitalize`}>
            Ngày đặc biệt của tình yêu và điều diệu kỳ
          </p>

          <section
            className={`${playball.className} flex flex-col flex-nowrap items-center text-lg`}
          >
            <p className="uppercase">Trân trọng kính mời!</p>
            <p className="text-2xl">Bạn</p>
            <p>Tới dự Lê Thành Hôn của hai chúng tôi</p>
          </section>

          <div className="flex flex-col items-center gap-y-4">
            <section
              className={`${alex_Brush.className} text-[64px] leading-[1] text-[#d6b557]`}
            >
              <p>Minh Thủy</p>
              <p className="text-3xl text-center">&</p>
              <p>Thu Hương</p>
            </section>

            <section
              className={`${playball.className} flex flex-col items-center flex-nowrap text-lg`}
            >
              <div className="flex flex-row flex-nowrap items-center justify-center gap-4">
                <hr className="h-0.5 w-12 bg-[#b38b29]" />
                <span>Thời gian</span>
                <hr className="h-0.5 w-12 bg-[#b38b29]" />
              </div>
              <p className="text-4xl">31.12.2023</p>
              <div className="flex flex-row flex-nowrap items-center justify-center gap-3">
                <span>09 Giờ 00</span>
                <hr className="h-0.5 w-2 bg-[#b38b29]" />
                <span>Chủ nhật</span>
                <hr className="h-0.5 w-2 bg-[#b38b29]" />
                <span>Tức 19/11 Quý Mão</span>
              </div>
            </section>

            <section
              className={`${playball.className} flex flex-col items-center flex-nowrap text-lg`}
            >
              <div className="flex flex-row flex-nowrap items-center justify-center gap-10">
                <hr className="h-0.5 w-12 bg-[#b38b29]" />
                <span>Tại</span>
                <hr className="h-0.5 w-12 bg-[#b38b29]" />
              </div>
              <p className="text-3xl">Nhà Trai</p>
              <p>Thôn Ba Ngọc, Xã Xuân Phú, Huyện Thọ Xuân, Tỉnh Thanh Hóa</p>
            </section>

            <p className={`${playball.className} text-lg`}>
              Rất hân hạnh được đón tiếp!
            </p>
          </div>
        </div>

        <div className="h-full pt-10 flex flex-row flex-nowrap justify-center items-start gap-1">
          <div className="h-4/5 w-1 bg-[#d6b353] rounded-xl"></div>
          <div className="h-2/4 w-1 bg-[#d6b353] rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default WeddingInvitation;
