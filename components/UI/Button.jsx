import Image from 'next/image';

export default function Button({
  hierarchy,
  font,
  px,
  py,
  borderRadius,
  icon,
  mobileFullWidth,
  onClick,
  children,
}) {
  return (
    <div
      className={`transition-300 relative cursor-pointer gap-2 hover:-translate-y-1 
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
                }`}
      onClick={onClick}
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
