import Image from "next/image";
import { Great_Vibes, Playball, Alex_Brush } from "next/font/google";

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
  return (
    <div className="w-full lg:h-screen lg:py-16 lg:px-28 relative overflow-hidden">
      <div
        className={`${playball.className} lg:absolute lg:top-0 lg:left-0 lg:right-0 mb-2 lg:mb-0 lg:mt-3 text-2xl lg:text-5xl text-center font-semibold underline underline-offset-8 text-[#873d32] z-10`}
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
          <div className="w-full overflow-hidden rounded-t-[170px] lg:rounded-b">
            <Image
              width={3072}
              height={4608}
              src="/images/img_bride_01_authentic.jpg"
              alt=""
              className="object-contain lg:-translate-y-12"
            />
          </div>

          <div className="absolute bottom-0 left-0 right-0 py-1 px-3 lg:pb-4 flex flex-col flex-nowrap items-center justify-center text-[#fff] rounded-b-xl backdrop-blur shadow-lg shadow-slate-900/[0.1] border-t border-white/[0.2] bg-slate-900/20">
            <section
              className={`${playball.className} mb-2 flex flex-col flex-nowrap items-center justify-center text-base`}
            >
              <p className="mb-2 text-2xl">Thu Hương</p>
              <p className="text-center">
                Có những khoảnh khắc chúng ta mãi ghi nhớ như cột mốc trong đời.
                Đó là ngày hôm nay khi anh trao chiếc nhẫn cho em trước mặt mọi
                người ♥.
              </p>
            </section>

            <ul className="flex flex-row flex-nowrap gap-7">
              <li>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                  </svg>
                </span>
              </li>

              <li>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-messenger"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76m5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z" />
                  </svg>
                </span>
              </li>

              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-meta"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.217 5.243C9.145 3.988 10.171 3 11.483 3 13.96 3 16 6.153 16.001 9.907c0 2.29-.986 3.725-2.757 3.725-1.543 0-2.395-.866-3.924-3.424l-.667-1.123-.118-.197a54.944 54.944 0 0 0-.53-.877l-1.178 2.08c-1.673 2.925-2.615 3.541-3.923 3.541C1.086 13.632 0 12.217 0 9.973 0 6.388 1.995 3 4.598 3c.319 0 .625.039.924.122.31.086.611.22.913.407.577.359 1.154.915 1.782 1.714m1.516 2.224c-.252-.41-.494-.787-.727-1.133L9 6.326c.845-1.305 1.543-1.954 2.372-1.954 1.723 0 3.102 2.537 3.102 5.653 0 1.188-.39 1.877-1.195 1.877-.773 0-1.142-.51-2.61-2.87l-.937-1.565ZM4.846 4.756c.725.1 1.385.634 2.34 2.001A212.13 212.13 0 0 0 5.551 9.3c-1.357 2.126-1.826 2.603-2.581 2.603-.777 0-1.24-.682-1.24-1.9 0-2.602 1.298-5.264 2.846-5.264.091 0 .181.006.27.018Z"
                  />
                </svg>
              </li>
            </ul>
          </div>
        </div>

        {/* Groom */}
        <div
          className="w-full lg:w-1/4 h-full relative rounded-t-[170px] lg:rounded-b"
          style={{ boxShadow: "0 0 18px 6px rgba(255,255,255,0.3)" }}
        >
          <div className="w-full h-full overflow-hidden rounded-t-[170px] lg:rounded-b">
            <Image
              width={3072}
              height={4608}
              src="/images/img_groom_01_authentic.jpg.jpg"
              alt=""
              className="object-contain scale-150 -translate-y-12 lg:-translate-x-3"
            />
          </div>

          <div className="absolute bottom-0 left-0 right-0 py-1 px-3 lg:pb-4 flex flex-col flex-nowrap items-center justify-center text-[#fff] rounded-b-xl backdrop-blur shadow-lg shadow-slate-900/[0.1] border-t border-white/[0.2] bg-slate-900/20">
            <section
              className={`${playball.className} mb-2 flex flex-col flex-nowrap items-center justify-center text-base`}
            >
              <p className="mb-2 text-2xl">Minh Thủy</p>
              <p className="text-center">
                Sau nhiều lần gặp gỡ mà không lọt được vào mắt nhau thì lần này
                chúng mình quyết định ngã luôn vào nhau, cùng đồng hành với nhau
                ♥
              </p>
            </section>

            <ul className="flex flex-row flex-nowrap gap-7">
              <li>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                  </svg>
                </span>
              </li>

              <li>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-messenger"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76m5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z" />
                  </svg>
                </span>
              </li>

              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-meta"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.217 5.243C9.145 3.988 10.171 3 11.483 3 13.96 3 16 6.153 16.001 9.907c0 2.29-.986 3.725-2.757 3.725-1.543 0-2.395-.866-3.924-3.424l-.667-1.123-.118-.197a54.944 54.944 0 0 0-.53-.877l-1.178 2.08c-1.673 2.925-2.615 3.541-3.923 3.541C1.086 13.632 0 12.217 0 9.973 0 6.388 1.995 3 4.598 3c.319 0 .625.039.924.122.31.086.611.22.913.407.577.359 1.154.915 1.782 1.714m1.516 2.224c-.252-.41-.494-.787-.727-1.133L9 6.326c.845-1.305 1.543-1.954 2.372-1.954 1.723 0 3.102 2.537 3.102 5.653 0 1.188-.39 1.877-1.195 1.877-.773 0-1.142-.51-2.61-2.87l-.937-1.565ZM4.846 4.756c.725.1 1.385.634 2.34 2.001A212.13 212.13 0 0 0 5.551 9.3c-1.357 2.126-1.826 2.603-2.581 2.603-.777 0-1.24-.682-1.24-1.9 0-2.602 1.298-5.264 2.846-5.264.091 0 .181.006.27.018Z"
                  />
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroomBride;
