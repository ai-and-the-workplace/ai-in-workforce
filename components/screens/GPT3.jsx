import { useState, useContext } from 'react';
import Button from '../UI/Button';
import { TASKS } from '../../constants/constants';
import ProgressContext from '../../store/progress';

export default function GPT3() {
  const progressContext = useContext(ProgressContext);

  const task = progressContext.progress.screen;

  const [promptInput, setPromptInput] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function promptChangeHandler(e) {
    setPromptInput(e.target.value);
  }

  async function promptSubmitHandler() {
    setIsLoading(true);

    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: promptInput }),
    });

    const data = await response.json();

    const promptResponse = data.response;

    progressContext.addInteraction(promptInput, promptResponse);

    setPromptInput('');
    setResponse(promptResponse);

    setIsLoading(false);
  }

  return (
    <div className="m-horizontal">
      <div className="mb-10 gap-4 md:mb-12">
        <h1 className="title mb-4 md:mb-6">{task}</h1>
        <div className="flex flex-col gap-2 md:gap-4">
          {TASKS[task].instructions.map((instruction, i) => (
            <p
              className="body leading-loose lg:leading-loose"
              key={`instruction-${i}`}
              dangerouslySetInnerHTML={{ __html: instruction }}
            />
          ))}
        </div>
      </div>
      <div className="mb-6 flex flex-col md:mb-10 md:flex-row">
        <textarea
          value={promptInput}
          onChange={promptChangeHandler}
          className="h-[128px] resize-none rounded-t-xl rounded-b-none border border-b-0 border-darkBlue bg-transparent py-3 px-4 text-darkBlue outline-none md:hidden"
          placeholder="Enter your prompt here."
        />
        <input
          type="text"
          value={promptInput}
          onChange={promptChangeHandler}
          className="hidden flex-grow rounded-l-xl rounded-r-none border border-r-0 border-darkBlue bg-transparent py-4 px-5 text-lg outline-none md:block md:rounded-l-2xl"
          placeholder="Enter your prompt here."
        />
        <Button
          hierarchy="primary"
          font="text-white text-base md:text-lg"
          py="py-3 md:py-4 md:px-7"
          borderRadius="rounded-b-xl border border-dark-blue md:rounded-none md:rounded-r-xl"
          onClick={promptSubmitHandler}
          disabled={promptInput === ''}
          mobileFullWidth={true}
          isLoading={isLoading}
          classes="hover:translate-y-0 justify-center"
        >
          Generate
        </Button>
      </div>
      <div className="border-blue-2 bg-blue-1 h-[280px] overflow-y-scroll rounded-xl border md:h-[360px] md:rounded-2xl">
        {response === '' ? (
          <p className="text-blue-2-disabled py-3 px-4 md:py-4 md:px-5 md:text-lg">
            AI response will be here...
          </p>
        ) : (
          <p className="py-3 px-4 leading-relaxed md:py-4 md:px-5 md:text-lg md:leading-loose">
            {response}
          </p>
        )}
      </div>
    </div>
  );
}
