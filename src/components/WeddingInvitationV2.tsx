import {
  Great_Vibes,
  Playball,
  Alex_Brush,
  Dancing_Script,
  Marck_Script,
  Mea_Culpa,
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

const mea_Culpa = Mea_Culpa({
  weight: ["400", "400"],
  subsets: ["latin"],
});

const WeddingInvitationV2 = () => {
  return (
    <div
      id="wedding_invitation"
      className="relative w-full h-full flex justify-center text-[#873d32] rounded"
    >
      <div className="flex flex-col flex-nowrap justify-between items-center">
        <Image
          width={256}
          height={149}
          src="/icons/ic_hoa_thiep_cuoi_16.png"
          alt="ic_hoa_thiep_cuoi"
          className="w-[250px] object-contain rotate-180"
        />

        <Image
          width={256}
          height={149}
          src="/icons/ic_hoa_thiep_cuoi_17.png"
          alt="ic_hoa_thiep_cuoi"
          className="w-[250px] object-contain rotate-180"
        />
      </div>

      <div className="h-full flex flex-row flex-nowrap justify-center items-center gap-x-5 text-[#873d32] z-10">
        <div className="flex flex-col flex-nowrap items-center justify-center gap-4">
          <p className={`${playball.className} text-2xl capitalize`}>
            Ngày đặc biệt của tình yêu và điều diệu kỳ
          </p>

          <section
            className={`${playball.className} flex flex-col flex-nowrap items-center text-2xl`}
          >
            <p className="uppercase">Trân trọng kính mời!</p>
            <p className="text-2xl">Bạn</p>
            <p>Tới dự Lê Thành Hôn của hai chúng tôi</p>
          </section>

          <div className="flex flex-col items-center gap-y-4">
            <section
              className={`${mea_Culpa.className} text-[78px] leading-[1]`}
            >
              <p>Minh Thủy</p>
              <p className="text-3xl text-center">&</p>
              <p>Thu Hương</p>
            </section>

            <section
              className={`${playball.className} flex flex-col items-center flex-nowrap text-xl`}
            >
              <div className="flex flex-row flex-nowrap items-center justify-center gap-4">
                <hr className="h-0.5 w-12 bg-[#873d32]" />
                <span>Thời gian</span>
                <hr className="h-0.5 w-12 bg-[#873d32]" />
              </div>
              <p className="text-4xl">31.12.2023</p>
              <div className="flex flex-row flex-nowrap items-center justify-center gap-3">
                <span>09 Giờ 00</span>
                <hr className="h-0.5 w-2 bg-[#873d32]" />
                <span>Chủ nhật</span>
                <hr className="h-0.5 w-2 bg-[#873d32]" />
                <span>Tức 19/11 Quý Mão</span>
              </div>
            </section>

            <section
              className={`${playball.className} flex flex-col items-center flex-nowrap text-xl`}
            >
              <div className="flex flex-row flex-nowrap items-center justify-center gap-10">
                <hr className="h-0.5 w-12 bg-[#873d32]" />
                <span>Tại</span>
                <hr className="h-0.5 w-12 bg-[#873d32]" />
              </div>
              <p className="text-3xl">Nhà Trai</p>
              <p>Ba Ngọc, Xuân Phú, Thọ Xuân, Thanh Hóa</p>
            </section>

            <p className={`${playball.className} text-xl`}>
              Rất hân hạnh được đón tiếp!
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-nowrap justify-between items-center">
        <Image
          width={256}
          height={149}
          src="/icons/ic_hoa_thiep_cuoi_17.png"
          alt="ic_hoa_thiep_cuoi"
          className="w-[250px] object-contain"
        />

        <Image
          width={256}
          height={149}
          src="/icons/ic_hoa_thiep_cuoi_16.png"
          alt="ic_hoa_thiep_cuoi"
          className="w-[250px] object-contain"
        />
      </div>
    </div>
  );
};

export default WeddingInvitationV2;
