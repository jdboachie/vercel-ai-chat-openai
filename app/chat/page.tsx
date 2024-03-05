'use client';

import React from 'react';
import { Button } from "@/components/ui/button"
import { PaperPlane, Stop } from "@phosphor-icons/react/dist/ssr";
import { useEnterSubmit } from '@/lib/hooks/use-enter-submit'
import { UserAvatar, AIAvatar } from '@/components/avatars';
import Textarea from 'react-textarea-autosize'
import { cn } from '@/lib/utils';
import { useChat } from 'ai/react';
import { useState, KeyboardEvent, FormEvent } from 'react';
import ResponseLoadingSkeleton from "@/components/response-loading-skeleton";
import Error from "@/components/error";
import ChatBlank from "@/components/chat-blank";


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

  const inputRef = React.useRef<HTMLTextAreaElement>(null)
  const { formRef, onKeyDown } = useEnterSubmit()

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

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
        {(messages.length === 0 && !error) && <ChatBlank />}
        {isLoading && <ResponseLoadingSkeleton />}
        {error && <Error />}
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className='flex flex-col justify-between items-center fixed bottom-0 left-0 mx-auto w-full max-lg:w-full
        bg-gradient-to-b from-white via-neutral-50 to-neutral-100
        '
      >
        <div
          className='px-4 overflow-hidden flex w-full max-w-5xl space-x-2 flex-grow p-2 relative'
        >
          <Textarea
            ref={inputRef}
            tabIndex={0}
            rows={1}
            value={input}
            onKeyDown={onKeyDown}
            onChange={handleInputChange}
            placeholder="Message gpt-3.5-turbo..."
            spellCheck={false}
            className="min-h-[60px] w-full bg-transparent py-4 px-6 border ring-0 focus:ring-2 ring-neutral-500 rounded-3xl text-pretty focus:outline-none focus:ring-offset-2 transition-all duration-300 ease-in-out overflow-hidden resize-none whitespace-pre-wrap sm:text-sm"
          />
          {isLoading ? (
            <Button type="submit" variant="outline" size="icon" className={`rounded-full cursor-pointer shadow min-h-14 min-w-14`}>
              <Stop onClick={stop} className="h-5 w-5" />
            </Button>
          ) : (
            <Button type="submit" disabled={input===""} variant="outline" size="icon" className={`border-neutral-300 rounded-full cursor-pointer shadow min-h-14 min-w-14`}>
              <PaperPlane className="h-5 w-5" />
            </Button>
          )}
        </div>
        <p className="flex text-neutral-500 text-xs p-2 w-full h-full justify-center items-center max-w-5xl">
            <kbd>Alt</kbd> + <kbd>Enter</kbd> to submit
        </p>
      </form>
    </div>
  );
}
