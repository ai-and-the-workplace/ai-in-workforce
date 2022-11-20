import { useContext } from 'react';
import Image from 'next/image';
import ProgressContext from '../../store/progress';
import Timer from './Timer';
import Button from './Button';
import { TASKS } from '../../constants/constants';
import uoftLogo from '../../public/icons/u-of-t.png';
import upRightArrow from '../../public/icons/up-right-arrow.svg';

export default function Header() {
  const progressContext = useContext(ProgressContext);

  return (
    <div className="relative z-10 mb-14 flex h-16 items-center justify-between px-5 pt-14 xs:px-9 md:mb-20 md:px-12 md:pt-16">
      <div className="flex items-center gap-4">
        <Image
          src={uoftLogo}
          alt="U of T logo"
          className="w-4"
          onClick={() => localStorage.clear('progress')}
        />
        <h2 className="text-base text-darkBlue">University of Toronto</h2>
      </div>
      {Object.hasOwn(TASKS, progressContext.progress.screen) && <Timer />}
      {progressContext.progress.screen === 'Landing' && (
        <div className="hidden sm:inline-block">
          <Button
            hierarchy="secondary"
            font="text-base"
            px="pl-6 pr-5"
            py="py-3.5 md:py-4"
            borderRadius="rounded-full"
            mobileFullWidth={false}
            icon={upRightArrow}
            onClick={() =>
              window.open(
                'https://ihpme.utoronto.ca/2022/06/beyond-myths-dr-meena-andiappan-to-study-attitudes-and-perceptions-of-ai-in-the-workplace/',
                '_blank'
              )
            }
          >
            Learn More
          </Button>
        </div>
      )}
    </div>
  );
}
