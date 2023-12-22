import { Mea_Culpa, Playball } from "next/font/google";
import Image from "next/image";

const playball = Playball({
  weight: ["400", "400"],
  subsets: ["latin"],
});

const mea_Culpa = Mea_Culpa({
  weight: ["400", "400"],
  subsets: ["latin"],
});

const InvitationCard = () => {
  return (
    <div className="w-full lg:w-1/2 h-fit lg:h-full py-2 pl-2 pr-2 lg:pr-0 bg-white xl:rounded-l-xl shadow-[inset_0_0_8px_8px_rgba(255,115,140,0.5)] lg:z-10">
      <div
        className="w-full h-full flex flex-col lg:flex-row flex-nowrap justify-between content-center items-center text-[#873d32] rounded-xl xl:rounded-none xl:rounded-l-xl bg-no-repeat bg-cover"
        style={{
          background: "url('/images/bg_thiep_cuoi_hong.png')",
        }}
      >
        <div className="w-full lg:w-auto lg:h-full  flex flex-row lg:flex-col flex-nowrap justify-between items-center">
          <Image
            width={256}
            height={149}
            src="/icons/ic_hoa_thiep_cuoi_16.png"
            alt="ic_hoa_thiep_cuoi"
            className="w-[60px] xl:w-[120px] object-contain rotate-180"
          />

          <Image
            width={256}
            height={149}
            src="/icons/ic_hoa_thiep_cuoi_17.png"
            alt="ic_hoa_thiep_cuoi"
            className="w-[60px] xl:w-[120px] object-contain rotate-180"
          />
        </div>

        <div className="w-max flex flex-row flex-nowrap justify-center items-center text-[#873d32]">
          <div className="w-max flex flex-col flex-nowrap items-center justify-center text-lg xl:text-2xl gap-1 xl:gap-3">
            <p
              className={`${playball.className} hidden lg:block m-0 capitalize`}
            >
              Ngày đặc biệt của tình yêu và điều diệu kỳ
            </p>

            <section
              className={`${playball.className} flex flex-col flex-nowrap items-center`}
            >
              <p className="m-0 uppercase">Trân trọng kính mời!</p>
              <p className="m-0">Bạn</p>
              <p className="m-0">Tới dự Lê Thành Hôn của hai chúng tôi</p>
            </section>

            <div className="flex flex-col items-center gap-1 xl:gap-2">
              <section
                className={`${mea_Culpa.className} text-5xl xl:text-[68px] leading-[1]`}
              >
                <p className="m-0">Minh Thủy</p>
                <p className="m-0 xl:text-xl text-center">&</p>
                <p className="m-0">Thu Hương</p>
              </section>

              <section
                className={`${playball.className} flex flex-col items-center flex-nowrap`}
              >
                <div className="flex flex-row flex-nowrap items-center justify-center">
                  <hr className="h-0.5 w-12 bg-[#873d32]" />
                  <span>Thời gian</span>
                  <hr className="h-0.5 w-12 bg-[#873d32]" />
                </div>
                <p className="m-0">31.12.2023</p>
                <div className="flex flex-row flex-nowrap items-center justify-center gap-2 xl:gap-3">
                  <span>09 Giờ 00</span>
                  <hr className="h-0.5 w-2 bg-[#873d32]" />
                  <span>Chủ nhật</span>
                  <hr className="h-0.5 w-2 bg-[#873d32]" />
                  <span>Tức 19/11 Quý Mão</span>
                </div>
              </section>

              <section
                className={`${playball.className} flex flex-col items-center flex-nowrap`}
              >
                <div className="flex flex-row flex-nowrap items-center justify-center gap-10">
                  <hr className="h-0.5 w-12 bg-[#873d32]" />
                  <span>Tại</span>
                  <hr className="h-0.5 w-12 bg-[#873d32]" />
                </div>
                <p className="m-0">Nhà Trai</p>
                <p className="m-0">Ba Ngọc, Xuân Phú, Thọ Xuân, Thanh Hóa</p>
              </section>
            </div>

            <p className={`${playball.className} m-0`}>
              Rất hân hạnh được đón tiếp!
            </p>
          </div>
        </div>

        <div className="w-full lg:w-auto lg:h-full  flex flex-row lg:flex-col flex-nowrap justify-between items-center">
          <Image
            width={256}
            height={149}
            src="/icons/ic_hoa_thiep_cuoi_17.png"
            alt="ic_hoa_thiep_cuoi"
            className="w-[60px] xl:w-[120px] object-contain"
          />

          <Image
            width={256}
            height={149}
            src="/icons/ic_hoa_thiep_cuoi_16.png"
            alt="ic_hoa_thiep_cuoi"
            className="w-[60px] xl:w-[120px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default InvitationCard;
