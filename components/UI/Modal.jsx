import Image from 'next/image';
import { useContext } from 'react';
import ModalContext from '../../store/modal';
import Button from './Button';
import closeIcon from '../../public/icons/close.svg';

export default function Modal() {
  const modalContext = useContext(ModalContext);

  return (
    <div
      className={`fixed inset-0 z-50 bg-darkBlue bg-opacity-60 ${
        modalContext.modal.visible === false && 'hidden'
      }`}
    >
      <div className="absolute top-1/2 left-1/2 w-[min(calc(100%-40px),680px)] -translate-y-1/2 -translate-x-1/2 rounded-3xl bg-grey px-5 pt-20 pb-6 md:rounded-[30px] md:px-12 md:pb-12 md:pt-24 md:text-center lg:px-20">
        <Image
          src={closeIcon}
          alt="close icon"
          className="transition-300 absolute top-5 right-5 w-9 cursor-pointer hover:scale-105 md:top-8 md:right-8 md:w-10"
          onClick={modalContext.closeModal}
        />
        <h3 className="mb-3 text-3xl font-semibold text-darkBlue md:mb-6 md:text-4xl">
          {modalContext.modal.title}
        </h3>
        <p className="mb-10 text-left text-base leading-relaxed text-darkBlue md:mb-16 md:text-lg md:leading-loose">
          {modalContext.modal.text}
        </p>
        <Button
          hierarchy="primary"
          font="text-base text-lg xl:text-xl"
          py="py-3 md:py-5"
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
