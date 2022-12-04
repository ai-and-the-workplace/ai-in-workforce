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
      onClick={() => modalContext.closeModal()}
    >
      <div
        className="absolute top-1/2 left-1/2 max-h-[min(calc(100%-180px),800px)] w-[min(calc(100%-40px),720px)] -translate-y-1/2 -translate-x-1/2 overflow-y-scroll rounded-3xl bg-grey px-5 pt-20 pb-10 md:rounded-[30px] md:px-12 md:pb-12 md:pt-24 md:text-center lg:px-20"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={closeIcon}
          alt="close icon"
          className="transition-300 absolute top-5 right-5 w-9 cursor-pointer hover:scale-105 md:top-8 md:right-8 md:w-10"
          onClick={modalContext.closeModal}
        />
        <h3 className="mb-3 text-3xl font-semibold text-darkBlue md:mb-6 md:text-4xl">
          {modalContext.modal.title}
        </h3>
        <div className="body mb-10 flex flex-col gap-3 text-left leading-loose md:mb-12 md:leading-loose">
          {modalContext.modal.text &&
            modalContext.modal.text.map((text, i) => (
              <p key={`text-${i}`} dangerouslySetInnerHTML={{ __html: text }} />
            ))}
        </div>
        <Button
          hierarchy="primary"
          font="text-base text-lg xl:text-xl"
          py="py-3 md:py-4"
          px="px-10"
          borderRadius="rounded-full"
          showArrow={true}
          mobileFullWidth={true}
          classes="justify-center"
          onClick={modalContext.closeModal}
        >
          Close
        </Button>
      </div>
    </div>
  );
}
