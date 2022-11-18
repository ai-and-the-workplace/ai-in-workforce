import Image from 'next/image';
import { useContext } from 'react';
import ProgressContext from '../../store/progress';
import summarizingText from '../../public/icons/summarizing-text.png';
import socialMediaContentGenerator from '../../public/icons/social-media-content-generator.png';
import copywriting from '../../public/icons/copywriting.png';
import captioningContent from '../../public/icons/captioning-content.png';
import creatingTextFromBulletPoints from '../../public/icons/creating-text-from-bullet-points.png';
import helpIcon from '../../public/icons/help.svg';

const TASKS = [
  {
    title: 'Summarizing Text',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra sodales metus, sit amet aliquam dolor consequat et. Mauris vel odio eget eros sodales rhoncus. Duis vestibulum, metus vitae placerat scelerisque, justo justo volutpat massa, at scelerisque nisi eros imperdiet justo.',
    icon: summarizingText,
  },
  {
    title: 'Social Media Content Generator',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra sodales metus, sit amet aliquam dolor consequat et. Mauris vel odio eget eros sodales rhoncus. Duis vestibulum, metus vitae placerat scelerisque, justo justo volutpat massa, at scelerisque nisi eros imperdiet justo.',
    icon: socialMediaContentGenerator,
  },
  {
    title: 'Copywriting',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra sodales metus, sit amet aliquam dolor consequat et. Mauris vel odio eget eros sodales rhoncus. Duis vestibulum, metus vitae placerat scelerisque, justo justo volutpat massa, at scelerisque nisi eros imperdiet justo.',
    icon: copywriting,
  },
  {
    title: 'Captioning Content',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra sodales metus, sit amet aliquam dolor consequat et. Mauris vel odio eget eros sodales rhoncus. Duis vestibulum, metus vitae placerat scelerisque, justo justo volutpat massa, at scelerisque nisi eros imperdiet justo.',
    icon: captioningContent,
  },
  {
    title: 'Creating Text From Bullet Points',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra sodales metus, sit amet aliquam dolor consequat et. Mauris vel odio eget eros sodales rhoncus. Duis vestibulum, metus vitae placerat scelerisque, justo justo volutpat massa, at scelerisque nisi eros imperdiet justo.',
    icon: creatingTextFromBulletPoints,
  },
];

export default function TaskSelection() {
  const progressContext = useContext(ProgressContext);

  return (
    <div className="m-horizontal">
      <h1 className="title mb-6">Task Selection</h1>
      <p className="body mb-7 md:mb-9">
        Choose a task to complete. You will need to complete all 5 tasks.
      </p>
      <div className="mb-5 flex h-1 justify-start rounded-full bg-grey">
        <div className="transition-300 w-[20%] rounded-full bg-darkBlue" />
      </div>
      <div className="mb-10 text-right text-sm text-darkBlue md:mb-12 xl:text-base">
        1/5 tasks complete
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {TASKS.map((task) => {
          const taskCompleted =
            progressContext.progress.tasksCompleted[task.title];

          return (
            <div
              className="relative flex items-center gap-4 rounded-2xl bg-grey p-4 md:py-5"
              key={task.title}
            >
              <Image src={task.icon} alt={task.title} className="w-[60px]" />
              <div className="-mt-1.5">
                <p className="mb-0.5 text-base font-semibold text-darkBlue">
                  {task.title}
                </p>
                <p
                  className={`text-sm ${
                    taskCompleted ? 'text-green' : 'text-red'
                  }`}
                >
                  {taskCompleted ? 'Complete' : 'Not Complete'}
                </p>
                <Image
                  src={helpIcon}
                  alt="help icon"
                  className="absolute right-4.5 bottom-4.5 w-5"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
