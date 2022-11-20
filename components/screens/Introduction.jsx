import { useContext } from 'react';
import ProgressContext from '../../store/progress';
import Paragraphs from '../UI/Paragraphs';
import { ContinueButton } from '../UI/Button';

const TEXT = [
  "The following study is conducted by researchers from the University of Toronto in Canada. We are interested in how people's behavior in workplace settings.",
  'Please note that the study consists of questions where you will have to indicate your choices and preferences, as well as perform basic knowledge and administrative worker tasks.',
  'Some people might not like answering these questions and tend to quit a survey once they see them. If a sizable number of people quit a survey halfway, the data quality would be compromised. However, our research depends on good quality data. Thus, please make sure you do not mind such questions before starting this study.',
];

export default function Introduction() {
  const progressContext = useContext(ProgressContext);

  return (
    <div className="m-horizontal">
      <h1 className="title mb-6">Introduction</h1>
      <Paragraphs paragraphs={TEXT} mb="mb-14" />
      <ContinueButton onClick={() => progressContext.changeScreen('Consent')}>
        Continue
      </ContinueButton>
    </div>
  );
}
