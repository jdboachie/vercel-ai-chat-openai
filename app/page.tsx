'use client';

import { Button } from "@/components/ui/button"
import { PaperPlaneIcon, StopIcon } from "@radix-ui/react-icons"

import { UserAvatar, AIAvatar } from '@/components/avatars';
import { cn } from '@/lib/utils';
import { useChat } from 'ai/react';
import { useState, KeyboardEvent, FormEvent } from 'react';
import ResponseLoadingSkeleton from "@/components/response-loading-skeleton";
import Error from "@/components/error";
import PromptSuggestions from "@/components/prompt-suggestions";


export default function Chat() {
  const {
    stop,
    handleInputChange,
    handleSubmit,
    input,
    error,
    messages,
    isLoading,
  } = useChat();
  const [rows, setRows] = useState<number>(1)
  const [disabled, setDisabled] = useState<boolean>(input==="")

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && e.altKey) {
      // If Enter is pressed without Alt, call handleSubmit
      const fakeSubmitEvent: FormEvent<HTMLFormElement> = {} as FormEvent<HTMLFormElement>;
      handleSubmit(fakeSubmitEvent); // Call handleSubmit with a fake event
      console.log('submitting')
    } else if (e.key === 'Enter' && !e.altKey) {
      // If Alt + Enter is pressed, add a new row
      let calcRows = input.split('\n').length + 1;
      setRows(calcRows)
    } else if (e.key === "Backspace") {
      let calcRows = input.split('\n').length - 1;
      if (calcRows === 0) {
        setRows(1)
      } else {
        setRows(calcRows)
      }
    }
  };

  return (
    <div className="flex flex-col max-w-[48rem] h-screen w-full pt-16 pb-60 space-y-4 mx-auto stretch">
      <div className="pb-60 max-sm:px-2 flex flex-col justify-start items-start w-full h-fit">
        {messages.map(m => (
          <div
            key={m.id}
            className="whitespace-pre-wrap flex items-start space-x-4 p-4"
          >
            <div className="">
              {m.role === 'user' ? <UserAvatar /> : <AIAvatar /> }
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-neutral-500 text-xs">
                {m.role === 'user' ? 'You' : 'AI (gpt-3.5-turbo)'}
              </p>
              <p className="text">
                {m.content}
              </p>
            </div>
          </div>
        ))}
        {messages.length === 0 && <PromptSuggestions />}
        {isLoading && <ResponseLoadingSkeleton />}
        {error && <Error />}
      </div>

      <form onSubmit={handleSubmit} className='flex flex-col justify-between items-center fixed bottom-0 left-0 mx-auto w-full max-lg:w-full'>
        <div
          className='bg-gradient-to-b px-4 from-neutral-50 to-neutral-50 overflow-hidden flex w-full max-w-4xl flex-grow p-2 relative space-x-2'
        >
          <textarea
            rows={rows}
            value={input}
            placeholder="Message gpt-3.5-turbo..."
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className={cn(
              "w-full py-4 px-6 border ring-0 focus:ring-2 ring-neutral-500 rounded-3xl shadow shadow-neutral-200 text-pretty focus:outline-none focus:ring-offset-2 transition-all duration-300 ease-in-out overflow-hidden resize-none whitespace-pre-wrap",
              )}
          />
            {isLoading ? (
              <Button type="submit" variant="outline" size="icon" className={`absolute right-8 top-4 cursor-pointer ${ disabled && `cursor-pointer` } h-10 w-10 border-none rounded-full shadow-none`}>
                <StopIcon onClick={stop} className="h-4 w-4" />
              </Button>
            ) : (
              <Button type="submit" disabled={input===""} variant="outline" size="icon" className={`absolute right-8 top-4 cursor-pointer ${ disabled && `cursor-pointer` } h-10 w-10 border-one rounded-full shadow-none`}>
                <PaperPlaneIcon className="h-4 w-4" />
              </Button>
            )}
        </div>
        <p className="flex text-neutral-500 text-xs p-4 w-full h-full justify-center items-center max-w-4xl bg-gradient-to-b from-neutral-50 to-neutral-100">
            <kbd>Alt</kbd> + <kbd>Enter</kbd> to submit
        </p>
      </form>
    </div>
  );
}
