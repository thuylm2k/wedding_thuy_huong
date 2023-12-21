import { Playball } from "next/font/google";
import Image from "next/image";

const playball = Playball({
  weight: ["400", "400"],
  subsets: ["latin"],
});

const GibtsWedding = () => {
  return (
    <div
      className={`${playball.className} w-full my-2 lg:my-6 px-2 lg:px-32 flex flex-col flex-nowrap items-center justify-center content-center gap-y-2 lg:gap-y-6 text-[#873d32]`}
    >
      <p className="text-2xl lg:text-5xl font-semibold underline underline-offset-8">
        Quà Cưới
      </p>

      <p className="w-full lg:w-2/3 text-xl lg:text-2xl text-center">
        Mình rất muốn được chụp chung với bạn những tấm hình kỷ niệm vì vậy hãy
        đến sớm hơn một chút bạn yêu nhé! Đám cưới của chúng mình sẽ trọn vẹn
        hơn khi có thêm lời chúc phúc và sự hiện diện của các bạn.
      </p>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-2">
        {/* Gibts Bride */}
        <div>
          <section className="flex flex-col justify-center items-center lg:gap-2 text-xl lg:text-2xl">
            <p className="text-2xl lg:text-3xl font-semibold">Cô Dâu</p>

            <p className="flex flex-row flex-nowrap items-center gap-3">
              <span>Tên Tài Khoản:</span>
              <span>Bùi Thị Hương</span>
            </p>

            <p className="flex flex-row flex-nowrap items-center gap-3">
              <span>STK:</span>
              <span>19033080944019</span>
            </p>

            <p>TechComBank</p>
          </section>
          <div className="flex flex-col justify-center items-center">
            <Image
              width={546}
              height={697}
              src="/images/img_QR_Bride.jpg"
              alt="QR"
              className="w-[300px] object-contain rounded"
            />
          </div>
          <div
            className="mt-3 rounded-lg"
            style={{ boxShadow: "0 0 6px 6px rgba(255,255,255,1)" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d8925.856993886964!2d105.41293301428117!3d19.84585148213314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDUwJzQyLjQiTiAxMDXCsDI1JzAzLjciRQ!5e0!3m2!1svi!2s!4v1702835325657!5m2!1svi!2s"
              className="w-full h-[300px] rounded-lg"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="">
          <Image
            width={3072}
            height={4608}
            src="/images/img_wedding_05_authentic.jpg"
            alt=""
            className="object-contain rounded"
          />
        </div>
        {/* Gibts Groom */}
        <div>
          <section className="flex flex-col justify-center items-center lg:gap-2 text-xl lg:text-2xl">
            <p className="text-2xl lg:text-3xl font-semibold">Chú Rể</p>

            <p className="flex flex-row flex-nowrap items-center gap-3">
              <span>Tên Tài Khoản:</span>
              <span>Lê Minh Thủy</span>
            </p>

            <p className="flex flex-row flex-nowrap items-center gap-3">
              <span>STK:</span>
              <span>9968863999</span>
            </p>

            <p>VPBank</p>
          </section>
          <div className="flex flex-col justify-center items-center">
            <Image
              width={546}
              height={697}
              src="/images/img_QR_groom.jpg"
              alt="QR"
              className="w-[300px] object-contain rounded"
            />
          </div>
          <div
            className="mt-3 rounded-lg"
            style={{ boxShadow: "0 0 6px 6px rgba(255,255,255,1)" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2653.6051303352624!2d105.41834007315184!3d19.849920780547368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3136e80f9a64c8af%3A0xf740c4b3ccc037b4!2zbMOgbmcgU3VuZywgWHXDom4gUGjDuiwgVGjhu40gWHXDom4sIFRoYW5oIEhvw6EsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1702835248530!5m2!1svi!2s"
              className="w-full h-[300px] rounded-lg"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GibtsWedding;
