import { Playball } from "next/font/google";

const playball = Playball({
  weight: ["400", "400"],
  subsets: ["latin"],
});

const Maps = () => {
  return (
    <div
      className={`${playball.className} w-full my-2 lg:my-6 px-2 lg:px-32 text-[#873d32]`}
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-20">
        <div>
          <section className="w-full mb-3 flex flex-col flex-nowrap items-center lg:gap-1 text-xl lg:text-2xl">
            <p className="w-max text-2xl lg:text-3xl font-medium">Nhà Trai</p>

            <p className="flex flex-row flex-nowrap items-center gap-3">
              <span>Ông:</span>
              <span className="w-max">Lê Minh Thái</span>
            </p>
            <p className="flex flex-row flex-nowrap items-center gap-3">
              <span className="w-max">Bà:</span>
              <span className="w-max">Bùi Thị Nhất</span>
            </p>
            {/* <p className="flex flex-row flex-nowrap items-center gap-3">
              <span className="w-max">Chú Rể:</span>
              <span className="w-max">Lê Minh Thủy</span>
            </p> */}

            <p className="w-max flex flex-row flex-nowrap items-center gap-3">
              <span className="w-max">
                Ba Ngọc, Xuân Phú, Thọ Xuân, Thanh Hóa
              </span>
            </p>
          </section>

          <div
            className="rounded-lg"
            style={{ boxShadow: "0 0 8px 8px rgba(0,0,0,0.2)" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2653.6051303352624!2d105.41834007315184!3d19.849920780547368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3136e80f9a64c8af%3A0xf740c4b3ccc037b4!2zbMOgbmcgU3VuZywgWHXDom4gUGjDuiwgVGjhu40gWHXDom4sIFRoYW5oIEhvw6EsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1702835248530!5m2!1svi!2s"
              className="w-full h-[300px] rounded-lg"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div>
          <section className="w-full mb-3 flex flex-col flex-nowrap items-center lg:gap-1 text-xl lg:text-2xl">
            <p className="w-max text-2xl lg:text-3xl font-medium">Nhà Gái</p>

            <p className="flex flex-row flex-nowrap items-center gap-3">
              <span>Ông:</span>
              <span className="w-max">Bùi Văn Bảy</span>
            </p>
            <p className="flex flex-row flex-nowrap items-center gap-3">
              <span>Bà:</span>
              <span className="w-max">Lê Thị Hạt</span>
            </p>
            {/* <p className="flex flex-row flex-nowrap items-center gap-3">
              <span className="w-max">Cô Dâu:</span>
              <span className="w-max">Bùi Thu Hương</span>
            </p> */}
            <p className="w-max flex flex-row flex-nowrap items-center">
              <span className="w-max">
                Ba Ngọc, Xuân Phú, Thọ Xuân, Thanh Hóa
              </span>
            </p>
          </section>

          <div
            className="rounded-lg"
            style={{ boxShadow: "0 0 8px 8px rgba(0,0,0,0.2)" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d8925.856993886964!2d105.41293301428117!3d19.84585148213314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDUwJzQyLjQiTiAxMDXCsDI1JzAzLjciRQ!5e0!3m2!1svi!2s!4v1702835325657!5m2!1svi!2s"
              className="w-full h-[300px] rounded-lg"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maps;
