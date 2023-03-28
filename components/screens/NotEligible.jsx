import { ContinueButton } from '../UI/Button';
import Paragraphs from '../UI/Paragraphs';

const TEXT = [
  'Unfortunately, you are not eligible to participate in this study.',
  'You will be compensated for your time.',
];

export default function NotEligible() {
  return (
    <div className="m-horizontal">
      <h1 className="title mb-6">Not Eligible</h1>
      <Paragraphs paragraphs={TEXT} mb="mb-16" />
      <ContinueButton onClick={() => window.close()}>Exit Study</ContinueButton>
    </div>
  );
}
