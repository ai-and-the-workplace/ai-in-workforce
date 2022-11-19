import { useState } from 'react';
import Button from '../UI/Button';

export default function SummarizingText() {
  const [promptInput, setPromptInput] = useState('');
  const [response, setResponse] = useState('');
  const [waitingForResponse, setWaitingForResponse] = useState(false);

  function promptChangeHandler(e) {
    setPromptInput(e.target.value);
  }

  async function promptSubmitHandler() {
    setWaitingForResponse(true);
    setPromptInput('');

    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: promptInput }),
    });

    const data = await response.json();

    setResponse(data.response);

    setWaitingForResponse(false);
  }

  return (
    <div className="m-horizontal">
      <h1 className="title mb-6 md:mb-9">Summarizing Text</h1>
      <div className="mb-6 flex flex-col md:mb-10 md:flex-row">
        <textarea
          value={promptInput}
          onChange={promptChangeHandler}
          className="h-[128px] resize-none rounded-t-xl rounded-b-none border border-b-0 border-darkBlue bg-transparent py-3 px-4 text-darkBlue outline-none md:hidden"
          placeholder="Write a tagline for an ice cream shop."
        />
        <input
          type="text"
          value={promptInput}
          onChange={promptChangeHandler}
          className="hidden flex-grow rounded-l-xl rounded-r-none border border-r-0 border-darkBlue bg-transparent py-4 px-5 text-lg outline-none md:block md:rounded-l-2xl"
          placeholder="Write a tagline for an ice cream shop."
        />
        <Button
          hierarchy="primary"
          font="text-white text-base md:text-lg"
          py="py-4 md:px-7"
          borderRadius="rounded-b-xl border border-dark-blue md:rounded-none md:rounded-r-xl"
          onClick={promptSubmitHandler}
          disabled={promptInput === ''}
          mobileFullWidth={true}
          isLoading={waitingForResponse}
          classes="hover:translate-y-0"
        >
          Generate
        </Button>
      </div>
      <div className="border-blue-2 bg-blue-1 h-[280px] rounded-xl border md:h-[360px] md:rounded-2xl">
        {response === '' ? (
          <p className="text-blue-2-disabled py-3 px-4 md:py-4 md:px-5 md:text-lg">
            AI response will be here...
          </p>
        ) : (
          <p className="py-3 px-4 md:py-4 md:px-5 md:text-lg">{response}</p>
        )}
      </div>
    </div>
  );
}
