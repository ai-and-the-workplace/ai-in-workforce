import { useContext } from 'react';
import ProgressContext from '../../store/progress';
import Button from '../UI/Button';
import rightChevron from '../../public/icons/right-chevron.svg';

export default function Landing() {
  const progressContext = useContext(ProgressContext);

  return (
    <div className="absolute inset-0">
      <div className="absolute top-1/2 w-full -translate-y-[60%] px-5 text-center">
        <h1 className="mb-6 text-4xl font-semibold text-darkBlue 2xs:text-5xl xs:text-6xl md:text-7xl lg:text-8xl">
          AI and Workforce
        </h1>
        <p className="mx-auto max-w-[640px] text-base text-darkBlue sm:text-xl md:mb-16">
          People have pre-conceived notions about AI. Through this study, we
          hope to understand how people&apos;s perceptions of AI change, after
          having interacted with such technologies.
        </p>
        <div className="hidden md:block">
          <Button
            hierarchy="primary"
            font="text-xl"
            px="pl-8 pr-6"
            py="py-4.5"
            borderRadius="rounded-full"
            icon={rightChevron}
            onClick={() => progressContext.changeScreen('introduction')}
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
          icon={rightChevron}
          onClick={() => progressContext.changeScreen('introduction')}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}
