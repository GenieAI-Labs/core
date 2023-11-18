import React, { useEffect, useState } from 'react';
import { FiArrowLeft, FiLoader, FiSend } from 'react-icons/fi';
import { Genie } from '../../types';
import DropDataGenieModal from '../Modal/DropDataGenieModal';
import { ThreadMessage, ThreadMessagesPage } from 'openai/resources/beta/threads/messages/messages';

interface IMessage {
  sender: 'user' | 'assistant';
  text: string;
}

interface GenieContentProps {
  selectedGenie: Genie;
  onBack: () => void;
  className?: string;
}

export default function GenieContent({ selectedGenie, onBack }: GenieContentProps) {
  const [userInput, setUserInput] = useState('');

  const [conversation, setConversation] = useState<ThreadMessage[]>([]);
  const [loading, setLoading] = useState(false);

  const [assistant, setAssistant] = useState<any>(null);

  async function postMessage() {
    setLoading(true);
    // Add user message to the conversation
    // setConversation(prevConvo => [...prevConvo, { sender: 'user', text: userInput }]);

    const existingThreadId = localStorage.getItem('threadId');

    try {
      const response = await fetch('/api/ai/create-message', {
        method: 'POST',
        body: JSON.stringify({ content: userInput, threadId: existingThreadId }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const { threadId, messages } = await response.json();
      console.log('response', { threadId, messages });

      // Assuming your API returns the assistant's response
      if (messages) {
        setConversation(messages.reverse());
      }

      if (threadId) {
        localStorage.setItem('threadId', threadId);
        console.log('Thread ID saved to local storage:', threadId);
      }
    } catch (error) {
      console.error('Error creating the thread:', error);
    } finally {
      setLoading(false);
      // Reset the input field
      setUserInput('');
    }
  }

  return (
    <>
      <div></div>
      <div className='flex-1'>
        <div className='bg-gray-100'>
          <button onClick={onBack} className='m-4 lg:hidden'>
            <FiArrowLeft size={24} />
          </button>

          <div className='flex justify-between items-center p-6 pt-0 sm:pt-6 border-l border-white'>
            <div>
              <h2 className='text-2xl font-bold'>{selectedGenie.name} Genie</h2>
              <p>{selectedGenie.headline}</p>
            </div>
            <DropDataGenieModal showPopup={false} />
          </div>
        </div>

        <div className='mt-4'>
          <div className='p-4 overflow-auto h-[calc(100vh-370px)] sm:h-[calc(100vh-400px)] md:h-[calc(100vh-380px)] lg:h-[calc(100vh-270px)]'>
            {conversation.map((msg, index) => (
              <div key={index} className={`message ${msg.role === 'user' ? 'text-right' : ''}`}>
                {msg.content.map((content, index) => (
                  <p key={index}>{content.text?.value}</p>
                ))}
              </div>
            ))}
          </div>
          <div className='flex mt-2 p-4 relative'>
            <input
              type='text'
              value={userInput}
              onChange={e => setUserInput(e.target.value)}
              className='border border-gray-200 rounded-xl p-2 flex-grow'
              placeholder='Type your message here'
            />
            <button
              onClick={postMessage}
              className='bg-blue-500 text-white p-2 rounded-full absolute right-0 mr-[22px] mt-[5px]'>
              {loading ? <FiLoader className='animate-spin' /> : <FiSend />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
