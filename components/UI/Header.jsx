import { useContext } from 'react';
import Image from 'next/image';
import StageContext from '../../store/stage';
import Button from './Button';
import uoft from '../../public/icons/u-of-t.png';
import upRightArrow from '../../public/icons/up-right-arrow.svg';

export default function Header() {
  const stageContext = useContext(StageContext);

  return (
    <div className="relative z-10 flex h-16 items-center justify-between px-5 pt-14 md:px-12 md:pt-16">
      <div className="flex items-center gap-4">
        <Image src={uoft} alt="U of T logo" className="w-4" />
        <h2 className="text-base text-darkBlue">University of Toronto</h2>
      </div>
      {stageContext.stage === 'landing' && (
        <div className="hidden md:inline-block">
          <Button
            hierarchy="secondary"
            font="text-base"
            px="pl-6 pr-5"
            py="py-4"
            borderRadius="rounded-full"
            icon={
              <Image src={upRightArrow} alt="up right arrow" className="w-6" />
            }
          >
            Learn More
          </Button>
        </div>
      )}
    </div>
  );
}
