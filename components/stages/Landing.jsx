import { useContext } from 'react';
import Image from 'next/image';
import StageContext from '../../store/stage';
import Button from '../UI/Button';
import rightChevron from '../../public/icons/right-chevron.svg';

export default function Landing() {
  const stageContext = useContext(StageContext);

  return (
    <div className="absolute inset-0">
      <div className="absolute top-1/2 w-full -translate-y-[60%] px-5 text-center">
        <h1 className="mb-6 text-4xl font-semibold text-darkBlue 2xs:text-5xl xs:text-6xl md:text-7xl lg:text-8xl">
          AI and Workforce
        </h1>
        <p className="mx-auto max-w-[640px] text-base text-darkBlue sm:text-lg md:mb-16">
          People have pre-conceived notions about AI. Through this study, we
          hope to understand how people&apos;s perceptions of AI change, after
          having interacted with such technologies.
        </p>
        <div className="hidden md:block">
          <Button
            hierarchy="primary"
            font="text-lg"
            px="pl-8 pr-6"
            py="py-4.5"
            borderRadius="rounded-full"
            icon={
              <Image
                src={rightChevron}
                alt="right chevron"
                className="absolute right-4 top-1/2 -translate-y-1/2 md:relative md:top-0 md:right-0 md:translate-y-0"
              />
            }
            onClick={() => stageContext.changeStage('introduction)')}
          >
            Get Started
          </Button>
        </div>
      </div>
      <div className="absolute bottom-16 w-full px-5 md:hidden">
        <Button
          hierarchy="primary"
          font="text-base"
          py="py-4"
          borderRadius="rounded-full"
          showArrow={true}
          mobileFullWidth={true}
          icon={
            <Image
              src={rightChevron}
              alt="right chevron"
              className="absolute right-4 top-1/2 -translate-y-1/2 md:relative md:top-0 md:right-0 md:translate-y-0"
            />
          }
          onClick={() => stageContext.changeStage('introduction)')}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}
