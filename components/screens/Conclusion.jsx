import Paragraphs from '../UI/Paragraphs';

const TEXT = [
  'Thank you for participating in our study! You have helped advance science today.',
  'Please enter this completion code to manually enter on Prolific to complete the study: CVSO4P1K.',
  'If you have any questions or concerns regarding this research and/or your participation, please contact: Dr. Meena Andiappan, University of Toronto at <a href="mailto:meena.andiappan@utoronto.ca" class="underline">meena.andiappan@utoronto.ca.</a>',
  'For information regarding your rights as a research participant, please contact the Research Oversight and Compliance Office at <a href="tel:416-946-3273" class="underline">(416) 946-3273</a> or by email at <a href="mailto:ethics.review@utoronto.ca" class="underline">ethics.review@utoronto.ca</a>.',
];

export default function Conclusion() {
  return (
    <div className="m-horizontal">
      <h1 className="title mb-6">Conclusion</h1>
      <Paragraphs paragraphs={TEXT} />
    </div>
  );
}
