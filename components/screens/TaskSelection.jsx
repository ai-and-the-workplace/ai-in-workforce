import Image from 'next/image';
import { useContext } from 'react';
import ProgressContext from '../../store/progress';
import ModalContext from '../../store/modal';
import Paragraphs from '../UI/Paragraphs';
import helpIcon from '../../public/icons/help.svg';
import { TASKS } from '../../constants/constants';

const TEXT = [
  'Choose a task to complete. You will need to complete all 5 tasks. Click on the question mark to read instructions for the task.',
];

export default function TaskSelection() {
  const progressContext = useContext(ProgressContext);
  const modalContext = useContext(ModalContext);

  const tasksCompleted = progressContext.progress.tasksCompleted;

  let barWidth = 'w-[0%]';

  if (tasksCompleted === 1) {
    barWidth = 'w-[20%]';
  } else if (tasksCompleted === 2) {
    barWidth = 'w-[40%]';
  } else if (tasksCompleted === 3) {
    barWidth = 'w-[60%]';
  } else if (tasksCompleted === 4) {
    barWidth = 'w-[80%]';
  }

  console.log(barWidth);

  return (
    <div className="m-horizontal">
      <h1 className="title mb-6">Task Selection</h1>
      <Paragraphs paragraphs={TEXT} mb="mb-10 md:mb-16" />
      <div className="mb-5 flex h-1 justify-start rounded-full bg-grey">
        <div className={`h-full rounded-full bg-darkBlue ${barWidth}`} />
      </div>
      <div className="mb-10 text-right text-sm text-darkBlue md:mb-12 xl:text-base">
        {progressContext.progress.tasksCompleted}/5 tasks complete
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {Object.keys(TASKS).map((taskName) => {
          const task = TASKS[taskName];

          const taskCompleted = progressContext.progress.tasks[task.title];

          return (
            <div
              className="transition-300 relative flex cursor-pointer items-center gap-4 rounded-2xl border border-transparent bg-grey px-4 py-6 hover:border-greyBlue hover:bg-opacity-40 md:py-8"
              key={task.title}
              onClick={() => progressContext.changeScreen(task.title)}
            >
              <Image src={task.icon} alt={task.title} className="w-[60px]" />
              <div className="-mt-1.5">
                <p className="mb-2 text-[16px] font-semibold text-darkBlue md:text-[18px]">
                  {task.title}
                </p>
                <p
                  className={`text-sm md:text-base ${
                    taskCompleted ? 'text-green' : 'text-red'
                  }`}
                >
                  {taskCompleted ? 'Complete' : 'Not Complete'}
                </p>
                <Image
                  src={helpIcon}
                  alt="help icon"
                  className="absolute right-4.5 bottom-4.5 w-5"
                  onClick={(e) => {
                    e.stopPropagation();
                    modalContext.openModal(task.title, task.text);
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
