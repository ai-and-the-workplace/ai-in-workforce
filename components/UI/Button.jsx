import Image from 'next/image';
import rightChevron from '../../public/icons/right-chevron.svg';

export function ContinueButton({ onClick, disabled = false, children }) {
  return (
    <Button
      hierarchy="primary"
      font="text-base md:text-lg xl:text-xl"
      py="py-4.5 md:py-6"
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
  classes,
}) {
  let buttonClasses = `relative flex items-center gap-2 ${px} ${py} ${borderRadius}`;

  if (hierarchy === 'primary') {
    buttonClasses += ' bg-gradient-to-r from-darkBlue to-lightBlue';
  } else {
    buttonClasses += ' border border-darkBlue bg-white';
  }

  if (mobileFullWidth) {
    buttonClasses +=
      ' inline-block w-full text-center md:inline-flex md:w-auto';
  } else {
    buttonClasses += ' inline-flex';
  }

  if (disabled) {
    buttonClasses += ' opacity-60 cursor-auto';
  } else {
    buttonClasses += ' transition-300 cursor-pointer hover:-translate-y-0.5';
  }

  buttonClasses += ` ${classes}`;

  return (
    <div className={buttonClasses} onClick={!disabled ? onClick : () => {}}>
      <p
        className={`${
          hierarchy === 'primary' ? 'text-white' : 'text-darkBlue'
        } ${font}`}
      >
        {children}
      </p>
      {icon && (
        <Image
          src={icon}
          alt="icon"
          className={`w-6 ${
            mobileFullWidth &&
            'absolute right-4 top-1/2 -translate-y-1/2 md:relative md:top-0 md:right-0 md:translate-y-0'
          }`}
        />
      )}
    </div>
  );
}
