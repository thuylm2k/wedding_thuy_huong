import Image from "next/image";

type Props = {
  onCloseModal: () => void;
  photo: string;
};

const PhotoDialog = ({ onCloseModal, photo }: Props) => {
  return (
    <div className="fixed top-0 w-full h-screen flex items-center bg-black/80 z-50">
      <div className="relative p-2 bg-white rounded-md">
        <button
          onClick={onCloseModal}
          className="w-fit h-fit absolute -top-1 right-0.5"
        >
          <i className="bi bi-x-circle-fill text-[24px] text-black"></i>
        </button>
        <Image
          width={3072}
          height={4608}
          src={photo}
          alt="wedding_01"
          className="object-contain rounded"
        />
      </div>
    </div>
  );
};

export default PhotoDialog;
