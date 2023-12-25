import Image from "next/image";
import { Playball } from "next/font/google";
import "@/assets/styles/album.scss";
import { useState } from "react";
import PhotoDialog from "@/components/PhotoDialog";

const playball = Playball({
  weight: ["400", "400"],
  subsets: ["latin"],
});

const dataImg = [
  { id: 1, photo: "img_album_01_authentic.JPG" },
  { id: 2, photo: "img_album_02_authentic.jpg" },
  { id: 3, photo: "img_album_03_authentic.jpg" },
  { id: 4, photo: "img_album_04_authentic.jpg" },
  { id: 5, photo: "img_album_05_authentic.jpg" },
  { id: 6, photo: "img_album_06_authentic.jpg" },
  { id: 7, photo: "img_album_07_authentic.jpg" },
  { id: 8, photo: "img_album_08_authentic.jpg" },
  { id: 9, photo: "img_album_09_authentic.jpg" },
  { id: 10, photo: "img_album_10_authentic.jpg" },
  { id: 11, photo: "img_album_11_authentic.jpg" },
  { id: 12, photo: "img_album_12_authentic.jpg" },
];

const Albums = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [photo, setPhoto] = useState<string>("");

  function onCloseModal() {
    setModal(false);
    setPhoto("");
  }
  return (
    <>
      <div className={`${playball.className} my-2 lg:my-6`}>
        <p className="lg:mb-8 text-2xl lg:text-4xl xl:text-5xl text-center font-semibold underline underline-offset-8 text-[#873d32]">
          Albums Chúng Tôi
        </p>

        <div className="container_album">
          {dataImg.map((item) => {
            return (
              <div
                onClick={() => {
                  setPhoto(`/images/albums/${item.photo}`);
                  setModal(true);
                }}
                className="box"
                key={item.id}
              >
                <Image
                  width={3072}
                  height={4608}
                  src={`/images/albums/${item.photo}`}
                  alt={`photo_album_${item.id}`}
                  className="object-contain"
                />
              </div>
            );
          })}
        </div>
      </div>
      {modal && <PhotoDialog onCloseModal={onCloseModal} photo={photo} />}
    </>
  );
};

export default Albums;
