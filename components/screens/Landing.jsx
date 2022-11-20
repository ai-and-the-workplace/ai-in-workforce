import { useContext } from 'react';
import ProgressContext from '../../store/progress';
import { ContinueButton } from '../UI/Button';

export default function Landing() {
  const progressContext = useContext(ProgressContext);

  return (
    <div className="absolute inset-0">
      <div className="absolute top-1/2 w-full -translate-y-[60%] px-5 text-center">
        <h1 className="mb-6 text-4xl font-semibold text-darkBlue 2xs:text-5xl xs:text-6xl md:text-7xl lg:text-8xl">
          AI and Workforce
        </h1>
        <p className="mx-auto max-w-[640px] text-base leading-relaxed text-darkBlue sm:text-xl md:mb-16 md:leading-loose">
          People have pre-conceived notions about AI. Through this study, we
          hope to understand how people&apos;s perceptions of AI change, after
          having interacted with such technologies.
        </p>
        <div className="hidden md:block">
          <ContinueButton
            onClick={() => progressContext.changeScreen('Introduction')}
          >
            Get Started
          </ContinueButton>
        </div>
      </div>
      <div className="absolute bottom-16 w-full px-5 md:hidden">
        <ContinueButton
          onClick={() => progressContext.changeScreen('Introduction')}
        >
          Get Started
        </ContinueButton>
      </div>
    </div>
  );
}
