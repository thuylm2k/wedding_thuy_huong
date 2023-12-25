import Image from "next/image";

type Props = {
  onCloseModal: () => void;
  photo: string;
};

const PhotoDialog = ({ onCloseModal, photo }: Props) => {
  return (
    <div className="fixed top-0 w-full h-screen flex items-center justify-center bg-black/80 z-50">
      <div className="w-full h-fit min-[420px]:w-fit min-[420px]:h-full relative p-2 py-6 rounded-mb bg-white">
        <button
          onClick={onCloseModal}
          className="w-fit h-fit absolute -top-1 right-0.5"
        >
          <i className="bi bi-x-circle-fill text-[24px] text-slate-700"></i>
        </button>
        <Image
          width={3072}
          height={4608}
          src={photo}
          alt="wedding_01"
          className="w-full h-fit min-[420px]:w-fit min-[420px]:h-full object-contain rounded"
        />
      </div>
    </div>
  );
};

export default PhotoDialog;
