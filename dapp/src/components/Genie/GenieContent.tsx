import React, { useEffect, useState } from 'react';
import { FiArrowLeft, FiSend } from 'react-icons/fi';
import { Genie } from '../../types';
import DropDataGenieModal from '../Modal/DropDataGenieModal';

interface IMessage {
  sender: 'user' | 'assistant';
  text: string;
}

interface GenieContentProps {
  selectedGenie: Genie;
  onBack: () => void;
}

export default function GenieContent({ selectedGenie, onBack }: GenieContentProps) {
  const [userInput, setUserInput] = useState('');
  const [conversation, setConversation] = useState<IMessage[]>([]);
  const [assistant, setAssistant] = useState<any>(null);

  console.log({ assistant });

  useEffect(() => {
    const fetchAssistant = async () => {
      const response = await fetch('/api/ai/retreive-assistant');
      const assistant = await response.json();
      console.log('assistant', assistant);
    };
    fetchAssistant();
  }, []);

  //   const sendMessageToAssistant = async (userMessage: string) => {
  //     try {
  //       const response = await openai.createChatCompletion({
  //         model: 'gpt-3.5-turbo',
  //         messages: [
  //           { role: 'system', content: 'You are a helpful assistant.' },
  //           { role: 'user', content: userMessage },
  //         ],
  //       });

  //       return response?.data.choices[0].message.content;
  //     } catch (error) {
  //       console.error('Error calling OpenAI:', error);
  //       return "I'm having trouble understanding right now.";
  //     }
  //   };

  //   const sendMessage = async () => {
  //     const userMessage: IMessage = { sender: 'user', text: userInput };
  //     setConversation(prev => [...prev, userMessage]);
  //     setUserInput('');

  //     const assistantResponseText = await sendMessageToAssistant(userInput);
  //     const openAIResponse: IMessage = { sender: 'assistant', text: assistantResponseText };
  //     setConversation(prev => [...prev, openAIResponse]);
  //   };

  return (
    <>
      <div className='flex-1 p-4'>
        <button onClick={onBack} className='mb-4 lg:hidden'>
          <FiArrowLeft size={24} />
        </button>

        <div className='flex justify-between items-center'>
          <div>
            <h2 className='text-2xl font-bold'>{selectedGenie.name} Genie</h2>
            <p>{selectedGenie.info}</p>
          </div>
          <DropDataGenieModal showPopup={false} />
        </div>

        <div className='mt-4'>
          <div className='border p-2 h-64 overflow-auto'>
            {conversation.map((msg, index) => (
              <div key={index} className={`message ${msg.sender === 'user' ? 'text-right' : ''}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className='flex mt-2'>
            <input
              type='text'
              value={userInput}
              onChange={e => setUserInput(e.target.value)}
              className='border p-2 flex-grow'
              placeholder='Type your message here'
            />
            <button className='ml-2 bg-blue-500 text-white p-2'>
              <FiSend />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
