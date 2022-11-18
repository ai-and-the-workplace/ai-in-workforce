import Image from 'next/image';
import rightChevron from '../../public/icons/right-chevron.svg';

export function ContinueButton({ onClick, disabled = false, children }) {
  return (
    <Button
      hierarchy="primary"
      font="text-base text-lg xl:text-xl"
      py="py-2 md:py-3"
      px="md:pl-8 md:pr-6"
      borderRadius="rounded-full"
      showArrow={true}
      mobileFullWidth={true}
      icon={rightChevron}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export default function Button({
  hierarchy,
  font,
  px,
  py,
  borderRadius,
  icon,
  mobileFullWidth,
  onClick,
  disabled = false,
  children,
}) {
  return (
    <div
      className={`relative gap-2 
                ${
                  hierarchy === 'primary'
                    ? 'bg-gradient-to-r from-darkBlue to-lightBlue'
                    : 'border border-darkBlue bg-white'
                }
                ${px} ${py} ${borderRadius} 
                ${
                  mobileFullWidth
                    ? 'inline-block w-full text-center md:inline-flex md:w-auto'
                    : 'inline-flex'
                }
                ${
                  disabled
                    ? 'opacity-60'
                    : 'transition-300 cursor-pointer hover:-translate-y-0.5'
                }`}
      onClick={() => {
        if (!disabled) {
          onClick();
        }
      }}
    >
      <p
        className={`${hierarchy === 'primary' ? 'text-white' : 'text-darkBlue'} 
                    ${font}`}
      >
        {children}
      </p>
      <Image
        src={icon}
        alt="icon"
        className={`w-6
                  ${
                    mobileFullWidth
                      ? 'absolute right-4 top-1/2 -translate-y-1/2 md:relative md:top-0 md:right-0 md:translate-y-0 '
                      : 'relative'
                  }`}
      />
    </div>
  );
}
