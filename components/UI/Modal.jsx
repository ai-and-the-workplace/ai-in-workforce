import Image from 'next/image';
import { useContext } from 'react';
import ModalContext from '../../store/modal';
import Button from './Button';
import close from '../../public/icons/close.svg';

export default function Modal() {
  const modalContext = useContext(ModalContext);

  return (
    <div
      className={`fixed inset-0 z-50 bg-darkBlue bg-opacity-60 ${
        modalContext.modal.visible === false && 'hidden'
      }`}
    >
      <div className="absolute top-1/2 left-1/2 w-[min(calc(100%-40px),600px)] -translate-y-1/2 -translate-x-1/2 rounded-3xl bg-grey px-5 pt-20 pb-6 md:rounded-[30px] md:px-12 md:pb-12 md:text-center">
        <Image
          src={close}
          alt="close icon"
          className="transition-300 absolute top-5 right-5 w-9 cursor-pointer hover:scale-105 md:top-8 md:right-8 md:w-10"
          onClick={modalContext.closeModal}
        />
        <h3 className="mb-3 text-3xl font-semibold text-darkBlue md:mb-4 md:text-4xl">
          {modalContext.modal.title}
        </h3>
        <p className="mb-7 text-left text-base text-darkBlue md:mb-12 md:text-lg">
          {modalContext.modal.text}
        </p>
        <Button
          hierarchy="primary"
          font="text-base text-lg xl:text-xl"
          py="py-2 md:py-3"
          px="px-14"
          borderRadius="rounded-full"
          showArrow={true}
          mobileFullWidth={true}
          onClick={modalContext.closeModal}
        >
          Close
        </Button>
      </div>
    </div>
  );
}
