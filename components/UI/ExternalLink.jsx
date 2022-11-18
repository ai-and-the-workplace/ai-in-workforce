import Image from 'next/image';
import externalLink from '../../public/icons/external-link.svg';

export default function ExternalLink({ text, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="transition-300 block rounded-2xl border border-transparent bg-grey py-9 hover:border-greyBlue hover:bg-opacity-40"
    >
      <div className="flex items-center justify-center gap-4">
        <p className="text-xl font-semibold text-darkBlue md:text-2xl">
          {text}
        </p>
        <Image src={externalLink} alt="external link icon" className="w-7" />
      </div>
    </a>
  );
}
