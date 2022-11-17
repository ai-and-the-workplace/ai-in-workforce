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
      className={`transition-300 relative inline-block cursor-pointer text-center hover:-translate-y-1 md:inline-flex md:w-auto md:gap-2 
      ${
        hierarchy === 'primary'
          ? 'bg-gradient-to-r from-darkBlue to-lightBlue'
          : 'border border-darkBlue bg-white'
      }
      ${px} ${py} ${borderRadius} ${mobileFullWidth && 'w-full'}`}
      onClick={onClick}
    >
      <p
        className={`${
          hierarchy === 'primary' ? 'text-white' : 'text-darkBlue'
        } ${font}`}
      >
        {children}
      </p>
      {icon}
    </div>
  );
}
