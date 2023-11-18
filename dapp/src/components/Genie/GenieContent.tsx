import React, { use, useEffect, useState } from 'react';
import { FiArrowLeft, FiLoader, FiSend } from 'react-icons/fi';
import { IGenie } from '../../types';
import DropDataGenieModal from '../Modal/DropDataGenieModal';
import { ThreadMessage, ThreadMessagesPage } from 'openai/resources/beta/threads/messages/messages';

interface IMessage {
  sender: 'user' | 'assistant';
  text: string;
}

interface GenieContentProps {
  selectedGenie: IGenie;
  onBack: () => void;
  className?: string;
}

export default function GenieContent({ selectedGenie, onBack }: GenieContentProps) {
  const [userInput, setUserInput] = useState('');

  const [messages, setMessages] = useState<ThreadMessage[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMessages = async () => {
      const existingThreadId = localStorage.getItem(`threadId-${selectedGenie.id}`);

      if (existingThreadId) {
        const response = await fetch(`/api/ai/fetch-messages?threadId=${existingThreadId}`, {
          method: 'GET',
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const { messages } = await response.json();
        console.log('response', { messages });

        if (messages) {
          setMessages(messages.reverse());
        }
      }
    };
    fetchMessages();
  }, [selectedGenie.id]);

  async function postMessage(e) {
    e.preventDefault();
    setLoading(true);
    // Add user message to the messages

    const pendingMessage: ThreadMessage = {
      id: 'msg_pending',
      object: 'thread.message',
      created_at: 1700303994,
      thread_id: 'thread',
      role: 'user',
      content: [
        {
          type: 'text',
          text: {
            value: userInput,
            annotations: [],
          },
        },
      ],
      file_ids: [],
      assistant_id: null,
      run_id: null,
      metadata: {},
    };

    setMessages([...messages, pendingMessage]);
    setUserInput('');

    const existingThreadId = localStorage.getItem(`threadId-${selectedGenie.id}`);

    try {
      const response = await fetch('/api/ai/create-message', {
        method: 'POST',
        body: JSON.stringify({
          content: userInput,
          asssitantId: 'asst_MzDSgPrndkcyYkScrkaEXbSa',
          threadId: existingThreadId,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const { threadId, messages } = await response.json();
      console.log('response', { threadId, messages });

      if (messages) {
        setMessages(messages.reverse());
      }

      if (threadId) {
        localStorage.setItem(`threadId-${selectedGenie.id}`, threadId);
        console.log('Thread ID saved to local storage:', threadId);
      }
    } catch (error) {
      console.error('Error creating the thread:', error);
    } finally {
      setLoading(false);
      // Reset the input field
    }
  }

  return (
    <>
      <div></div>
      <div className='flex-1'>
        <div className='border-b border-gray-200'>
          <button onClick={onBack} className='m-4 md:hidden'>
            <FiArrowLeft size={24} />
          </button>

          <div className='flex justify-between items-center p-6 pt-0 sm:pt-6 border-l border-white'>
            <div>
              <h2 className='text-2xl font-bold'>{selectedGenie.name} Genie</h2>
              <p>{selectedGenie.headline}</p>
            </div>
            <DropDataGenieModal showPopup={false} activeGenieId={selectedGenie.id} />
          </div>
        </div>

        <div className='mt-4'>
          <div className='p-4 pb-2 overflow-auto h-[calc(100vh-370px)] sm:h-[calc(100vh-400px)] md:h-[calc(100vh-270px)] lg:h-[calc(100vh-270px)]'>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message p-2 text-gray-900 flex transition-opacity ${
                  msg.role === 'user' ? '' : ''
                }`}>
                <div className='max-w-[30px] w-full mr-2'>
                  <img
                    className='overflow-hidden rounded-full'
                    src={
                      msg.role === 'user' ? `/images/default-avatar-1.jpg` : selectedGenie.picture
                    }
                    alt=''
                    height={40}
                    width={40}
                  />
                </div>
                <div className=''>
                  <p className='font-bold text-md'>
                    {msg.role === 'user' ? 'you' : selectedGenie.name}
                  </p>
                  {msg.content.map((content, index) => (
                    <p className='text-sm ' key={index}>
                      {content.text?.value}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className='flex mt-2 p-4 '>
            <form onSubmit={postMessage} className='w-full relative'>
              <input
                type='text'
                value={userInput}
                onChange={e => setUserInput(e.target.value)}
                className='border border-gray-200 rounded-xl p-2 w-full'
                placeholder='Type your message here'
              />
              <button
                type='submit'
                className='bg-endnight text-white p-2 rounded-full absolute right-0 top-0 mr-[12px] mt-[5px]'>
                {loading ? <FiLoader className='animate-spin' /> : <FiSend />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
