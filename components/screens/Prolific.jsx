import { useContext } from 'react';
import { ContinueButton } from '../UI/Button';
import ProgressContext from '../../store/progress';

export default function Prolific() {
  const progressContext = useContext(ProgressContext);

  console.log(progressContext.progress.prolificID);

  return (
    <div className="m-horizontal">
      <h1 className="title mb-6">Enter Prolific ID</h1>
      <p className="body mb-6 leading-loose md:mb-9">
        Please enter your Prolific ID here:
      </p>
      <input
        type="text"
        className="transition-300 mb-14 block w-full rounded-[7px] border border-greyBlue bg-transparent px-4 py-3 text-base text-darkBlue outline-none hover:border-darkBlue lg:text-lg"
        onChange={(e) => progressContext.setProlificID(e.target.value)}
      />
      <ContinueButton
        onClick={() => progressContext.changeScreen('Pre-Study Survey')}
      >
        Continue
      </ContinueButton>
    </div>
  );
}
